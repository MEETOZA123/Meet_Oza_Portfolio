import React from 'react';
import { SocialLinks } from '../../constants/constants';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:810-358-5553">810-358-5553</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:meetozaofficial@gmail.com">
            meetozaofficial@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating with AI and scalable architectures</Slogan>
        </CompanyContainer>
        <SocialContainer>
          {SocialLinks.map((link) => (
            <SocialIcons key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
              <link.icon size="3rem" />
            </SocialIcons>
          ))}
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
