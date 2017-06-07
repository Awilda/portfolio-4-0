import React, { Component } from 'react'

class App extends Component {
  render () {
    return <div className='App'>
      <div className='menu'>
        <ul>
          <li> Home </li>
          <li> Projects </li>
          <li> Contact </li>
        </ul>
      </div>
      <div className='image'>
        <h2> Carolina de la Fuente </h2>
        <img src='../albert-dera-245502.jpg' width='500px' />
      </div>
    </div>
  }
}

export default App
