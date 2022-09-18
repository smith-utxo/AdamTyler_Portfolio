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
          okay ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
          condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
          mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
          Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
          justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
          dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
          Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
        </h4>
      </div>
    </section>
  )
}

export default AboutMe; 