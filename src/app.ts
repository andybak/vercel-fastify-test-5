const path = require("path");
const fastify = require("fastify")({logger: false,});
const multiavatar = require('@multiavatar/multiavatar')

fastify.get('/', function (request, reply) {
  var name = request.query.name;
  if (name==="" || name===undefined) {
    name = Math.random();
  }
  let svgCode = multiavatar(name);
  reply
    .code(200)
    .header('Content-Type', 'image/svg+xml; charset=utf-8')
    .send(svgCode)
})

fastify.listen(
  { port: process.env.PORT, host: "0.0.0.0" },
  function (err, address) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  }
);
