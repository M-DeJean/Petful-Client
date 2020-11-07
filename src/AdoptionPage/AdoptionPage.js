import React, { Component } from 'react'

import ApiService from './../Services/ApiService'
export default class AdoptionPage extends Component {

    state = {
        cats: null,
        dogs: null,
        people: null,
        loading: true
    }

    componentDidMount() {
        ApiService.getPets()
            .then(pets => {
                this.setState({
                    cats: pets.cats,
                    dogs: pets.dogs
                })
            })
        ApiService.getPeople()
            .then(people => {
                this.setState({ people })
                this.setState({ loading: false })
            })
    }


    render() {
        const { cats, dogs, people, loading } = this.state

        return (
            <>
                { loading ? <p>...LOADING PETS...</p> :
                    <section className='AdoptionPage'>
                        <h1>Adopt a Pet!</h1>
                        <div className='cat'>
                            <h2>Cat</h2>
                            <img src={cats.imageURL}></img>
                            <p>Name: {cats.name}</p>
                            <button>ADOPT</button>
                        </div>
                        <div className='dog'>
                            <h2>Dog</h2>
                            <img src={dogs.imageURL}></img>
                            <p>Name: {dogs.name}</p>
                            <button>ADOPT</button>
                        </div>
                        <div className='People'>
                            <h2>Queue</h2>
                            {people.map(person =>
                            <p key={person}>{person}</p>
                            )}
                        </div>
                    </section>}
            </>
        )
    }
}