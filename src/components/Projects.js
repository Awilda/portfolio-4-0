import React, { Component } from 'react'

class Projects extends Component {
  render () {
    return <div className='Projects'>
      <h3> My Projects </h3>
      <div className='projectBox'>
        <img src='../memory.png' width='300px' />
        <span> A memory game written with React and styled with Sass.</span>
        <a href='http://memory.carodelafuente.surge.sh/'> Click to view it live. </a>
      </div>
      <div className='projectBox'>
        <img src='../tictac.png' width='300px' />
        <span> A game of Tic Tac Toe written with vanilla JavaScript and styled with HTML5 and Sass.</span>
        <a href='http://tic-tac-toe.carodelafuente.surge.sh/'> Click to view it live. </a>
      </div>
      <div className='projectBox'>
        <img src='../chatroom.png' width='300px' />
        <span> An online chatroom written with React and styled with Sass. All you have to do is enter a username and anyone with the link can enter and chat.</span>
        <a href='http://chatroom.carodelafuente.surge.sh/'> Click to view it live. </a>
      </div>
    </div>
  }
}

export default Projects