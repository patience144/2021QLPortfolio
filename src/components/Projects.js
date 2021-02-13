import React, { Component } from 'react'

class Projects extends Component {
    render() {
        return (
            <div className='projects' id='projects'>
                <h1 className='projects'>Projects</h1>
                <div className='flex'>
                    <img className='pic' src='img/spacedrep.png' alt='spacedrep'></img>
                    <h4>Title: Spaced Repetition</h4>
                    <p>This is an application for people who want to learn how to speak a new language. I built this because people love to learn new languages. The skills I used are Node, Express, PostgreSQL, and React.</p>
                    <ul>
                        <li><a href='https://client-spaced-repetition.vercel.app/'>Spaced Rep</a></li>
                        <li><a href='https://github.com/patience144/client-spaced-repetition'>Github Client</a></li>
                        <li><a href='https://github.com/patience144/api-spaced-repetition'>Github API</a></li>
                    </ul>

                </div>

                <br />

                <div className='flex'>
                    <img className='pic' src='img/petful.png' alt='spacedrep'></img>
                    <h4>Title: F.I.F.O. Find A Pet</h4>
                    <p>This is an application for people who want to adopt a pet. It simulates the FIFO algorithm. I built this to show the first in, first out process. The skills I used are also Node, Express, PostgreSQL, and React.</p>
                    <ul>
                        <li><a href='https://petful-client-phi.vercel.app/'>Petful</a></li>
                        <li><a href='https://github.com/patience144/Petful-clientQ'>Github Client</a></li>
                        <li><a href='https://github.com/patience144/Petful-serverQ'>Github API</a></li>
                    </ul>


                </div>

                <br />

                <div className='flex'>
                    <img className='pic' src='img/choreapp.png' alt='spacedrep'></img>
                    <h4>Title: Chore App</h4>
                    <p>This is an application for people keep track of their daily chores. I built this because I have four kids and it comes in handy. The skills I used are Node, Express, PostgreSQL, and React.</p>
                    <ul>
                        <li><a href='https://pc-client-three.vercel.app/'>Chore App</a></li>
                        <li><a href='https://github.com/patience144/choreapp-clientside'>Github Client</a></li>
                        <li><a href='https://github.com/patience144/choreapp-api'>Github API</a></li>
                    </ul>




                </div>



            </div>
        )
    }
}

export default Projects
