import React from 'react';
import { string, bool } from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'gatsby';

const DefaultLink = styled(Link)`
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  text-decoration: none;
  &:hover,
  &:active {
    color: ${(props) =>
      props.color
        ? darken(0.1, props.theme.colors[props.color])
        : darken(0.1, props.theme.colors.primary)};
    text-decoration: underline;
  }
  &:focus {
    outline-color: ${(props) =>
      props.color
        ? props.theme.colors[props.color]
        : props.theme.colors.primary};
  }
`;

const ExternalLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  text-decoration: none;
  &:hover,
  &:active {
    color: ${(props) => darken(0.1, props.theme.colors.primary)};
    text-decoration: underline;
  }
  &:focus {
    outline-color: ${(props) => props.theme.colors.primary};
  }
`;

const PageLink = ({ to, color, external, children, ...props }) => {
  return external ? (
    <ExternalLink
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      color={color}
      {...props}
    >
      {children}
    </ExternalLink>
  ) : (
    <DefaultLink to={to} color={color} {...props}>
      {children}
    </DefaultLink>
  );
};

PageLink.propTypes = {
  external: bool,
  color: string,
};

export default PageLink;
