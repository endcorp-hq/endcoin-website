import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, store } from '../../app/store';
import { ProgramState } from './types/program-state';
import { EReducerState } from '../../app/enum';

const initialState: ProgramState = {
  status: EReducerState.IDLE,
  graphDataPoints: [],
};

export const selectGraphDataPoints = (state: RootState) =>
  state.program.graphDataPoints;

export const programSlice = createSlice({
  name: 'program',
  initialState,
  reducers: {
    setGraphDataPoints: (state, action: PayloadAction<number[]>) => {
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
        (state, action: PayloadAction<number[]>) => {
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
    console.log('hello');
    const numArray = [1, 2, 3, 4, 5];
    return numArray;
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
