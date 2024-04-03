import React, { useState } from 'react';
import world from '../../../images/world.svg';
type Props = {};

const About = (props: Props) => {
  const [showImage, setShowImage] = useState<boolean>(true);
  return (
    <div
      id="mission"
      className={`flex w-full font-endcoin flex-col endcoin-md:flex-row justify-center h-full gap-x-[100px]  gap-y-[50px] ${
        !showImage ? 'items-start h-[80vh]' : 'items-center'
      }`}
    >
      {showImage && (
        <div className="w-full max-w-[594px]">
          <img src={world} alt="World Image" />
        </div>
      )}
      <div className="flex flex-col justify-between gap-y-8 w-full">
        <div
          className={`text-end-hover-gold text-[20px] endcoin-lg:text-[24px] endcoin-xl:text-[36px] ${
            !showImage ? 'h-[80vh]' : ''
          }`}
        >
          {!showImage && (
            <button
              onClick={() => setShowImage(true)}
              className="bg-end-button-green rounded-md p-3 endcoin-md:p-4 text-xs endcoin-lg:text-[16px] text-white max-w-fit mb-10"
            >
              Back
            </button>
          )}
          <p>OUR MISSION</p>
          <p className="text-white text-sm endcoin-xl:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
            dignissimos architecto? Optio molestias ipsam cumque veritatis eos
            sequi, tempore magnam quas explicabo natus repellendus quod deserunt
            assumenda. Iusto mollitia tenetur asperiores illum voluptatibus
            perspiciatis nostrum deleniti! Cum mollitia, sunt adipisci qui odit
            voluptatum eligendi minus?
          </p>
          {!showImage && (
            <p className="text-white text-sm endcoin-xl:text-xl pt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
              ipsam nulla mollitia maiores et libero fuga? Sunt, autem culpa?
              Ullam sit veritatis nemo, eveniet quasi amet mollitia non nam,
              veniam beatae molestias? Distinctio, atque cumque asperiores
              dolores itaque nisi reprehenderit minima laborum nihil nesciunt
              inventore explicabo praesentium eaque, aspernatur eius.
            </p>
          )}
        </div>
        {showImage && (
          <button
            onClick={() => setShowImage(false)}
            className="bg-end-button-green rounded-md p-3 endcoin-md:p-4 text-xs endcoin-lg:text-[16px] text-white max-w-fit"
          >
            READ MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default About;
