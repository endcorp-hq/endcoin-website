import goal from '../../images/goal.png';
import AreaChart from '../graph/area-chart';
import { EReducerState } from '../../app/enum';
import {
  selectGraphDataPoints,
  selectProgramStatus,
  fetchProgramBalanceAsync,
} from '../program/program-slice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Coin from './Coin';
import About from './About';
import Contact from './Contact';
import Hackathon from './Hackathon';
import WhitePaper from './WhitePaper';
import DataGraph from './DataGraph';

export default function Landing() {
  const programStatus: EReducerState = useAppSelector(selectProgramStatus);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex flex-col bg-[#09090E]">
        <Coin />
        <About />
        <WhitePaper />
        <Hackathon />
        <DataGraph />
        <Contact />
      </div>
    </>
  );
}
