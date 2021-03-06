import React from 'react';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import Link from 'gatsby-link';
import Icon from './Icon';
import t from '../styles/theme';

const Nav = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 3.25rem;
  display: flex;
  background-color: ${t.colors.grey[0]};
  box-shadow: 0 -6px 0 rgba(0, 0, 0, 0.15);
  z-index: 999;
  @media screen and (min-width: 40em) {
    position: initial;
    margin-left: 2rem;
    height: auto;
    border: none;
    box-shadow: none;
    color: ${t.colors.textLight};
    background-color: transparent;
  }
`;

const List = styled.ul`
  ${space};
  display: flex;
  flex: 1;
`;

const Li = styled.li`
  ${space};
  flex: 1;
`;

const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: ${t.fontSizes[0]};
  text-transform: capitalize;
  text-decoration: none;
  transition: background-color 0.2s;
  border-bottom: 2px solid transparent;
  @media (min-width: 40em) {
    &[data-current='true'] {
      border-bottom-color: ${t.colors.bg};
    }
    &:hover {
      color: inherit;
      border-bottom-color: ${t.colors.bg};
    }
  }
  @media (max-width: 40em) and (hover: hover) {
    &:hover {
      color: inherit;
      &[data-current='true'] {
        background-color: ${t.colors.primary};
      }
    }
  }
  @media (max-width: 40em) {
    border-bottom: none;
    &[data-current='true'] {
      background-color: ${t.colors.grey[1]};
    }
  }
`;

const NavIcon = styled(Icon).attrs({
  size: 1,
})`
  @media (min-width: 40em) {
    display: none;
  }
`;

const navLinks = current => {
  const pages = [
    {
      path: '/',
      icon: 'home',
    },
    {
      path: '/about',
      icon: 'about',
    },
    {
      path: '/work',
      icon: 'work',
    },
    {
      path: '/contact',
      icon: 'contact',
    },
  ];
  return pages.map((page, i) => (
    <Li key={i} mr={[0, 2, 3]}>
      <NavLink to={page.path} data-current={page.path === current}>
        <NavIcon name={page.icon} />
        <span>{page.icon}</span>
      </NavLink>
    </Li>
  ));
};

export default ({ current }) => (
  <Nav>
    <List>{navLinks(current)}</List>
  </Nav>
);
