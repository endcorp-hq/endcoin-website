import Layout from '../../../app/Layout/layout';
import AreaChart from '../../graph/area-chart';

type Props = {};

const DataGraph = (props: Props) => {
  return (
    <Layout brownBackground={true}>
      <div
        id="dataGraph"
        className="flex flex-col justify-center items-start py-[75px] gap-y-[50px] font-endcoin"
      >
        <p className="text-white text-[30px] endcoin-md:text-[40px] endcoin-xl:text-[48px] text-left font-endcoin-bold">
          Where are we now?
        </p>
        <p className="text-[14px] endcoin-md:text-[18px] text-white">
          Andrew recently completed the 
          <a
            className="text-end-button-blue hover:underline"
            href="https://web3builders.dev/"
          >
            web 3 builders alliance (WBA)
          </a>{' '}
          Q4 Cohort, where we deployed an MVP POC to solana devnet. This version
          reads sea surface temperature from a data API, which is read by the
          solana program. This data drives the emission rate of end coin and
          gaia coin. When temperatures rise more gaia coin than endcoin are
          created. When temperatures fall, more endcoin than gaiacoin are
          emitted. When viewed as a pair in an AMM, this draws a “heartbeat” the
          “pulse on climate” – here is this data, being pulled live from the AMM
          on devnet, showing the last 30 days of emissions:
        </p>

        <div className="flex flex-col max-w-full">
          <AreaChart />
        </div>
      </div>
    </Layout>
  );
};

export default DataGraph;
