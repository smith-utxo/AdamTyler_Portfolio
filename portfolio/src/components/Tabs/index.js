import React from 'react';
import TabContent from '../TabContent';
import AboutMe from '../AboutMe'; 
import Portfolio from '../Portfolio';
import ContactForm from '../Contact';
import Resume from '../Resume';


function Tabs({ currentTab }) {
  const tabRender = () => {
    switch (currentTab.name) {
        case "AboutMe":
            return <AboutMe/>;
        case "Portfolio":
            return <Portfolio/>;
        case "Contact":
            return <ContactForm/>;
        case "Resume":
            return <Resume/>;
        default: 
            return <AboutMe/>;
    }
}

  return (
    <div>
      <TabContent>{tabRender()}</TabContent>
    </div>
  )
}

export default Tabs; 