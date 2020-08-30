import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const DefaultLink = styled(Link)`
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  text-decoration: none;
  &:hover,
  &:active {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: underline;
  }
  &:focus {
    outline-color: ${(props) => props.theme.colors.secondary};
  }
`;

const ExternalLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  text-decoration: none;
  &:hover,
  &:active {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: underline;
  }
  &:focus {
    outline-color: ${(props) => props.theme.colors.primary};
  }
`;

const PageLink = ({ to, external, children, ...props }) => {
  return external ? (
    <ExternalLink
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </ExternalLink>
  ) : (
    <DefaultLink to={to} {...props}>
      {children}
    </DefaultLink>
  );
};

PageLink.propTypes = {
  external: bool,
};

export default PageLink;
