import config from './../config'

const Apiservice = {
    getPets() {
        return fetch(`${config.API_ENDPOINT}/pets`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}