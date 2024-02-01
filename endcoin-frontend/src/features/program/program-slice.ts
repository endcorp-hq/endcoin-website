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
    const programId = '3ueQV5DMwmnif9JBmf7SSvD6Lsf13nBu4dzCQfsjZX3d';
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    let dataPoints: GraphPoint[] = [];

    // Fetch the signatures of all transactions involving the program
    const signaturesInfo = await connection.getSignaturesForAddress(
      new PublicKey(programId),
    );

    //Iterate over each signature to fetch the transaction details
    const signatureArray = Array.from(signaturesInfo.entries());
    signatureArray.reverse();
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
        if (!transaction.meta) {
          console.log('No transaction meta');
          continue;
        }

        let postBalance = 0;
        if (transaction.meta.postTokenBalances) {
          let endBalance = 0;
          let gaiaBalance = 0;
          let plsBalance = 0;
          const plsAddress = 'PLSxiYHus8rhc2NhXs2qvvhAcpsa4Q3TzTCi3o8xAEU';
          const gaiaAddress = 'GAiAxUPQrUaELAuri8tVC354bGuUGGykCN8tP4qfCeSp';
          const endAddress = 'ENDxPmLfBBTVby7DBYUo4gEkFABQgvLP2LydFCzGGBee';
          if (transaction.meta.postTokenBalances.length > 0) {
            const tokenBalances = transaction.meta.postTokenBalances;
            for (let i = 0; i < tokenBalances.length; i++) {
              const tokenBalance = tokenBalances[i];
              if (tokenBalance.mint === plsAddress) {
                console.log(
                  'PLS Balance: ' + tokenBalance.uiTokenAmount.amount,
                );
                plsBalance = tokenBalance.uiTokenAmount.uiAmount!;
              }
              if (tokenBalance.mint === gaiaAddress) {
                console.log(
                  'GAIA Balance: ' + tokenBalance.uiTokenAmount.uiAmount,
                );
                gaiaBalance = tokenBalance.uiTokenAmount.uiAmount!;
              }
              if (tokenBalance.mint === endAddress) {
                console.log(
                  'END Balance: ' + tokenBalance.uiTokenAmount.uiAmount,
                );
                endBalance = tokenBalance.uiTokenAmount.uiAmount!;
              }
              if (endBalance === 0 || gaiaBalance === 0) {
                continue;
              }
              postBalance = endBalance / gaiaBalance;
            }
          }
        }

        if (postBalance === 0) {
          continue;
        }
        const graphPoint: GraphPoint = {
          blocktime: transaction.blockTime!,
          EndGaia: postBalance,
        };
        dataPoints.push(graphPoint);
      }
    }
    //sort the data by uv
    dataPoints.sort((a, b) => a.EndGaia - b.EndGaia);
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
