import React, { Component } from 'react'
import ApiService from './../Services/ApiService'
import Cats from './subComponents/Cats'
import Dogs from './subComponents/Dogs'
import People from './subComponents/People'
import './AdoptionPage.css'
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
        user: "",
        front: "",
        submitted: false
    }

    componentDidMount() {
        //When adoption page loads, fetch all animals and people in queue
        ApiService.getCats()
            .then(cats => {
                this.setState({ cats })
                return ApiService.getDogs()
            })
            .then(dogs => {
                this.setState({ dogs })
                return ApiService.getPeople()
            })
            .then(people => {
                this.setState({ people: people, front: people[0] })
            })

        this.interval = setInterval(() => {
            //Every 5 seconds a new animal is adopted at random and the next person moves up in line
            //For functionality purposes, all non-users in queue get put in the back of queue
            if (this.state.front !== this.state.user) {
                this.next()
            } else {
                clearInterval(this.interval)
                this.interval = null
            }
        }, 5000);

    }

    componentWillUnmount() {
        //To prevent memory leak, stop the automated function from adopting pets if you leave the adoption page
        clearInterval(this.interval)
    }

    next() {
        //Randomly adopt a dog or cat
        let functions = [this.adoptCat, this.adoptDog]
        function adoptRandom(n) {
            return Math.floor(Math.random() * n);
        }
        functions[adoptRandom(functions.length)]()
    }

    adoptCat = () => {
        //Adopt a cat, move peron to the back of queue, then update the state
        ApiService.adoptCat()
            .then(() => {
                ApiService.getPeople()
                    .then(people => {
                        this.setState({ people: people, front: people[0] })
                        return ApiService.getCats()
                    })
                    .then(cats => {
                        this.setState({ cats })
                    })
            })
    }

    adoptDog = () => {
        //Adopt a dog, move person to the back of the queue, then update the state
        ApiService.adoptDog()
            .then(() => {
                ApiService.getPeople()
                    .then(people => {
                        this.setState({ people: people, front: people[0] })
                        return ApiService.getDogs()
                    })
                    .then(dogs => {
                        this.setState({ dogs })
                    })
            })
    }

    userAdoptDog = () => {
        //After user adopts a dog, remove both dog and user from queue
        ApiService.userAdoptDog()
            .then(() => {
                ApiService.getPeople()
                    .then(people => {
                        this.setState({ people: people, front: people[0] })
                        return ApiService.getDogs()
                    })
                    .then(dogs => {
                        this.setState({ dogs })
                    })
            })

    }

    userAdoptCat = () => {
        //After user adopts a cat, remove both user and cat from queue
        ApiService.userAdoptCat()
            .then(() => {
                ApiService.getPeople()
                    .then(people => {
                        this.setState({ people: people, front: people[0] })
                        return ApiService.getCats()
                    })
                    .then(cats => {
                        this.setState({ cats })
                    })
            })
    }

    getInLine = (e) => {
        //When user enters his/her name, state is updated
        e.preventDefault()
        this.setState({ user: e.target.value })

    }

    handleSubmit = (e) => {
        //Username from state is added to queue and state gets updated with alert
        e.preventDefault()
        ApiService.addPeople(this.state.user)
        ApiService.getPeople()
        this.setState({ submitted: true })
        alert(`${this.state.user} was added to the back of the line!`)
    }

    resetUser = () => {
        //When user adopts pet, state is cleared and user sees update in alert
        alert('You have adopted a new pet! Thank you!')
        // ApiService.deletePeople()
        const blank = ""
        this.setState({ user: blank, submitted: false })
    }



    render() {
        const { cats, dogs, people, user, front } = this.state
        return (
            <>
                <section className='AdoptionPage'>
                    <div className="pets">
                        {!cats.next ? <p>Rescuing Cats...</p> :
                            <div className='cat'>
                                <Cats
                                    cats={cats}
                                    adopt={this.userAdoptCat}
                                    reset={this.resetUser}
                                    user={user}
                                    front={front}
                                />
                            </div>}
                        {!dogs.next ? <p>Rescuing Dogs...</p> :
                            <div className='dog'>
                                <Dogs
                                    dogs={dogs}
                                    adopt={this.userAdoptDog}
                                    reset={this.resetUser}
                                    user={user}
                                    front={front}
                                />
                            </div>}
                    </div>
                    <div className="front">
                        <h3>First in line: {front}</h3>
                    </div>
                    <div className='People'>
                        {people.slice(1, 6).map((person, index) =>
                            <People
                                key={index}
                                number={index}
                                person={person}
                            />)}
                        {this.state.submitted ? <p></p> : <form className="form" onSubmit={this.handleSubmit}>
                            <label htmlFor="name">Enter Name:</label><br />
                            <input onChange={this.getInLine} type="text" placeholder="Your name" name="name" id="name"></input>
                            <input type="submit" value="Submit"></input>
                        </form>}
                    </div>
                </section>
            </>
        )
    }
}