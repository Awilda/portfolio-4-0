import React, { Component } from 'react'

class Projects extends Component {
  render () {
    return <div className='Projects slide'>
      <h4> My Projects </h4>
      <div className='projectBox'>
        <img src='../brewtab.png' width='300px' />
        <p className="project_text"><span> An mobile web app that allows you to keep a 'tab' of all the beers you've tried and saves your favorites too. Built with React and Sass and uses libraries such as Auth0 and React Router. </span>
        <a href='http://brewtab.carodelafuente.surge.sh/'>Click to view it live. </a></p>
      </div>
      <div className='projectBox'>
        <img src='../memory.png' width='300px' />
        <p className="project_text"><span> A memory game written with React and styled with Sass. </span>
        <a href='http://memory.carodelafuente.surge.sh/'>Click to view it live. </a></p>
      </div>
      <div className='projectBox'>
        <img src='../tictac.png' width='300px' />
        <p className="project_text"><span> A game of Tic Tac Toe written with vanilla JavaScript and styled with HTML5 and Sass. </span>
        <a href='http://tic-tac-toe.carodelafuente.surge.sh/'>Click to view it live. </a></p>
      </div>
      <div className='projectBox'>
        <img src='../chatroom.png' width='300px' />
        <p className="project_text"><span> An online chatroom written with React and styled with Sass. All you have to do is enter a username and anyone with the link can enter and chat. </span>
        <a href='http://chatroom.carodelafuente.surge.sh/'>Click to view it live. </a></p>
      </div>
    </div>
  }
}

export default Projects
