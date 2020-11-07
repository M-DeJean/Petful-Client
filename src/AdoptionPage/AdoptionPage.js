import React, { Component } from 'react'
import ApiService from './../Services/ApiService'
export default class AdoptionPage extends Component {

    state = {
        cats: null,
        dogs: null,
        people: null,
    }

    componentDidMount() {
        ApiService.getCats()
            .then(cats => {
                this.setState({ cats })
            })
        ApiService.getDogs()
            .then(dogs => {
                this.setState({ dogs })
            })
        ApiService.getPeople()
            .then(people => {
                this.setState({ people })
            })

    }

    adoptCat = () => {
        ApiService.adoptCat()
        ApiService.getCats()
            .then(cats => {
                this.setState({ cats })
            })
        ApiService.updatePeople()
            .then(people => {
                this.setState({ people })
            })
    }

    adoptDog = () => {
        ApiService.adoptDog()
        ApiService.getDogs()
            .then(dogs => {
                if (this.state.dogs === null) {
                    return (
                        <p>Out of Dogs, try again later</p>
                    )
                } else {
                    this.setState({ dogs })
                }
            })
        ApiService.updatePeople()
            .then(people => {

                this.setState({ people })
            })
    }


    render() {
        const { cats, dogs, people } = this.state

        return (
            <>
                { cats == null || dogs == null || people == null ? <p>...Rescuing Pets...</p> :
                    <section className='AdoptionPage'>
                        <h1>Adopt a Pet!</h1>
                        <div className='cat'>
                            <h2>Cat</h2>
                            <img src={cats.imageURL}></img>
                            <p>Name: {cats.name}</p>
                            <button onClick={this.adoptCat}>ADOPT</button>
                        </div>
                        <div className='dog'>
                            <h2>Dog</h2>
                            <img src={dogs.imageURL}></img>
                            <p>Name: {dogs.name}</p>
                            <button onClick={this.adoptDog}>ADOPT</button>
                        </div>
                        <div className='People'>
                            <h2>Queue</h2>
                            <p>{people[0]}</p>
                            <p>{people[1]}</p>
                            <p>{people[2]}</p>
                        </div>
                    </section>}
            </>
        )
    }
}