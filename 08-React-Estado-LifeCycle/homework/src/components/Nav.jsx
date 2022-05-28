import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import styles from './Nav.module.css';

function Nav({onSearch}) {
  return (
    <div className={styles.navMain}>
      <div className={styles.navText}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={styles.navSearch}>
        <SearchBar onSearch={(ciudad) => onSearch(ciudad)}/>
      </div>
    </div>
  );
};

export default Nav;
