import React from 'react';

function Nav(props) {

  const { tabs = [], setCurrentTab, currentTab } = props;

  // Reference: 2U Boot Camp Tutor Meg Meyers
  return (
    <nav>
      <ul>
        {tabs.map((Tabs) => (
          <li className={`${currentTab.name === Tabs.name && "highlight"}`} key={Tabs.name}>
            <span onClick={() => setCurrentTab(Tabs)}>{Tabs.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;




