import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="search">Search</div>
      <div className="darkmode">Dark Mode</div>
      <div className="language-switch">Language Switch</div>
    </header>
  );
};

export default Header;
