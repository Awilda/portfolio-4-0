import React, { Component } from 'react'
import MenuShown from './MenuShown'

class Menu extends Component {


  render () {
    return <div className='Menu'>
    <div className="listMenu">
      <ul className="menu_ul">
        <li className="list_item"><a className="menu_link" href="/">Home</a></li>
        <li className="list_item"><a className="menu_link" href="/about">About</a></li>
        <li className="list_item"><a className="menu_link" href="/projects">Projects</a></li>
        <li className="list_item"><a className="menu_link" href="/contact">Contact</a></li>
      </ul>
    </div>
    </div>
  }
}

export default Menu
