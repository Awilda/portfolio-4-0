import React, { Component } from 'react'

class About extends Component {
  render () {
    return <div className='About'>
      <h3> Call me Carolina. </h3>
      {/* for later: CSS grids used in Soma project to put pics */}
      <img src='../avatar.png' width='150px' />
      <span> I'm a Junior Front-End Developer from Miami who is passionate about tech, media and design. Where those three meet is where I want to land. On my spare time, I like to find new spots around town and drink lots of smoothies. </span>
    </div>
  }
}

export default About
