import React, { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Nav from '../src/components/Navigation';
import ContactForm from './components/Contact';
import Footer from '../src/components/Footer';




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
      <Footer></Footer>
    </div>
  );
}

export default App;
