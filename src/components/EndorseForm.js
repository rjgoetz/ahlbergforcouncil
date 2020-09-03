import React, { useState } from 'react';
import { Form, Control, Label, Input, TextArea, encode } from 'Components/Form';
import Button from 'Components/Button';
import Loader from 'Components/Loader';
import Type from 'Components/Type';

const EndorseForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [endorsement, setEndorsement] = useState('');
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
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'telephone':
        setTelephone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'endorsement':
        setEndorsement(value);
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

    if (!firstName || !lastName || !telephone || !email || !endorsement) {
      setError({ isError: true, message: 'Please complete all fields.' });
      setLoading(false);
      window.scroll(0, 0);
    } else {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'endorse',
          firstName,
          lastName,
          telephone,
          email,
          endorsement,
          emailList,
        }),
      })
        .then(() => {
          setLoading(false);
          setRedirect({
            fireRedirect: true,
            message: '',
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
      name="endorse"
      error={error}
      redirect={redirect}
      onSubmit={handleSubmit}
    >
      <Type el="h3">Your endorsement.</Type>
      <Control>
        <Label htmlFor="firstName">First Name</Label>

        <Input
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleChange}
        />
      </Control>

      <Control>
        <Label htmlFor="lastName">Last Name</Label>

        <Input
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleChange}
        />
      </Control>

      <Control>
        <Label htmlFor="telephone">Telephone Number</Label>

        <Input
          type="tel"
          id="telephone"
          name="telephone"
          onChange={handleChange}
        />
      </Control>

      <Control>
        <Label htmlFor="email">Email Address </Label>

        <Input type="email" id="email" name="email" onChange={handleChange} />
      </Control>

      <Control>
        <Label htmlFor="endorsement">Your Endorsement</Label>
        <TextArea
          name="endorsement"
          id="endorsement"
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

      <Button
        block
        css={`
          margin-bottom: ${(props) => props.theme.rhythm(2)};
        `}
      >
        {loading ? <Loader width={24}></Loader> : 'Send'}
      </Button>

      <Type size="sm">
        By clicking send you agree to allow your endorsement to be published
        online &mdash; and that that opinions and views you're expressing at the
        time are yours and not anyone else's.
      </Type>
    </Form>
  );
};

export default EndorseForm;
