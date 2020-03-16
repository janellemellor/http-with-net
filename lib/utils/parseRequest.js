module.exports = rawRequest => {

    const pattern = /(?<path>\.)(?<body>\)(?<method>/[A-Z]+)\;


    
    return rawRequest.match(pattern).groups

};


