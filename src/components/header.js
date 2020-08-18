import React from 'react';
import { Header, Nav, Anchor } from 'grommet';
import LogoImg from '../images/AFCHeroMAST.jpg';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 200px;
`;

const PageHeader = () => {
  return (
    <Header pad="medium">
      <StyledImage src={LogoImg} alt="Ahlberg for Council Logo" />
      <Nav>
        <Anchor href="/about/" label="About" />
      </Nav>
    </Header>
  );
};

export default PageHeader;
