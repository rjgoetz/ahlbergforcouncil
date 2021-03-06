import React from 'react';
import { oneOf, bool } from 'prop-types';
import styled, { css } from 'styled-components';

const customText = css`
  color: ${(props) => props.theme.colors[props.color]};
  font-size: ${(props) => props.theme.fontSize[props.size]};
  font-style: ${(props) => props.italic && 'italic'};
  font-weight: ${(props) => props.theme.fontWeight[props.weight]};
  text-align: ${(props) => props.align};
  text-decoration: ${(props) => props.underline && 'underline'};
`;

const P = styled.p`
  font-size: ${(props) => props.lead && '1.125rem'};
  line-height: ${(props) => props.lead && props.theme.rhythm()};
  margin: 0 0 ${(props) => props.theme.rhythm(2)};

  ${(props) => props.custom && customText};
`;

const H1 = styled.h1`
  color: ${(props) =>
    props.banner ? props.theme.colors.white : props.theme.colors.black};
  font-size: ${(props) =>
    props.banner ? props.theme.fontSize.xxl : props.theme.fontSize.xl};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  line-height: ${(props) => props.theme.rhythm(8)};
  margin: 0 0
    ${(props) => (props.banner ? props.theme.rhythm(8) : props.theme.rhythm())};

  ${(props) => props.custom && customText};
`;

const H2 = styled.h2`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  line-height: ${(props) => props.theme.rhythm()};
  margin: 0 0 ${(props) => props.theme.rhythm(3)};

  ${(props) => props.custom && customText};
`;

const H3 = styled.h3`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.md};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  line-height: ${(props) => props.theme.rhythm(3)};
  margin: 0 0 ${(props) => props.theme.rhythm(2)};

  ${(props) => props.custom && customText};
`;

const H4 = styled.h4`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.sm};
  font-weight: ${(props) => props.theme.fontWeight.light};
  line-height: ${(props) => props.theme.rhythm(5)};
  margin: 0;
  text-transform: uppercase;

  ${(props) => props.custom && customText};
`;

const List = styled.ul`
  list-style-type: ${(props) => (props.bullets ? 'square' : 'none')};
  margin: 0 20px ${(props) => props.theme.rhythm()};
  padding: ${(props) => (props.bullets ? '0 20px' : '0')};

  ${(props) => props.custom && customText};
`;

const OrderedList = styled.ol`
  margin: 0 20px ${(props) => props.theme.rhythm(2)};
  padding: ${(props) => (props.bullets ? '0 20px' : '0')};

  ${(props) => props.custom && customText};
`;

const Blockquote = styled.blockquote`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${(props) => props.theme.fontSize.lg};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  margin: 0 0 ${(props) => props.theme.rhythm()};
  text-align: center;

  ${(props) => props.custom && customText};
`;

const Type = ({ el, children, ...props }) => {
  let Typography = P;

  switch (el) {
    case 'h1':
      Typography = H1;
      break;
    case 'h2':
      Typography = H2;
      break;
    case 'h3':
      Typography = H3;
      break;
    case 'h4':
      Typography = H4;
      break;
    case 'ul':
      Typography = List;
      break;
    case 'ol':
      Typography = OrderedList;
      break;
    case 'blockquote':
      Typography = Blockquote;
      break;
    default:
      Typography = P;
  }

  return (
    <Typography
      // List custom properties to trigger custom css function
      custom={
        props.size ||
        props.color ||
        props.weight ||
        props.align ||
        props.italic ||
        props.underline
          ? true
          : false
      }
      {...props}
    >
      {children}
    </Typography>
  );
};

Type.defaultProps = {
  el: 'p',
};

Type.propTypes = {
  el: oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'ul', 'ol', 'blockquote']).isRequired,

  /* The following are properties unique to certain elements. */

  /* h1 */
  banner: bool, // jumbo size style

  /* p */
  lead: bool, // intro paragraph for pages

  /* ul */
  bullets: bool, // add bullets to lists

  /* customize any Type element */
  size: oneOf(['xs', 'sm', 'base', 'md', 'lg', 'xl', 'xxl']),

  color: oneOf(['primary', 'black', 'ltGrey', 'white']),

  weight: oneOf(['light', 'normal', 'medium', 'bold', 'bolder']),

  align: oneOf(['left', 'right', 'center']),

  italic: bool,

  underline: bool,
};

export default Type;
