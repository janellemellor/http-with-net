module.exports = rawRequest => {

    const pattern = / /
    //add regex here to dictate shape of object which should include:
        //path
        //body
        //method

    return pattern.test(rawRequest);

};

//parseRequest takes a rawRequest (an HTTP request message). It should take that rawRequest and return an object with body, method, and path from the rawRequest.
