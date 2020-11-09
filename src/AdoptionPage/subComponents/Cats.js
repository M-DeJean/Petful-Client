import React, { Component } from 'react'

export default class Cats extends Component {
    render() {
        const { cats, adopt, user, front, reset } = this.props

        return (
            <>
                <h2>Cat</h2>
                <img className="picture" src={cats.value.imageURL}></img>
                <p>Name: {cats.value.name}</p>
                <p>Age: {cats.value.age}</p>
                <p>Breed: {cats.value.breed}</p>
                <p>Gender: {cats.value.gender}</p>
                <p>Story: {cats.value.story}</p>

                <button disabled={user !== front} onClick={adopt, reset}>ADOPT</button>
            </>
        )
    }
}