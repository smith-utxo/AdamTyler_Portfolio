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
          I have a diverse background with nearly a decade of experience in healthcare administration and a bachelor of science in marketing. I completed a certification in full-stack web development at the U of M in 2022. My web development education included both front-end and back-end technologies with a focus on the MERN stack. I take pride in having a good work ethic and value open and honest communication. I look forward to beginning a career that continously challenges my skills and demands constant learning to keep up with an ever evolving landscape.
        </h4>
      </div>
    </section>
  )
}

export default AboutMe; 