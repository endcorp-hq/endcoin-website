import React from 'react';
import coin from '../../../images/coin.svg';
import '../../../';

type Props = {};

const Coin = (props: Props) => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-between font-endcoin text-end-hover-gold w-full border border-red-500 bg h-screen"
    >
      <p className="text-[24px] endcoin-xl:text-[36px] mt-[72px] endcoin-xl:mt-[120px] w-full border border-red-500 text-center">
        REACH OUT!
      </p>
      <div className="flex flex-row flex-grow items-center justify-between w-full">
        <div className="border border-red-500">Discord</div>
        <div className="border border-red-500">Twitter</div>
        <div className="border border-red-500">Instagram</div>
      </div>
      <p className="align-end w-full border border-red-500">Email - </p>
    </div>
  );
};

export default Coin;
