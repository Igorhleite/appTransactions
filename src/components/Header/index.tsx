import React, { useContext } from 'react';

import { Link } from 'react-router-dom'

import { Container, Theme } from './styles';

import Logo from '../../assets/logo.svg';
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

interface HeaderProps {
  toggleTheme(): void;   
  }


const Header: React.FC<HeaderProps> = ({toggleTheme}) => {
  const { colors, title } = useContext(ThemeContext)

  

  return (
  
  <Container>
    <header>
      <img  src={colors.logo} alt="GoFinances" />
      <nav>
        <Theme>
        <Switch onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          offColor={colors.secundary}
          onColor={colors.secundary}
        
        /></Theme>
        <Link to="/"> Transactions </Link>
        <Link to="/import"> Import </Link>


        
      </nav>
    </header>
  </Container>
);
  }
export default Header;
