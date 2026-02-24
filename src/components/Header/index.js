import React from 'react'; 

function Header(props) {
  return (
    <div >
      <h2 className="PortfolioTitle">
        < a href="/">Adam T. Smith</a>
      </h2>
      {props.children}
    </div>
  )
}
export default Header; 