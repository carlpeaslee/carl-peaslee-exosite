import express from 'express'
import expressGraphQL from 'express-graphql'
import schema from './data/schema'
import cors from 'cors'
import db from './data/db'
import http from 'http'

import defaultProducts from './data/defaultProducts'

const app = express()


app.set('port', (process.env.PORT || 3001))

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Credentials", "true")
  next()
})

const corsOptions = {
  origin: true,
  //credentials: true
}



app.use('/graphql', [cors(corsOptions)], expressGraphQL((req) => {
  return {
    schema,
    graphiql: true,
    context: {
      permissions: req.permissions
    },
    pretty: true
  }
}))



db
  .sync()
  .then(function(err) {
    console.log('It worked!')
    defaultProducts()
  }, function (err) {
    console.log('An error occurred while creating the table:', err)
  })


const server = app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`) // eslint-disable-line no-console
})
