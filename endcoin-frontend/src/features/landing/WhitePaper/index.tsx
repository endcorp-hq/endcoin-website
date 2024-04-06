import { useEffect, useState } from 'react';
import 'github-markdown-css';
import './whitepaper.css';
import Layout from '../../../app/Layout/layout';

type Props = {};

const WhitePaper = (props: Props) => {
  return (
    <Layout brownBackground={true}>
      <div
        id="whitepaper"
        className="flex flex-col justify-center items-center py-[75px]"
      >
        <div className="text-white flex flex-col gap-y-6 items-center max-w-[830px]">
          <p className="text-[30px] endcoin-md:text-[40px] endcoin-xl:text-[48px] font-bold">
            White Paper
          </p>
          <p className="text-[14px] endcoin-xl:text-[18px] text-center">
            We are entering the Colosseum Renaissance hackathon to compete for
            top prize in DePin, DeFi and Climate. We (Andrew & Lucas) can do all
            the parts, but we’d like to move faster and build a team to turn
            this into a company.
          </p>
          <button
            onClick={() =>
              window.open(
                'https://github.com/alvr-org/ALVR/blob/master/README.md',
                '_blank',
              )
            }
            className="rounded border border-end-button-blue text-end-button-blue text-end-button-green text-[12px] endcoin-md:text-[16px] py-2 px-[14.5px] bg-none hover:bg-end-button-blue hover:text-black"
          >
            Read the White paper
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default WhitePaper;
