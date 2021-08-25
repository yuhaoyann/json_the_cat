const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      if (body === '[]') {
        callback(`couldn't find cat`, null);
      } else {
        const data = JSON.parse(body)[0].description;
        callback(null, data);
      }
    }
  });
};

module.exports = {
  fetchBreedDescription
};
