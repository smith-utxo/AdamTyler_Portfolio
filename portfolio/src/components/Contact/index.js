import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  }

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a valid email.");
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is a required field.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit} >
        {/* Due to keywords reserved in JavaScript, we need to replace the for attribute in the label element to htmlFor.

onBlur Event is triggered when an object loses focus. Used most often with form validation code (e.g. when the user leave a form field something happens; an error message, change to all lowercase, etc. */}
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="6" defaultValue={message} onBlur={handleChange} />
        </div>
        {/* if error message has a truth value, the div block will render. the && operator is being used here as short circuit meaning if the first value resolves to true, the second expression is evaluated. */}
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  )
}
export default ContactForm; 