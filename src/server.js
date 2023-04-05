const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv/config')

const port  = 3001

const bodyParse = require('body-parser');


//routes
const auth = require('./routes/auth');
const movies = require('./routes/movies');

app.use(cors())

//middleware

const { middleareAuth } = require('./middleware/middlewareValidatorJwt') 

app.use(bodyParse.json())
app.use(express.json())


app.use(auth)
app.use(middleareAuth)
app.use(movies)


app.listen(port, ()=> {
    console.log(`Example app Listening on port ${port}`)
})