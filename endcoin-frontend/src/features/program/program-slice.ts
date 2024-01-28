import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, store } from '../../app/store';
import { ProgramState } from './types/program-state';
import { EReducerState } from '../../app/enum';
import { GraphPoint } from './types/graph-point';
import {
  Connection,
  GetVersionedTransactionConfig,
  PublicKey,
  clusterApiUrl,
} from '@solana/web3.js';

const initialState: ProgramState = {
  status: EReducerState.IDLE,
  graphDataPoints: [],
};

export const selectGraphDataPoints = (state: RootState) =>
  state.program.graphDataPoints;
export const selectProgramStatus = (state: RootState) => state.program.status;

export const programSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {
    setGraphDataPoints: (state, action: PayloadAction<GraphPoint[]>) => {
      state.graphDataPoints = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProgramBalanceAsync.pending, (state) => {
        state.status = EReducerState.LOADING;
        console.log('perform fetch program balance async pending');
      })
      .addCase(
        fetchProgramBalanceAsync.fulfilled,
        (state, action: PayloadAction<GraphPoint[]>) => {
          state.graphDataPoints = action.payload;
          state.status = EReducerState.IDLE;
          console.log('perform fetch program balance async fulfilled');
        },
      )
      .addCase(fetchProgramBalanceAsync.rejected, (state, action) => {
        state.status = EReducerState.FAILED;
        console.log(
          `perform fetch program balance async rejected ${action.error.message}`,
        );
        console.log(action.error);
      });
  },
});

//get nonce from backend
export const fetchProgramBalanceAsync = createAsyncThunk(
  'program/fetch-program-balance',
  async (_, { getState }) => {
    const programId = 'Dm8CMAiXHEcpxsN1p69BGy1veoUvfTbCgjv9eiH3U7eH';
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    let dataPoints: GraphPoint[] = [];

    // Fetch the signatures of all transactions involving the program
    const signaturesInfo = await connection.getSignaturesForAddress(
      new PublicKey(programId),
    );

    //Iterate over each signature to fetch the transaction details
    const signatureArray = Array.from(signaturesInfo.entries());
    for (const [index, signatureInfo] of signatureArray) {
      const signature = signatureInfo.signature;
      const transactionConfig: GetVersionedTransactionConfig = {
        commitment: 'finalized',
        maxSupportedTransactionVersion: 2,
      };

      const transaction = await connection.getTransaction(
        signature,
        transactionConfig,
      );

      if (transaction) {
        // Iterate over each account involved in the transaction
        const entriesArray = Array.from(
          transaction.transaction.message.accountKeys.entries(),
        );
        for (const [index2, account] of entriesArray) {
          // for (const [
          //   index,
          //   account,
          // ] of transaction.transaction.message.accountKeys.entries()) {
          if (!transaction.meta) {
            console.log('No transaction meta');
            continue;
          }

          const postBalance = transaction.meta.postBalances[index2];
          const graphPoint: GraphPoint = {
            name: index,
            uv: postBalance,
          };
          dataPoints.push(graphPoint);

          // console.log(`Account: ${account.toString()}`);
          // console.log(`Pre-Transaction Balance: ${preBalance}`);
          // console.log(`Post-Transaction Balance: ${postBalance}`);
          // console.log('---------------------------');
        }
      }
    }
    return dataPoints;
  },
  {
    condition: (_, { getState, extra }) => {
      const { program: state } = getState() as { program: ProgramState };
      if (state.status === EReducerState.LOADING) {
        console.log('perform fetch data points async already loading');
        return false;
      }
    },
  },
);

export const { setGraphDataPoints } = programSlice.actions;
export const programReducer = programSlice.reducer;
