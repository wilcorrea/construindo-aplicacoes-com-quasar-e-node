// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

fastify.register(require('fastify-cors'), {
  // put your options here
})

// Declare a route
fastify
  .get('/', async (request, reply) => {
    const quoteGenerator = require('inspirational-quotes')
    return {
      status: 'success',
      data: quoteGenerator.getQuote()
    }
  })
  .get('/ping', async (request, reply) => {
    return {
      status: 'success',
      data: 'pong'
    }
  })

// Run the server!
module.exports = async (port = 3000) => {
  try {
    await fastify.listen(port)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
