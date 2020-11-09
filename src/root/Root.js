import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import AdoptionPage from '../AdoptionPage/AdoptionPage.js'
import './Root.css'

export default class Root extends Component {
    render() {
      return (
        <div className='Root'>
          <div className="header">
            <header>
              <Link to={'/'}><h1>Petful</h1></Link>
            </header>
          </div>
        
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route
              exact
              path={'/adoption'}
              component={AdoptionPage}
            />
          </Switch>
        </div>
      )
    }
}
