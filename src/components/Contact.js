import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <div id='contact'>
                <h2 class='thx'>Thank You For Stopping By!</h2>
                <br />
                <h3>Feel free to reach out to me!</h3>

                <form action="https://formspree.io/f/xqkgppvn" method="POST">
                    <div className="form-house">
                        <label>Name:<input id="user-name" type="text" name="name"></input></label>
                            <label>Email:<input type="text" name="_replyto"></input></label>
                            <label>Message:<textarea name="message"></textarea></label>
                            <span class='button'>
                                <button>Send</button>
                            </span>
                    </div>
                </form>
                <footer id="footer">
				<ul class="icon">
					<li><a href="https://github.com/patience144" class="icon brands fa-github"><span class="label">Github</span></a></li>
					<li><a href="https://www.linkedin.com/in/quiana-s-lee/" class="icon brands fa-linkedin"><span class="label">Linkedin</span></a></li>
					<li><a href="https://docs.google.com/document/d/1N7zHkDAKRetiZOq-8PqXtXsfwYzuuMaMUSDIf2ORtZA/edit?usp=sharing" class="button">Resume</a></li>
				</ul>
				{/* <p class="copyright">&copy; Untitled. Credits: <a href="https://www.linkedin.com/in/quiana-s-lee/">Quiana Lee</a></p> */}

                <a href="https://patience144.github.io/2021QLPortfolio/" className='footernav'>Back To The Top</a>
                    {/* <a href="#projects" className='footernav'>Projects</a>
                    <a href="#contact" className='footernav'>Contact</a>
                     */}

                 </footer>   
        </div>
        )
    }
}

export default Contact
