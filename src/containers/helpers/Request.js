class Request {

    get(url) {
        return fetch(url)
        // .then((res) => res.json());
        .then((res) => res.json())
    }
}

export default Request