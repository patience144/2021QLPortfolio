import React, { Component } from 'react'
import banner from '../banner1.png'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className="img" src={banner} alt="Quiana Lee Web Developer"></img>
            </div>
        )
    }
}

export default Header
