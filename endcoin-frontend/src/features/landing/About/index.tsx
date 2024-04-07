import Layout from '../../../app/Layout/layout';
type Props = {};

const About = (props: Props) => {
  return (
    <Layout brownBackground={true}>
      <div
        id="mission"
        className={`flex w-full font-endcoin flex-col justify-center items-center h-full gap-y-[25px] py-[50px] endcoin-md:py-[200px]`}
      >
        <p className="text-white w-full text-left text-[30px] font-endcoin-bold endcoin-md:text-[40px] endcoin-xl:text-[48px]">
          Our Mission
        </p>
        <p className="text-white w-full text-left text-[14px] endcoin-md:text-[16px] endcoin-lg:text-[20px] endcoin-xl:text-[24px]">
          Endcoin starts by building A DePin Satellite receiver network to
          produce a reading of sea surface temperatures. This acts as a price
          feed to drive existing DeFi systems towards positive climate impact:
          <span className="text-end-button-text-blue">
            {' '}
            A standard rate for the global economy that is owned by the Earth.
          </span>
        </p>
      </div>
    </Layout>
  );
};

export default About;
