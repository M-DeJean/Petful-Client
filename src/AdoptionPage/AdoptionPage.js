import React, { Component } from 'react'
import ApiService from './../Services/ApiService'
export default class AdoptionPage extends Component {

    state = {
        cats: null,
        dogs: null,
        people: null
    }

    componentDidMount() {

    }

    render() {

        return (


            <h1>Adopt a Pet!</h1>
        )
    }
}