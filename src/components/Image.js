import React from 'react';
import { string, shape, bool } from 'prop-types';

const Image = ({ src, srcSet, alt, responsive, ...props }) => {
  return (
    <img
      src={require(`Images/${src}`)}
      srcSet={`${require(`Images/${srcSet['1x']}`)}, ${require(`Images/${srcSet['2x']}`)} 2x`}
      alt={alt}
      css={`
        width: ${responsive && '100%'};
      `}
      {...props}
    ></img>
  );
};

Image.propTypes = {
  src: string.isRequired,
  srcSet: shape({
    '1x': string.isRequired,
    '2x': string.isRequired,
  }).isRequired,
  alt: string.isRequired,
  responsive: bool,
};

export default Image;
