import React from 'react';
import PageContainer from './PageContainer';
import Navbar from '../../features/navbar';

type Props = {
  children: React.ReactNode;
  brownBackground?: boolean;
};

const Layout = ({ children, brownBackground = false }: Props) => {
  return (
    <div
      className={`w-full h-full mt-[75px] font-endcoin px-4 endcoin-xl:px-0 flex flex-col items-center justify-center ${
        brownBackground ? 'bg-[#1C1C1C]' : 'bg-[#09090E]'
      }`}
    >
      <Navbar />
      <PageContainer>{children}</PageContainer>
    </div>
  );
};

export default Layout;
