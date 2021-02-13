import React, { Component } from "react";
import avatar from "../avatar.png";

class LandingPage extends Component {
  render() {
    return (
      <div className='landing' id='home'>
        <h1 className='ty'>Thank You For Coming</h1>
        <p className='quote'>
          "Be yourself; everyone else is already taken." -Oscar Wilde
        </p>

        <img className='avatar' src={avatar} alt='avatar'></img>

        <p className='about'>
          I am a Web Developer who is addicted to learning how to think! I have
          a fondness for Front-End Web Development, and I also have Back-End
          knowledge that I would like to continue to develop. My goal is to
          become apart of an amazing web development team and change the future!
          <br />
          When I was a stay at home mother, I wrote a self-help book, which I am
          very proud of. To sell it, I needed an E-commerce website, but at the
          time I couldn't afford to have one built for me or even WIX. A family
          friend told me I could build my website myself, and it was that moment
          that changed my life and leads me here today!
          <br /> Discovering this world has been exciting and stressful, but one thing is for sure, this is where I am supposed to be. I love coding, and I am a coder!  I look forward to working in teams, and I am thrilled to see what amazing things we can create! I am a cyber architect and coding is my life!
        </p>
      </div>
    );
  }
}

export default LandingPage;
