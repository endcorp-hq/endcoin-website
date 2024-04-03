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
import Layout from '../../app/Layout/layout';
import Contact from './Contact';
import Hackathon from './Hackathon';
import WhitePaper from './WhitePaper';

export default function Landing() {
  const programStatus: EReducerState = useAppSelector(selectProgramStatus);
  const dispatch = useAppDispatch();
  return (
    <>
      <Layout blackBackground={true}>
        <div className="flex flex-col gap-y-[80px]">
          <Coin />
          <About />
          <Hackathon />
          <WhitePaper />
          <Contact />
        </div>
      </Layout>

      {/* <div className="bg px-6 py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <p className="text-base font-semibold leading-7 text-indigo-600">
            Endcoin
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pulse on Climate
          </h1>
          <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
            Mission
          </h2>
          <p className="mt-6 text-xl leading-8">
            To promote sustainable economic growth and support green
            technologies, we propose the use of sea surface temperature data as
            a monitoring tool for Earth's overall health. By harnessing
            decentralized data networks and blockchain technology, we aim to
            restore sovereignty to the Earth and encourage responsible
            decision-making for the betterment of our planet.
          </p>
          <div className="mt-10 max-w-2xl">
            <h2 className="pb-5 mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Colosseum Hackathon
            </h2>
            <img
              src={goal}
              alt="Product screenshot"
              // className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
              // width={914}
              // height={861}
            />
            <ul className="list-disc list-outside [&_ul]:list-[revert]">
              <li>
                We are entering the Colosseum Renaissance hackathon to compete
                for top prize in DePin, DeFi and Climate.{' '}
                <a
                  href="https://www.colosseum.org/renaissance"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'underline', color: 'blue' }}
                >
                  https://www.colosseum.org/renaissance
                </a>
              </li>
              <li>
                We (Andrew & Lucas) can do all the parts, but we’d like to move
                faster and build a team to turn this into a company.{' '}
              </li>
              <li>
                Tasks to be accomplished (We have these broken down into
                claimable tasks on Linear, reach out if you’d like access)
                <ul className="pl-10">
                  <li>
                    Build a POC “decentralized antenna” that can read raw data
                    from satellites.
                  </li>
                  <li>
                    “Proof ” program that anyone can run to validate collected
                    data and submit to oracle. Endcoin/Gaiacoin delivered to
                    these proovers.
                  </li>
                  <li>Audit our current program and AMM.</li>
                  <li>
                    Add “hooks” to current program so oracle and emission
                    functionality can be upgraded over time.
                  </li>
                  <li>Start working on Hype – social media, reach, etc.</li>
                </ul>
              </li>
              <li>
                Main Fields of Work
                <ul className="pl-10">
                  <li>DePin Hardware and firmware</li>
                  <li>Proof Algorithms</li>
                  <li>Climate Data Specialist</li>
                  <li>Climate Data Algorithms</li>
                  <li>Solana Programs</li>
                  <li>AMM</li>
                  <li>Hype</li>
                  <li>Tokenomics</li>
                  <li>Satellite Communications Expert</li>
                </ul>
              </li>
            </ul>
            <h2 className="pb-5 mt-16 text-2xl font-bold tracking-tight text-gray-900">
              High Level Overview
            </h2>
            <ul className="list-disc list-outside [&_ul]:list-[revert]">
              <li>
                Data is collected from sensors around the world
                <ul className="pl-10">
                  <li>
                    Anyone can compute SST from data, and prove with hash.
                  </li>
                  <li>
                    People who do this are rewarded with end coin and gaia coin.
                  </li>
                  <li>
                    As temperatures rise more gaia coin created, as temperatures
                    fall more end coin created.
                  </li>
                  <li>
                    These are emitted into an AMM that represents the "pulse on
                    climate".
                  </li>
                  <li>The pulse on climate is SST + Market sentiment.</li>
                </ul>
              </li>
            </ul>
            <h2 className="pb-5 mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Where are we now?
            </h2>
            <p className="mt-6 text-xl leading-8">
              Andrew recently completed the{' '}
              <a
                href="https://web3builders.dev/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline', color: 'blue' }}
              >
                web 3 builders alliance
              </a>{' '}
              (WBA) Q4 Cohort, where we deployed an MVP POC to solana devnet.
              This version reads sea surface temperature from a data API, which
              is read by the solana program. This data drives the emission rate
              of end coin and gaia coin. When temperatures rise more gaia coin
              than endcoin are created. When temperatures fall, more endcoin
              than gaiacoin are emitted. When viewed as a pair in an AMM, this
              draws a “heartbeat” the “pulse on climate” – here is this data,
              being pulled live from the AMM on devnet, showing the last 30 days
              of emissions:
            </p>
            <div className="App">
              {programStatus === EReducerState.LOADING && (
                <div className="App-loading-font">Loading...</div>
              )}
              {programStatus === EReducerState.IDLE && (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h1>Endcoin/Gaiacoin</h1>
                  <AreaChart />
                </div>
              )}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
