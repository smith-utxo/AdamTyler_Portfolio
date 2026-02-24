import React, { useState } from 'react';
import './App.css';
import Tabs from '../src/components/Tabs';
import Nav from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';

// this file is repsonsible for the following: 
/* This file defines the main component of the React application, which manages the state of the tabs and renders the Header,
 Navigation, Tabs, and Footer components. It uses the useState hook to manage the current active tab and passes necessary props to child components 
 for rendering and interaction. */


function App() {

  const [tabs] = useState([
    {
      name: "AboutMe"
    }, 
    {
      name: "Contact"
    }, 
    {
      name: "Portfolio"
    }, 
    {
      name: "Resume"
    }
  ]);

  const [currentTab, setCurrentTab ] = useState(tabs[0]);

   return (
    <div className="content">
      <header>
        <Header>
      <Nav
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></Nav>
      </Header>
      </header>
      <main>
        <Tabs currentTab={currentTab}></Tabs>
        
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
