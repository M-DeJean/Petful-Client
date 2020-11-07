import React, { Component } from 'react'
import ApiService from './../Services/ApiService'
import Cats from './subComponents/Cats'
import Dogs from './subComponents/Dogs'
import People from './subComponents/People'
export default class AdoptionPage extends Component {

    state = {
        cats: {
            value: {},
            next: {}
        },
        dogs: {
            value: {},
            next: {}
        },
        people: [],
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

    adoptCat = (e) => {
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
                this.setState({ dogs })
            })
        ApiService.updatePeople()
            .then(people => {

                this.setState({ people })
            })
    }


    render() {
        const { cats, dogs, people } = this.state
        console.log(dogs)
        return (
            <>
                { people == null ? <p>...Rescuing Pets...</p> :
                    <section className='AdoptionPage'>
                        <h1>Adopt a Pet!</h1>
                        {!cats.next ? <p>Rescuing Cats...</p> : <div className='cat'>
                            <Cats
                                cats={cats}
                                adopt={this.adoptCat}
                            />
                        </div>}
                        {!dogs.next ? <p>Rescuing Dogs...</p> :
                            <div className='dog'>
                                <Dogs
                                    dogs={dogs}
                                    adopt={this.adoptDog}
                                />
                            </div>}

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