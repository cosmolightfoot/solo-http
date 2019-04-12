//takes a request as input

module.exports = req => {
  //and returns a promise if the HTTP method is get or delete
  return new Promise((resolve, reject) => {
    if(req.method === 'GET' || req.method === 'DELETE') {
      return resolve();
    }

    //or rejects if the data type is anything besides JSON
    const headers = req.headers || req.getHeaders();
    if(headers['content-type'] !== 'application/json') {
      return reject('We only support JSON');
    }
    //chunks the incoming data
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    //returns it once the program ends
    req.once('end', () => {
      try {
        const json = JSON.parse(body);
        resolve(json);
      } catch(e) {
        reject(e);
      }
    });
    //throws an error if the stream errors out
    req.once ('error', err => {
      reject(err);
    });
  });
};
