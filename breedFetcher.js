const request = require('request');
// const arg = process.argv.slice(2);

// const breedName = arg[0];
const fetchBreedDescription = function(breedName, callback) {
  const source = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(source, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    
    const data = JSON.parse(body);
    
    if (data[0] === undefined) {
      callback('Breed is not found', null);
    } else {
        callback(null, data[0].description);
      }
  });

};

module.exports = { fetchBreedDescription };