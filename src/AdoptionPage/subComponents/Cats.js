import React, { Component } from 'react'

export default class Cats extends Component {
    render() {
        const {cats, adopt} = this.props

        return (
            <>
                <h2>Cat</h2>
                <img src={cats.value.imageURL}></img>
                <p>Name: {cats.value.name}</p>
                <button onClick={adopt}>ADOPT</button>
            </>
        )
    }
}