const fs = require('fs');

const image = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
  response.writehead(200, { 'Content-Type': 'image/png' });
  response.write(image);
  response.end();
};

module.exports.getImage = getImage;
