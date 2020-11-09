import React, { Component } from 'react'

export default class Dogs extends Component {
    render() {

        const {dogs, adopt, user, front, reset} = this.props
        return (
            <>
                <h2>Dog</h2>
                <img className="picture" src={dogs.value.imageURL}></img>
                <p>Name: {dogs.value.name}</p>
                <button disabled={user !== front}onClick={adopt, reset}>ADOPT</button>
            </>
        )
    }
}