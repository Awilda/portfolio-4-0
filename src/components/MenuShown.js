import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MenuShown extends Component {
  _click = () => {
    this.props.onClick(this.props.index)
  }
  render () {
    return <div className='menuShown'>
      <Link onClick={this._click} to='/'> Home </Link>
      <Link onClick={this._click} to='/about'> About </Link>
      <Link onClick={this._click} to='/projects'> Projects </Link>
      <Link onClick={this._click} to='/contact'> Contact </Link>
    </div>
  }
}

export default MenuShown
