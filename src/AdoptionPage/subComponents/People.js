import React, { Component } from 'react'

export default class People extends Component {
    render() {
        const { person, number} = this.props
        return (
            <>
                <h2>Position: {number + 1}</h2>
                {person}
            </>
        )
    }
}