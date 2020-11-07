import config from './../config'

const Apiservice = {
    getPets() {
        return fetch(`${config.API_ENDPOINT}/pets`)
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
    adoptPet(type) {
        return fetch(`${config.API_ENDPOINT}/pets`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: type
            })
        })
        .then(res => res)
    }

}

export default Apiservice