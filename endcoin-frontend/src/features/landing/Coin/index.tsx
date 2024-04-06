import coin from '../../../images/coin.svg';
import { scrollToDiv } from '../../../constants/scrollFunction';
import Layout from '../../../app/Layout/layout';

type Props = {};

const Coin = (props: Props) => {
  return (
    <Layout>
      <div
        id="coin"
        className="flex w-full font-endcoin flex-col endcoin-md:flex-row-reverse justify-center items-center endcoin-md:justify-between min-h-screen"
      >
        <div className="w-full flex justify-center">
          <img src={coin} alt="Coin Image" />
        </div>
        <div className="flex flex-col justify-between gap-y-8 w-full">
          <p className="text-white text-[40px] endcoin-lg:text-[48px] endcoin-xl:text-[64px] leading-none">
            The Earth is changing, It's time our actions did too
          </p>

          <p className="text-white text-[14px] endcoin-md:text-[18px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
            accusantium neque aliquid!
          </p>
          <button
            onClick={() => scrollToDiv('mission')}
            className="bg-end-button-blue rounded p-3 endcoin-md:p-4 text-xs endcoin-lg:text-[16px] max-w-fit text-[#03294D] mt-3 font-bold"
          >
            Learn More
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Coin;
