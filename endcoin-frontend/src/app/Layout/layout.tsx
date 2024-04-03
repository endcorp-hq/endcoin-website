import React from 'react';
import PageContainer from './PageContainer';
import '../../../src/App.css';
import Navbar from '../../features/navbar';

type Props = {
  children: React.ReactNode;
  blackBackground?: boolean;
};

const Layout = ({ children, blackBackground = false }: Props) => {
  return (
    <div
      className={`w-full h-full mt-[70px] font-endcoin endcoin-xl:mt-[120px] px-4 endcoin-md:px-0 flex flex-col items-center justify-center ${
        blackBackground ? 'bg' : ''
      }`}
    >
      <Navbar />
      <PageContainer>{children}</PageContainer>
    </div>
  );
};

export default Layout;
