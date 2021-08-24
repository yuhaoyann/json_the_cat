const request = require('request');
const args = process.argv.slice(2)[0];
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + args;

request(url, (error, response, body) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    if (body === '[]') {
      console.log("couldn't find cat");
    } else {
      const data = JSON.parse(body)[0];
      console.log(data.description);
    }
  }
});