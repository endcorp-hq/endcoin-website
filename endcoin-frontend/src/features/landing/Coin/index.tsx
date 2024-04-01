import React from 'react';
import coin from '../../../images/coin.svg';
import { scrollToDiv } from '../../../constants/scrollFunction';

type Props = {};

const Coin = (props: Props) => {
  return (
    <div
      id="coin"
      className="flex w-full font-endcoin flex-col endcoin-md:flex-row justify-center items-center endcoin-md:justify-between min-h-screen bg"
    >
      <div className="w-full max-w-[540px]">
        <img src={coin} alt="Coin Image" />
      </div>
      <div className="flex flex-col justify-between gap-y-8 w-full">
        <div className="text-end-hover-gold text-[20px] endcoin-lg:text-[24px] endcoin-xl:text-[36px]">
          <p>THE EARTH IS CHANGING</p>
          <p>IT’S TIME OUR ACTIONS DID TOO</p>
        </div>
        <button
          onClick={() => scrollToDiv('mission')}
          className="bg-end-button-green rounded-md p-3 endcoin-md:p-4 text-xs endcoin-lg:text-[16px] text-white max-w-fit"
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default Coin;
