import React from 'react';


const Portfolio = () => {

  return (
    <section className="flexPortfolio">
      <div>
        < a href="https://group-project-dos.herokuapp.com//"><img src={require(`../../assets/CoverGallery/01_SudsOnSale.PNG`)} alt={`Suds on Sale`}/></a>
      </div>
      <div>
        < a href="https://smith-utxo.github.io/Weather-Dashboard//"><img src={require(`../../assets/CoverGallery/02_WeatherDashboard.PNG`)} alt={`Weather Dashboard`}/></a>
      </div>
      <div>
        < a href="https://smith-utxo.github.io/Weather-Dashboard//"><img src={require(`../../assets/CoverGallery/03_Obscura.png`)} alt={`Obscura`}/></a>
      </div>
      <div>
        < a href="https://smith-utxo.github.io/run-buddy/"><img src={require(`../../assets/CoverGallery/04_Run-buddy.PNG`)} alt={`Run Buddy`}/></a>
      </div>
      <div>
        < a href="https://smith-utxo.github.io/Work-Day-Scheduler/"><img src={require(`../../assets/CoverGallery/05_Workday Scheduler.png`)} alt={`Workday Scheduler`}/></a>
      </div>
      <div>
      < a href="https://smith-utxo.github.io/Code-Quiz/"><img src={require(`../../assets/CoverGallery/06_Code_Quiz.png`)} alt={`Code Quiz`}/></a>
      </div>

    </section>
  )
}

export default Portfolio; 