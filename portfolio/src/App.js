import React, { useState } from 'react';
import './App.css';
import Tabs from '../src/components/Tabs';
import Nav from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';


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
