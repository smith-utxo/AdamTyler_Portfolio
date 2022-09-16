import React from 'react';

function Nav() {

  return (
    <header className ="flex-row paddingSpace-1">
      <h2>My Awesome Portfolio!</h2>
      <nav>
        <ul className="flex-row">
          <li className="marginSpace-2">
            <a href="about">
              About Me
            </a>
          </li>
          <li><span> Portfolio </span></li>
          <li><span> Contact </span></li>
          <li><span> Resume </span></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;




