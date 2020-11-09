import React, { Component } from 'react'

export default class People extends Component {
    render() {
        const { person, number} = this.props
        return (
            <>
                <p>Next {number + 1}: {person}</p>
            </>
        )
    }
}