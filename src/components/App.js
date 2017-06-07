import React, { Component } from 'react'
import Menu from './Menu'
import Main from './Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
        <Menu />
        <Switch>
          <Route exact path='/' component={Main} />
        </Switch>
      </div>
    </Router>
  }
}

export default App
