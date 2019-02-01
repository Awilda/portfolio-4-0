import React, { Component } from 'react'
import dandelion from '../../public/dandelion.png';

class Main extends Component {
  render () {
    return <div className='Main'>
    <div className="main_left_container">
      <h1>Awilda Couverthier</h1>
      <h2>Web Developer</h2>
    </div>
    <div className ="dandelion"><img src={dandelion} alt="dandelion" /></div>
    </div>
  }
}

export default Main
