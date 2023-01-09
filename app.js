const { connect } = require('diskdb');
const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path')
const { dbConnection } = require('./database/config');
require('dotenv').config();

const app = express()
// require('./db')
const cervezas = require('./routes/cervezas')
const users = require('./routes/users')
const auth = require('./routes/auth')
const camareros=require('./routes/camareros')
const upload=require('./routes/upload')


// DATABASE CONNECTION
async function connectAtlas(){
    await dbConnection()
}
connectAtlas()

//MIDDLEWARE
app.use(express.json())
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/',
  createParentPath:true
}));

//ROUTES
app.use('/cervezas', cervezas)
app.use('/users', users)
app.use('/auth', auth)
app.use('/camareros',camareros)
app.use('/upload',upload)


app.listen(process.env.PORT)






