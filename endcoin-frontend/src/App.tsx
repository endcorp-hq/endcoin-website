import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import {
  selectGraphDataPoints,
  fetchProgramBalanceAsync,
} from './features/program/program-slice';
import AreaChart from './features/graph/area-chart';

function App() {
  const dataPoints = useAppSelector(selectGraphDataPoints);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProgramBalanceAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="App">
        <AreaChart />
      </div>
    </>
  );
}

export default App;
