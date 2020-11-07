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
    updatePeople() {
        return fetch(`${config.API_ENDPOINT}/people`, {
            method: 'PATCH'
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
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