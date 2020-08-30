import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledForm = styled.form`
  background: ${(props) => props.theme.colors.ltGrey};
  padding: ${(props) => props.theme.rhythm()} 20px;
`;

const Control = styled.div`
  margin-bottom: ${(props) => props.theme.rhythm(2)};
`;

const Label = styled.label`
  display: block;
  font-size: ${(props) => props.theme.fontSize.sm};
  margin-right: 20px;
`;

const Input = styled.input`
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 0px;
  font-size: ${(props) => props.theme.fontSize.sm};
  height: ${(props) => props.theme.rhythm(5)};
  padding: 5px;
  width: 100%;
  &:focus {
    border-radius: 0px;
    outline-color: ${(props) => props.theme.colors.secondary};
  }
`;

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const Form = ({ name, children, ...props }) => {
  return (
    <StyledForm
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name={name}
      {...props}
    >
      {children}
    </StyledForm>
  );
};

Form.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export { Form, Control, Label, Input, encode };
