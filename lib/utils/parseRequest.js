module.exports = rawRequest => {
  const pattern = /(?<method>\w+) (?<path>\/\w*)/;
    
  const { method, path } = rawRequest.match(pattern).groups;
  
  const body = rawRequest.split('\r\n\r\n')[1];

  return {
    method, 
    path, 
    body
  };

};




