import './contact.css';
import twitter from '../../../images/Icon-x.svg';
import discord from '../../../images/Icon-discord.svg';
import mail from '../../../images/Icon-mail.svg';

type Props = {};

const Coin = (props: Props) => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center font-endcoin text-end-hover-gold w-full bg pb-5 endcoin-md:pb-8 gap-y-2 endcoin-md:gap-y-10"
    >
      <p className="text-[24px] endcoin-xl:text-[36px] w-full text-center">
        REACH OUT!
      </p>
      <div className="flex flex-row  items-center justify-between gap-x-6 ">
        <div className="border border-end-fade-gold rounded-md flex items-center justify-center p-5 shadow flex-col cursor-pointer">
          <a
            className="relative items-center justify-center cursor-pointer flex flex-row flex-grow"
            href="https://twitter.com/pulseonclimate"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="Twitter Icon" className="h-[65%] w-[65%]" />
          </a>
          <p className="text-end-hover-gold text-[14px]">Twitter</p>
        </div>
        <div className="border border-end-fade-gold rounded-md flex items-center justify-center p-5 shadow flex-col cursor-pointer">
          <a
            className="relative items-center justify-center cursor-pointer flex flex-row flex-grow"
            href="https://discord.gg/JGDUNb3Z"
            target="_blank"
            rel="noreferrer"
          >
            <img src={discord} alt="Discord Icon" className="h-[65%] w-[65%]" />
          </a>
          <p className="text-end-hover-gold text-[14px]">Discord</p>
        </div>

        <div className="border border-end-fade-gold rounded-md flex items-center justify-center p-5 shadow flex-col cursor-pointer">
          <a
            className="relative items-center justify-center flex flex-row flex-grow"
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mail} alt="Instagram Icon" className="h-[65%] w-[65%]" />
          </a>
          <p className="text-end-hover-gold text-[14px]">Email</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
