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
        value: "",
        front: "",
        submitted: false
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
                this.setState({ people: people, front: people[0] })
            })

        this.interval = setInterval(() => {
            console.log(this.state.value)
            if (this.state.front !== this.state.value)
                this.next();
        }, 3000);

    }

    next() {
        let functions = [this.adoptCat, this.adoptDog]
        function adoptRandom(n) {
            return Math.floor(Math.random() * n);
        }
        functions[adoptRandom(functions.length)]()
    }

    adoptCat = () => {
        ApiService.adoptCat()
        ApiService.getPeople()
            .then(people => {
                this.setState({ people: people, front: people[0] })
            })
        ApiService.getCats()
            .then(cats => {
                this.setState({ cats })
            })
    }

    adoptDog = () => {
        ApiService.adoptDog()
        ApiService.getPeople()
            .then(people => {

                this.setState({ people: people, front: people[0] })
            })
        ApiService.getDogs()
            .then(dogs => {
                this.setState({ dogs })
            })
    }

    getInLine = (e) => {
        e.preventDefault()
        this.setState({ value: e.target.value })
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        ApiService.addPeople(this.state.value)
        ApiService.getPeople()
        this.setState({submitted: true})
        alert(`${this.state.value} was added to the back of the line!`)
    }



    render() {
        const { cats, dogs, people, value, front } = this.state
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
                                value={value}
                                front={front}
                            />
                        </div>}
                    <div className="front">
                        <p>First in line: {front}</p>
                    </div>

                    <div className='People'>
                        {people.slice(1, 6).map((person, index) =>
                            <People
                                key={index}
                                number={index}
                                person={person}
                            />)}
                        {this.state.submitted ? <p></p> : <form onSubmit={this.handleSubmit}>
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