import React from 'react';
import headShot from '../src/assets/headshot.PNG';


function AboutMe() {
  return (
    <section className="my-5">
      <img src={headShot} className="marginSpace-2" style={{ width: "100%" }} alt="cover" />
      <div>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
          Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
          justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
          dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
          Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </h3>
      </div>
    </section>
  )
}

export default AboutMe; 