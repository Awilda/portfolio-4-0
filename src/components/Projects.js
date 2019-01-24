import React, { Component } from 'react'

class Projects extends Component {
  render () {
    return <div className='Projects slide'>
      <h4> My Projects </h4>
      <div className="projectsContainer">
      <div className='projectBox'>
        <a href='http://104.248.117.33/home/'><img src='../hpmb.png' width='300px' /></a>
        <p className="project_text"><span>Built a client's new website on Wordpress using PHP, jQuery, Less. </span>
        <a href='http://104.248.117.33/home/' target='_blank'>View website. </a></p>
      </div>
      <div className='projectBox'>
        <a href='https://newyorkcity.corenetglobal.org/home'><img src='../corenet.png' width='300px' /></a>
        <p className="project_text"><span>Led a team of three in the rebranding of one of our biggest client’s websites. With limited access to their existing CMS, HigherLogic, we injected our own code to reconstruct the new design. We used jQuery and Less. </span>
        <a href='https://newyorkcity.corenetglobal.org/home' target='_blank'>View website. </a></p>
      </div>
      <div className='projectBox'>
        <a href='http://brewtab.carodelafuente.surge.sh/'><img src='../brewtab.png' width='300px' /></a>
        <p className="project_text"><span>A mobile web app that allows you to keep a 'tab' of all the beers you've tried and saves your favorites too. Built with React, Sass and tools like Auth0 and React Router. </span>
        <a href='http://brewtab.carodelafuente.surge.sh/' target="_blank">View it live. </a> <a href="https://github.com/carodelafuente/brewtab" target="_blank">View it on Github.</a></p>
      </div>
      <div className='projectBox'>
        <a href='http://chatroom.carodelafuente.surge.sh/'><img src='../chatroom.png' width='300px' /></a>
        <p className="project_text"><span>An online chatroom built with React, Sass, and Mobx for state management. All you have to do is enter a username and anyone with the link can enter and chat. </span> 
        <a href='http://chatroom.carodelafuente.surge.sh/' target="_blank">View it live. </a> <a href="https://github.com/carodelafuente/chatroom" target="_blank">View it on Github.</a></p>
      </div>
      <div className='projectBox'>
        <a href='http://memory.carodelafuente.surge.sh/'><img src='../memory.png' width='300px' /></a>
        <p className="project_text"><span>A memory game built with React and Sass. </span>
        <a href='http://memory.carodelafuente.surge.sh/' target="_blank">View it live. </a> <a href="https://github.com/carodelafuente/Memory" target="_blank">View it on Github.</a></p>
      </div>
      <div className='projectBox'>
        <a href='http://tic-tac-toe.carodelafuente.surge.sh/'><img src='../tictac.png' width='300px' /></a>
        <p className="project_text"><span>A game of Tic Tac Toe built with vanilla JavaScript, HTML5, and Sass. </span>
        <a href='http://tic-tac-toe.carodelafuente.surge.sh/' target="_blank">View it live. </a> <a href="https://github.com/carodelafuente/tic-tac-toe" target="_blank">View it on Github.</a></p>
      </div>
      </div>
    </div>
  }
}

export default Projects
