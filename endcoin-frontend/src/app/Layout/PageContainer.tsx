import React from 'react';

type Props = {
  children: React.ReactNode;
};

const PageContainer = ({ children }: Props) => {
  return (
    <div className="w-full max-w-[1300px] endcoin-md:px-[20px] flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default PageContainer;
