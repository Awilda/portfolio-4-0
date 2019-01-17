import React, { Component } from 'react'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Main from './Main'
import Test from './Test'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render () {
    return <Router>
      <div className='App'>
      <Menu />
      <div className="flexContainer">
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
        </Switch>
        </div>
      </div>
    </Router>
  }
}

export default App
