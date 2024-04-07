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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
          ratione ipsa! Iure temporibus mollitia nostrum quos architecto vero
          corrupti adipisci odio ea sapient
          <span className="text-end-button-text-blue">
            e! Dicta quia voluptates eaque. Vero quidem explicabo odit sunt
            iusto, soluta commodi molestias eius libero illo ut corporis quia id
            ex omnis.
          </span>
        </p>
      </div>
    </Layout>
  );
};

export default About;
