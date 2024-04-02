import React from 'react';
import goal from '../../../images/goal.png';
import './hack.css';

type Props = {};

const Hackathon = (props: Props) => {
  return (
    <div
      id="hackathon"
      className="flex w-full font-endcoin flex-col items-center pt-[72px] endcoin-xl:pt-[130px] endcoin-md:mt-0 gap-y-4 endcoin-md:gap-y-10"
    >
      <div className="text-end-hover-gold text-[20px] w-full flex endcoin-lg:text-[24px] endcoin-xl:text-[36px] mt-[20px] endcoin-xl:pb-5">
        <p>COLLESEUM HACKATHON</p>
      </div>
      <div className="min-w-[40vw] flex w-full ">
        <div className="w-full max-w-[540px] bg-shadow my-4 endcoin-md:m-0">
          <img src={goal} alt="goal Image" />
        </div>
      </div>

      <div className="flex flex-col justify-between w-full">
        <ul className="text-white list-disc [&_ul]:list-[revert] px-4">
          <li className="pb-3">
            We are entering the Colosseum Renaissance hackathon to compete for
            top prize in DePin, DeFi and Climate.{' '}
            <a
              href="https://www.colosseum.org/renaissance"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-end-hover-gold hover:underline"
            >
              https://www.colosseum.org/renaissance
            </a>
          </li>
          <li className="pb-3">
            We (Andrew & Lucas) can do all the parts, but we’d like to move
            faster and build a team to turn this into a company.{' '}
          </li>
          <li className="pb-3">
            Tasks to be accomplished (We have these broken down into claimable
            tasks on Linear, reach out if you’d like access)
            <ul className="pl-10">
              <li>
                Build a POC “decentralized antenna” that can read raw data from
                satellites.
              </li>
              <li>
                “Proof ” program that anyone can run to validate collected data
                and submit to oracle. Endcoin/Gaiacoin delivered to these
                proovers.
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
      </div>
    </div>
  );
};

export default Hackathon;
