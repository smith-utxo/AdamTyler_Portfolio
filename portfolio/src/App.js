import React, { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Nav from '../src/components/Navigation';
import ContactForm from './components/Contact';


function App() {

  const [contactPageSelected, setContactPageSelected] = useState(false);

   return (
    <div>
      <Nav
        contactPageSelected={contactPageSelected}
        setContactPageSelected={setContactPageSelected}
      ></Nav>
      <main>
        {!contactPageSelected ? (
        <AboutMe></AboutMe> 
      
        ) : (
        <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
