import React, { Component } from 'react'


class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="nav">
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                    <a href="https://docs.google.com/document/d/1N7zHkDAKRetiZOq-8PqXtXsfwYzuuMaMUSDIf2ORtZA/edit?usp=sharing" class="button">Resume</a>
                </nav>
            </div>
        )
    }
}

export default Nav
