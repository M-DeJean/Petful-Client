import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
export default class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <h3>Welcome to the Petful Adoption Center</h3>
                <p>Our mission is to find a suitable home for our cats and dogs. We are quite busy at the moment so there is a wait. Please click the button below to get in line.</p>
                <h3><Link to={'/adoption'}>Adopt a Pet</Link></h3>
            </div>
        )
    }
}