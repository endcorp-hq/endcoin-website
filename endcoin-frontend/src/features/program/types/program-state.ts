import { SliceState } from '../../../app/types';

export interface ProgramState extends SliceState {
  graphDataPoints: number[];
}
