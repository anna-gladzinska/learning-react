
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Icon from '../Icon/Icon';
import Container from '../Container/Container';
import { settings } from '../../data/dataStore';
import Search from '../Search/SearchContainer';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link className={styles.logo} to='/'>
              <Icon name={settings.header.icon} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
            </nav>
          </div>
        </Container>
        <Search />
      </header>
    );
  }
}

export default Header;
