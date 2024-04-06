import './contact.css';
import twitter from '../../../images/Icon.X.svg';
import discord from '../../../images/Icon.discord.svg';
import Layout from '../../../app/Layout/layout';
import mail from '../../../images/Icon-mail.svg';

type Props = {};

const Coin = (props: Props) => {
  return (
    <Layout>
      <div
        id="contact"
        className="flex flex-col justify-center items-start font-endcoin w-full gap-y-2 endcoin-md:gap-y-4 text-white py-[50px] endcoin-md:py-[100px]"
      >
        <p className="text-[30px] endcoin-md:text-[40px] endcoin-xl:text-[48px]">
          Get in touch
        </p>
        <div className="text-[12px] endcoin-md:text-[14px] endcoin-xl:text-[18px]">
          <p>We’d love to hear from you, please leave us a message</p>
          <p>or contact us via socials directly!</p>
        </div>

        <div className="flex gap-x-5 justify-center items-center">
          <a
            href="https://discord.gg/HMG4Wt9U"
            target="_blank"
            rel="noreferrer"
          >
            <img src={discord} alt="discord" className="cursor-pointer" />
          </a>
          <a
            href="https://twitter.com/pulseonclimate"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="twitter" className="cursor-pointer" />
          </a>
          <a
            href="mailto:hello@endco.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mail} alt="mail" className="cursor-pointer" />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Coin;
