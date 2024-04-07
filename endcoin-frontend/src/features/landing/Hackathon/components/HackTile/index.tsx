import React, { useState } from 'react';
import './hack.css';

const MentorTile = ({
  item,
  noFlip = false,
}: {
  item: any;
  noFlip?: boolean;
}): JSX.Element => {
  const [tileFlip, setTileFlip] = useState<boolean>(false);

  return (
    <div
      onClick={() => {
        if (item.id === '00' || noFlip) return;
        setTileFlip(!tileFlip);
      }}
      className={`card cursor-pointer font-endcoin ${
        tileFlip ? 'cardFlip' : ''
      } flex flex-col justify-between min-h-[230px] w-full h-full text-left rounded ${
        item.id === '00' ? 'hidden md:block' : 'bg-[#1C1C1C] shadow-card'
      }`}
    >
      <div
        className={`w-full h-full max-h-fit px-[30px] flex flex-col justify-start rounded cardFront text-white ${
          item.id === '00' ? 'px-0 font-endcoin-bold justify-center' : ''
        }`}
      >
        <div className="flex items-start gap-x-2">
          <span className="text-[64px] text-[#7D95E2] font-bold">
            {item.id === '00' ? '' : item.id}
          </span>
          <span className={`text-[24px] endcoin-md:text-[36px] self-center `}>
            {item.title}
          </span>
        </div>
        <p className="text-[14px] endcoin-md:text-[17px]">{item.subtitle}</p>
      </div>

      <div
        className={
          'w-full h-full p-6 flex flex-col justify-between rounded cardBack text-white'
        }
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, saepe
        possimus maxime autem magnam, ex incidunt animi voluptate aperiam,
        veritatis nemo odio. Corrupti, pariatur quos.
      </div>
    </div>
  );
};

export default MentorTile;
