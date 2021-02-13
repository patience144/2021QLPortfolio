import React, { Component } from 'react'

class Projects extends Component {
    render() {
        return (
            <div className='projects' id='projects'>
                <h1 className='projects'>Projects</h1>
                <div className='flex'>
                    <img className='pic' src='img/spacedrep.png' alt='spacedrep'></img>
                    <p>This is an application to help people learn how to speak a new language. The skills I used are Node, Express, PostgreSQL, and React.</p>
                    <ul>
                        <li><a href='https://client-spaced-repetition.vercel.app/'>Spaced Rep</a></li>
                        <li><a href='https://github.com/patience144/client-spaced-repetition'>Github Client</a></li>
                        <li><a href='https://github.com/patience144/api-spaced-repetition'>Github API</a></li>
                    </ul>

                </div>

                <br />

                <div className='flex'>
                    <img className='pic' src='img/petful.png' alt='spacedrep'></img>
                    <p>This is an application to simulate the FIFO algorithm. The skills I used are also Node, Express, PostgreSQL, and React.</p>
                    <ul>
                        <li><a href='https://petful-client-phi.vercel.app/'>Petful</a></li>
                        <li><a href='https://github.com/patience144/Petful-clientQ'>Github Client</a></li>
                        <li><a href='https://github.com/patience144/Petful-serverQ'>Github API</a></li>
                    </ul>


                </div>

                <br />

                <div className='flex'>
                    <img className='pic' src='img/choreapp.png' alt='spacedrep'></img>
                    <p>This is an application to help people keep track of their daily chores. The skills I used are Node, Express, PostgreSQL, and React.</p>
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
