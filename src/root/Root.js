import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage'
import AdoptionPage from '../AdoptionPage/AdoptionPage.js'

export default class Root extends Component {
    render() {
      return (
        <div className='Root'>
          <h1>Petful</h1>

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
