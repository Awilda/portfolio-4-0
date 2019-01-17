import React, { Component } from 'react'
import waves from '../../public/WAVES1.png';

class Main extends Component {
  render () {
    return <div className='Main'>
    <div className="main_left_container">
      <h1>Hi, I'm Carolina.</h1>
      <p>I'm a Front End Developer working at a public relations firm in New York City. I'm curious and passionate about tech, humans, and the Internet. I spend my time trying to level up my skills in JavaScript and venturing around town with my film camera.</p>
    </div>
    <div className ="waves"><img src={waves} alt="waves" /></div>
    </div>
  }
}

export default Main
