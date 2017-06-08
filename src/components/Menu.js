import React, { Component } from 'react'
import MenuShown from './MenuShown'

class Menu extends Component {
  state = {
    menuShown: false,
    slideMenu: false
  }

  toggleMenu = () => {
    this.setState(
      {
        menuShown: !this.state.menuShown,
        slideMenu: !this.state.slideMenu
      }
    )
  }

  render () {
    return <div className='Menu'>
      <div className='menuBox'>
        { this.state.menuShown ? <MenuShown /> : null }
        <a onClick={this.toggleMenu} className={'bounce ' + (this.state.slideMenu ? 'arrow' : '')} href='#'> ^ </a>
      </div>
    </div>
  }
}

export default Menu
