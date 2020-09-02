import React, { useState } from 'react';
import { Form, Input, Control, Label, TextArea, encode } from 'Components/Form';
import Type from 'Components/Type';
import Button from 'Components/Button';
import Loader from 'Components/Loader';

const SuggestionForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [suggestions, setSuggestions] = useState('');
  const [emailList, setEmailList] = useState('no');
  const [error, setError] = useState({ isError: false, message: '' });
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState({
    fireRedirect: false,
    message: '',
  });

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'suggestions':
        setSuggestions(value);
        break;
      case 'emailList':
        setEmailList(emailList === 'no' ? 'yes' : 'no');
        break;
      default:
        console.log(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    if (!name || !email || !suggestions) {
      setError({ isError: true, message: 'Please complete all fields.' });
      setLoading(false);
    } else {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'suggestion-form',
          name,
          email,
          suggestions,
          emailList,
        }),
      })
        .then(() => {
          setLoading(false);
          setRedirect({
            fireRedirect: true,
            message:
              'We appreciate your contribution and willingness to share.',
          });
        })
        .catch((err) => {
          setLoading(false);
          setError({ isError: true, message: err });
        });
    }
  }

  return (
    <Form
      name="suggestion-form"
      error={error}
      redirect={redirect}
      onSubmit={handleSubmit}
    >
      <Type el="h3">Share your voice.</Type>
      <Control>
        <Label htmlFor="name">Full Name</Label>

        <Input type="text" id="name" name="name" onChange={handleChange} />
      </Control>

      <Control>
        <Label htmlFor="email">Email Address</Label>

        <Input type="email" id="email" name="email" onChange={handleChange} />
      </Control>

      <Control>
        <Label htmlFor="suggestions">Your Ideas</Label>
        <TextArea
          name="suggestions"
          id="suggestions"
          cols="30"
          rows="10"
          onChange={handleChange}
        ></TextArea>
      </Control>

      <Control
        css={`
          margin-bottom: ${(props) => props.theme.rhythm()};
        `}
      >
        <input
          type="checkbox"
          id="emailList"
          name="emailList"
          value="yes"
          onChange={handleChange}
          css={`
            vertical-align: middle;
          `}
        />
        <Label checkbox htmlFor="emailList">
          Add me to your email list.
        </Label>
      </Control>

      <Button block>{loading ? <Loader width={24}></Loader> : 'Send'}</Button>
    </Form>
  );
};

export default SuggestionForm;
