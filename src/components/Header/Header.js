import Link from 'next/link';
import React from 'react';
import { DiCssdeck } from 'react-icons/di';
import { SocialLinks } from '../../constants/constants';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#experience">
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#achievements">
          <NavLink>Achievements</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      {SocialLinks.map((link) => (
        <SocialIcons key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
          <link.icon size="3rem" />
        </SocialIcons>
      ))}
    </Div3>
  </Container>
);

export default Header;
