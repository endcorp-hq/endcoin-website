import Layout from '../../../app/Layout/layout';
import { transition } from '../../../constants/transition';
type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Layout brownBackground={true}>
      <div
        id="data"
        className={`flex w-full font-endcoin flex-col justify-center items-center h-full gap-y-[25px] py-[50px] endcoin-md:py-[200px]`}
      >
        <p className="text-white w-full text-left text-[30px] font-endcoin-bold endcoin-md:text-[40px] endcoin-xl:text-[48px]">
          Data Dashboard
        </p>
        <p className="text-white w-full text-left text-[14px] endcoin-md:text-[16px] endcoin-lg:text-[20px] endcoin-xl:text-[24px]">
        Uncover how a decentralized network leverages satellite data to monitor sea surface temperatures around the world. These nodes capture vital climate information, empowering innovative solutions for environmental challenges. Explore the full potential of this approach by viewing our realtime dashboard!
         
        </p>
        <button
            onClick={() =>
              window.open(
                'https://dashboard.endco.in',
                '_blank',
              )
            }
            className={`rounded border border-end-button-blue text-end-button-blue text-end-button-green text-[12px] endcoin-md:text-[16px] py-2 px-[14.5px] bg-none hover:bg-end-button-blue hover:text-black ${transition}`}
          >
            Visit Dashboard
          </button>
      </div>
    </Layout>
  );
};

export default Dashboard;
