const hello = 'Hello World';

const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

const getHello = (request, response) => {
  response.writehead(200, { 'Content-Type': 'text/plain' });
  response.write(hello);
  response.end();
};

const getTime = (request, response) => {
  response.writehead(200, { 'Content-Type': 'text/plain' });
  response.write(getTimeString());
  response.end();
};

module.exports.hello = hello;
module.exports.time = getTimeString;
module.exports.getHello = getHello;
module.exports.getTime = getTime;
