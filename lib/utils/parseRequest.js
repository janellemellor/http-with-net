module.exports = rawRequest => {

  // const pattern = /(?<path>\.)(?<body>\)(?<method>/[A-Z]+)\;
  const pattern = /(?<method>\w+) (?<path>\/\w*)/;
    
  const { method, path } = rawRequest.match(pattern).groups;
  
  const body = rawRequest.split('\r\n\r\n')[1];
  //alt


  return {
    method, 
    path, 
    body
  };
  // return rawRequest.match(pattern).groups

};


