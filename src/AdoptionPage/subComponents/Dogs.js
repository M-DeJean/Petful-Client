import React, { Component } from 'react'

export default class Dogs extends Component {
    render() {

        const {dogs, adopt, value, front} = this.props
        return (
            <>
                <h2>Dog</h2>
                <img src={dogs.value.imageURL}></img>
                <p>Name: {dogs.value.name}</p>
                <button disabled={value !== front}onClick={adopt}>ADOPT</button>
            </>
        )
    }
}