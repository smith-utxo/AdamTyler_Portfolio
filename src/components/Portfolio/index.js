import React from 'react';


const Portfolio = () => {

  return (
    <section className="flexPortfolio">
      <div>
        <p>Suds on Sale || <span><a href="https://github.com/lundbmp/group-project-2">REPO </a></span></p>
        < a href="https://group-project-dos.herokuapp.com/"><img src={require(`../../assets/CoverGallery/01_SudsOnSale.PNG`)} alt={`Suds on Sale`}/></a>
      </div>
      <div>
        <p>Weather Dashboard || <span><a href="https://github.com/smith-utxo/Weather-Dashboard">REPO </a></span></p>
        < a href="https://smith-utxo.github.io/Weather-Dashboard/"><img src={require(`../../assets/CoverGallery/02_WeatherDashboard.PNG`)} alt={`Weather Dashboard`}/></a>
      </div>
      <div>
        <p>Social Network API || <span><a href="https://github.com/smith-utxo/Mongo_Social_Network_API">REPO </a></span></p>
        < a href="https://github.com/smith-utxo/Mongo_Social_Network_API"><img src={require(`../../assets/CoverGallery/03_Social_Network_Api.PNG`)} alt={`Social Network API`}/></a>
      </div>
      <div>
        <p>Run Buddy Website || <span><a href="https://github.com/smith-utxo/run-buddy">REPO </a></span></p>
        < a href="https://smith-utxo.github.io/run-buddy/"><img src={require(`../../assets/CoverGallery/04_Run-buddy.PNG`)} alt={`Run Buddy`}/></a>
      </div>
      <div>
        <p>Workday Scheduler || <span><a href="https://github.com/smith-utxo/Work-Day-Scheduler">REPO </a></span></p>
        < a href="https://smith-utxo.github.io/Work-Day-Scheduler/"><img src={require(`../../assets/CoverGallery/05_Workday Scheduler.png`)} alt={`Workday Scheduler`}/></a>
      </div>
      <div>
        <p>JS Code Quiz || <span><a href="https://github.com/smith-utxo/Code-Quiz">REPO </a></span></p>
      < a href="https://smith-utxo.github.io/Code-Quiz/"><img src={require(`../../assets/CoverGallery/06_Code_Quiz.png`)} alt={`Code Quiz`}/></a>
      </div>

    </section>
  )
}

export default Portfolio; 