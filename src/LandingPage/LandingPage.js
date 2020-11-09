import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
export default class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <h3>Welcome to the Petful Adoption Center</h3>
                <p>Our mission is to find a loving home for our cats and dogs. We are quite busy at the moment so there is a wait. Please press the button below to take a number and get in line.</p>
                <h3><Link to={'/adoption'}>Adopt a Pet</Link></h3>
            </div>
        )
    }
}