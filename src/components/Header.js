import React from 'react';
import Time from './Time';
import DateComponent from './Date';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="Header">
      <div className="Header__logo">
        <Logo />
      </div>
      <div className="Header__datetime">
        <Time />
        <DateComponent />
      </div>
    </header>
  );
};

export default Header;