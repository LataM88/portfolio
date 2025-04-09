import React from "react";
import './hero.css';
import profile from '../../profile.png';
import AnchorLink from '../../AnchorLink';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <img className="hero-profile-image" src={profile} alt="profile-pic" />
        <div className="hero-description">
          <h1>Welcome to My Portfolio</h1>
          <p>Hi, I'm Michał, a second-year Computer Science student. I'm learning programming and I enjoy designing websites visually</p>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <button className="hero-button">Explore My Work</button>
          </AnchorLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
