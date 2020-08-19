import React from 'react';
import { bool, string, oneOf } from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';
import Link from 'Components/Link';

const DefaultButton = styled.div`
  background: ${(props) => props.theme.colors[props.background]};
  border: ${(props) =>
    props.background === 'white'
      ? `2px solid ${props.theme.colors.primary}`
      : 'none'};
  color: ${(props) =>
    props.background === 'white'
      ? props.theme.colors.primary
      : props.theme.colors.white};
  cursor: pointer;
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  line-height: ${(props) => props.theme.rhythm(3)};
  padding: 10px;
  text-align: center;
  &:active,
  &:hover {
    background: ${(props) =>
      props.background === 'primary' &&
      darken(0.1, props.theme.colors[props.background])};
    text-decoration: ${(props) =>
      props.background === 'primary' ? 'none' : 'underline'};
  }
`;

const BlockButton = styled(DefaultButton)`
  display: block;
  width: 100%;
`;

const Button = ({ isLink, block, children, ...props }) => {
  const el = isLink ? Link : 'button';

  return block ? (
    <BlockButton as={el} {...props}>
      {children}
    </BlockButton>
  ) : (
    <DefaultButton as={el} {...props}>
      {children}
    </DefaultButton>
  );
};

Button.defaultProps = {
  background: 'primary',
};

Button.propTypes = {
  isLink: bool,
  background: oneOf(['primary', 'white']),
  block: bool,
};

export default Button;
