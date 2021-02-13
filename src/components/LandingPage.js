import React, { Component } from 'react'
import avatar from '../avatar.png'



class LandingPage extends Component {
    render() {
        return (
            <div className="landing" id='home'>
                <h1 className="ty">Thank You For Coming</h1>
                <p className='quote'>"Be yourself; everyone else is already taken."  -Oscar Wilde</p>

                <img className='avatar' src={avatar} alt='avatar'></img>

                <p className='about'> I am a Web Developer who is addicted to learning how to think! I have a fondness for Front-End Web Development, and I also have Back-End knowledge that I would like to continue to develope. My goal is to become apart of an amazing web development team and change the future!<br />
                 When I was a stay at home mother, I wrote a self help book, which I am very proud of. In order to sell it, I needed an E-commerse website, but at the time I couldn't afford having one built for me, or even WIX. A family friend told me I could build my own website, and it was that moment that changed my life and lead me here today!</p>
            </div>
        )
    }
}

export default LandingPage
