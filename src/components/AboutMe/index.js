import React from 'react';
import headShot from '../../assets/headshot.PNG';


function AboutMe() {
  return (
    <section className="flex-row">
      <div>
        <img
          src={headShot}
          className="roundBorder"
          style={{ width: "50%" }}
          alt="cover"
        />
      </div>
      <div className="Margin-10">
        <h4>
          Jr. Software developer for a transportation
          management company with exposure to both backend and frontend
          development. Full stack web development certificate from the
          University of Minnesota and a bachelor of science in marketing. Emphasis on effective communication and
          continuous learning. I consider myself a lifelong learner with a strong desire to
          continue improving my abilities and the projects I work on. I enjoy
          building accessible and responsive websites that engage every user.
          I'm well positioned to leverage my diverse background and skill set to
          create exceptional user experiences.
        </h4>
      </div>
    </section>
  );
}

export default AboutMe; 