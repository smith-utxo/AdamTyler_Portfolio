import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../../utils/helpers';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

function ContactForm() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage('All fields are required.');
      return;
    }

    if (errorMessage) return;

    setIsSending(true);
    setSuccessMessage('');

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: name,
        name: name,
        from_email: email,
        message: message,
        time: new Date().toLocaleString(),
      }, PUBLIC_KEY);

      setSuccessMessage('Message sent successfully!');
      setFormState({ name: '', email: '', message: '' });
    } catch (error) {
      setErrorMessage('Failed to send message. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

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
    }
  };

  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit} >
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

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}

        {successMessage && (
          <div>
            <p className="success-text">{successMessage}</p>
          </div>
        )}

        <button data-testid="button" type="submit" disabled={isSending}>
          {isSending ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </section>
  );
}
export default ContactForm; 