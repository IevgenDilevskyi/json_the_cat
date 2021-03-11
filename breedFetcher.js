const request = require('request');

const arg = process.argv.slice(2);
const source = `https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`;

request(source, (error, response, body) => {
  const data = JSON.parse(body);
  if (error) {
    console.log('Error occured. Error details:\n ', error);
  } else if (data[0] === undefined) {
    console.log('Breed is not found');
  } else {
    console.log(data[0].description);
  // console.log(body);
  // console.log(data);
  // console.log(typeof data);
  // console.log('statusCode:', response && response.statusCode);
  // fs.writeFile(dest, body, () => {
  //   console.log(`Downloaded and saved ${body.length} bytes to ${dest}`);
  // });
  }
});