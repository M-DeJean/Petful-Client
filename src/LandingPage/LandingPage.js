import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <h1>Landing Page</h1>
                <h3><Link to={'/adoption'}>Adopt a Pet</Link></h3>
            </div>
        )
    }
}