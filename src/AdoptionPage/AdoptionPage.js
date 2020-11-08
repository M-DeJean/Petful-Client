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
        value: ""
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

    getInLine = (e) => {
        this.setState({ value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        ApiService.addPeople(this.state.value)
        ApiService.getPeople()
        alert(`${this.state.value} was added to the back of the line!`)

        e.preventDefault()
    }



    render() {
        const { cats, dogs, people } = this.state
        return (
            <>
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
                        {people.slice(0, 5).map((person, index) =>
                            <People
                                key={index}
                                number={index}
                                person={person}
                            />)}
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Enter Name:</label><br/>
                        <input type="text" placeholder="Your name" name="name" id="name" value={this.state.you}onChange={this.getInLine}></input>
                        <input type="submit" value="Submit"></input>
                    </form>
                    </div>
                </section>
            </>
        )
    }
}