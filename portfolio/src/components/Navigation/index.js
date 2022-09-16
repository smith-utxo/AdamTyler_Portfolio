import React from 'react';

function Nav(props) {

  const {
    contactPageSelected,
    setContactPageSelected,
  } = props;

  return (
    <header className ="flex-row paddingSpace-1">
      <h2>My Awesome Portfolio!</h2>
      <nav>
        <ul className="flex-row">
          <li className="marginSpace-2">
            <a href="about">
              AboutMe
            </a>
          </li>
          <li className="marginSpace-2"><span> Portfolio </span></li>
          <li className={`marginSpace-2 ${contactPageSelected && 'navActive'}`}>
            <span onClick={() => setContactPageSelected(true)}> Contact </span></li>
          <li className="marginSpace-2"><span> Resume </span></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;




