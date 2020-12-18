import config from './../config'

const Apiservice = {
    getCats() {
        return fetch(`${config.API_ENDPOINT}/cats`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getDogs() {
        return fetch(`${config.API_ENDPOINT}/dogs`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getPeople() {
        return fetch(`${config.API_ENDPOINT}/people`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json())
    },
    addPeople(name) {
        return fetch(`${config.API_ENDPOINT}/people`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        })
    },
    deletePeople() {
        return fetch(`${config.API_ENDPOINT}/people`, {
            method: 'DELETE'
        })
    },
    userAdoptDog() {
        return fetch(`${config.API_ENDPOINT}/people/dog`, {
            method: 'DELETE'
        })
    },
    userAdoptCat() {
        return fetch(`${config.API_ENDPOINT}/people/cat`, {
            method: 'DELETE'
        })
    },
    adoptCat() {
        return fetch(`${config.API_ENDPOINT}/cats`, {
            method: 'DELETE'
        })
    },
    adoptDog() {
        return fetch(`${config.API_ENDPOINT}/dogs`, {
            method: 'DELETE'
        })
    }

}

export default Apiservice