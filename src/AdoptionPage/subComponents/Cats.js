import React, { Component } from 'react'

export default class Cats extends Component {
    render() {
        const {cats, adopt, user, front, reset} = this.props

        return (
            <>
                <h2>Cat</h2>
                <img className="picture" src={cats.value.imageURL}></img>
                <p>Name: {cats.value.name}</p>
                <button disabled={user !== front} onClick={adopt, reset}>ADOPT</button>
            </>
        )
    }
}