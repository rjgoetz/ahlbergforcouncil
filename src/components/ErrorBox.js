import React from 'react';
import Type from 'Components/Type';

const ErrorBox = ({ children }) => {
  return (
    <div
      css={`
        background: ${(props) => props.theme.colors.ltRed};
        margin-bottom: ${(props) => props.theme.rhythm(2)};
        padding: ${(props) => props.theme.rhythm(1)} 10px;
      `}
    >
      <Type
        css={`
          color: ${(props) => props.theme.colors.red};
          margin-bottom: 0;
        `}
      >
        {children}
      </Type>
    </div>
  );
};

export default ErrorBox;
