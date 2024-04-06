import React from 'react';

type Props = {
  children: React.ReactNode;
};

const PageContainer = ({ children }: Props) => {
  return (
    <div className="w-full max-w-[1100px] flex flex-col items-center justify-center bg-transparent">
      {children}
    </div>
  );
};

export default PageContainer;
