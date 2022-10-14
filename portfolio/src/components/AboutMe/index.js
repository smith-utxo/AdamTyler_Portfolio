import React from 'react';
import headShot from '../../assets/headshot.PNG';


function AboutMe() {
  return (
    <section className="flex-row">
      <div>
        <img src={headShot} className="roundBorder" style={{ width: "50%" }} alt="cover" />
      </div>
      <div className="Margin-10">
        <h4>
        Web developer trained in agile methodology that leverages quality improvement background to deliver reliable and intuitive applications. Recently obtained a certificate in full stack development from the University of Minnesota with a focus on the MERN stack. I consider myself a lifelong learner with a strong desire to continue improving my abilities and the projects I work on. I believe perfection is a fallacy and instead strive for continuous improvement. I enjoy building accessible and responsive websites that engage every user. I'm well positioned to leverage my diverse background and skill set to create exceptional user experiences.
        </h4>
      </div>
    </section>
  )
}

export default AboutMe; 