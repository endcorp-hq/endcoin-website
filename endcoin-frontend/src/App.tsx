import { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './app/hooks';
import { fetchProgramBalanceAsync } from './features/program/program-slice';

import Landing from './features/landing/landing';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProgramBalanceAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        {' '}
        <Landing />
      </div>
      {/* <div className="App">
        {programStatus === EReducerState.LOADING && (
          <div className="App-loading-font">Loading...</div>
        )}
        {programStatus === EReducerState.IDLE && (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1>Endcoin/Gaiacoin</h1>
            <AreaChart />
          </div>
        )}
      </div> */}
    </>
  );
}

export default App;
