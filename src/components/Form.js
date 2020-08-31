import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ErrorBox from 'Components/ErrorBox';
import { navigate } from 'gatsby';

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

const TextArea = styled.textarea`
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 0px;
  font-size: ${(props) => props.theme.fontSize.sm};
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

const Form = ({ name, onSubmit, error, redirect, children, ...props }) => {
  return (
    <StyledForm
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name={name}
      onSubmit={onSubmit}
      {...props}
    >
      {redirect.fireRedirect &&
        navigate('/success', { state: { message: redirect.message } })}

      {error.isError && <ErrorBox>{error.message}</ErrorBox>}

      {children}
    </StyledForm>
  );
};

Form.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
  redirect: PropTypes.object.isRequired,
};

export { Form, Control, Label, Input, TextArea, encode };
