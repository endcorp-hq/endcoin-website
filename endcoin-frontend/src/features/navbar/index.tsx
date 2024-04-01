import React, { useState } from 'react';
import { useWindowSize } from '../../hooks/use-window-size';
import './navbar.css';
import NavbarDesktop from './NavbarDesktop';
import NavbarResponsive from './NavbarResponsive';

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const windowSize = useWindowSize()[0];

  return windowSize > 1024 ? (
    <NavbarDesktop />
  ) : (
    <>
      <NavbarResponsive isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <div className="wall" />}
    </>
  );
};

export default Navbar;
