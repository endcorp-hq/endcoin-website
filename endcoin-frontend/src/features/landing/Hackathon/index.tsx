import './hack.css';
import Layout from '../../../app/Layout/layout';
import HackTile from './components/HackTile';
import FieldsTile from './components/FieldsTile';
import { transition } from '../../../constants/transition';
type Props = {};

const Hackathon = (props: Props) => {
  const taskItems = [
    {
      id: '00',
      title: 'Tasks to be accomplished',
    },
    {
      id: '01',
      title: 'POC',
      subtitle:
        '“decentralized antenna” that can read raw data from satellites.',
      progress:
        '“decentralized antenna” that can read raw data from satellites.',
    },
    {
      id: '02',
      title: 'Proof',
      subtitle:
        'We will build a “proof” program that anyone can run to validate collected data and submit to oracle. Endcoin/Gaiacoin delivered to proovers.',
      progress:
        '“decentralized antenna” that can read raw data from satellites.',
    },
    {
      id: '03',
      title: 'Audit',
      subtitle: 'We will perform an audit on our current program and AMM.',
      progress:
        '“decentralized antenna” that can read raw data from satellites.',
    },
    {
      id: '04',
      title: 'Hooks',
      subtitle:
        'Add “hooks” to current program so oracle and emission functionality can be upgraded over time.',
      progress:
        '“decentralized antenna” that can read raw data from satellites.',
    },
    {
      id: '05',
      title: 'Hype',
      subtitle:
        'We will finally start working on Hype - social media, reach, etc.',
      progress:
        '“decentralized antenna” that can read raw data from satellites.',
    },
  ];

  const fieldItems = [
    'DePin Hardware and firmware',
    'Proof Algorithms',
    'Climate Data Specialist',
    'Climate Data Algorithms',
    'Solana Programs',
    'AMM',
    'Hype',
    'Tokenomics',
    'Satellite Communications Expert',
  ];

  return (
    <Layout>
      <div
        id="hackathon"
        className="flex w-full h-full font-endcoin flex-col items-center py-16 endcoin-md:mt-0 gap-y-16 endcoin-md:gap-y-[270px]"
      >
        <div className="text-white w-full flex flex-col items-center gap-y-6">
          <p className="text-[30px] endcoin-md:text-[40px] endcoin-xl:text-[48px] text-center">
            COLOSSEUM HACKATHON
          </p>
          <p className="text-[14px] endcoin-lg:text-[18px] text-center w-full endcoin-md:max-w-[50vw]">
            We are entering the Colosseum Renaissance hackathon to compete for
            top prize in DePin, DeFi and Climate. We (Andrew & Lucas) can do all
            the parts, but we’d like to move faster and build a team to turn
            this into a company.
          </p>
          <button
            onClick={() =>
              window.open('https://www.colosseum.org/renaissance', '_blank')
            }
            className={`rounded border border-end-button-blue text-end-button-blue text-end-button-green text-[14px] kimo-md:text-[16px] py-2 px-[14.5px] bg-none hover:bg-end-button-blue hover:text-black ${transition}`}
          >
            Visit Colosseum Hackathon
          </button>
        </div>
        <div className="flex flex-col w-full text-center gap-y-10 endcoin-md:gap-y-20">
          <p className="text-white text-[24px] py-2 md:hidden">
            Tasks to be accomplished
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full endcoin-md:flex-row flex-wrap gap-x-12 gap-y-12">
            {taskItems.map((item, id) => (
              <HackTile key={id} item={item} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-y-10 endcoin-md:gap-y-20 items-center w-full">
          <p className="text-white text-[24px] endcoin-md:text-[36px]">
            Main fields of Work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full endcoin-md:flex-row flex-wrap gap-x-[30px] gap-y-[30px]">
            {fieldItems.map((item, id) => (
              <FieldsTile key={id} title={item} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Hackathon;
