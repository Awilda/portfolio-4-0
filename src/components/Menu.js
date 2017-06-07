import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
  state = {
    menuShown: false
  }

  toggleMenu = () => {
    this.setState(
      { menuShown: !this.state.menuShown }
    )
    console.log(this.state.menuShown)
  }

  render () {
    return <div className='Menu'>
      <div className='menuBox'>
        <Link onClick={this.toggleMenu} className='bounce' to='/'> ^ </Link>
      </div>
    </div>
  }
}

export default Menu
