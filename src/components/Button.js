import React from 'react';
import { bool, oneOf } from 'prop-types';
import styled from 'styled-components';
import Link from 'Components/Link';
import { lighten } from 'polished';

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
    background: ${(props) => lighten(0.25, props.theme.colors.primary)};
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
