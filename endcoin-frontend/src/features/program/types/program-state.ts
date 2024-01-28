import { SliceState } from '../../../app/types';
import { GraphPoint } from './graph-point';

export interface ProgramState extends SliceState {
  graphDataPoints: GraphPoint[];
}
