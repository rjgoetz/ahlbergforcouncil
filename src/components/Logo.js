import React from 'react';
import Image from 'Components/Image';

const Logo = ({ ...props }) => {
  return (
    <Image
      src="afc-logo.jpg"
      srcSet={{ '1x': 'afc-logo.jpg', '2x': 'afc-logo@2x.jpg' }}
      alt="Ahlberg for Council Logo"
      {...props}
    ></Image>
  );
};

export default Logo;
