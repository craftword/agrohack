const express = require('express')
const next = require('next')
const ussd = require('./routes/ussd')
const productRouter = require('./routes/route')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const logger = require('morgan')

const url = 'mongodb://heroku_480h8914:h1otd3iqagn9g0hp4bocblh00s@ds243441.mlab.com:43441/heroku_480h8914'
var db = mongoose.connect(url, {useNewUrlParser: true},function(err){
    if(err){
      console.log('Some problem with the connection ' +err)   
    } 
    else {
      console.log('The Mongoose connection is ready')  
    }
});


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

//const rows = [] 
    
app.prepare()
.then(() => {
  const server = express()
  server.use(cors())
  server.use(logger('dev'))
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({extended: true}))

  server.use('/api/products', productRouter) 
  server.post('/ussd', ussd.ussd);  
  
  server.get('*', (req, res) => {
    return handle(req, res)
  })
      
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
      console.log(`Our app is running on port ${ PORT }`);
  });
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
