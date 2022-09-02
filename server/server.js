const express = require('express');
const cors = require("cors")
const path = require('path')
const app = express()
const PORT = 5000;


app.use(express.json())
app.use(cors())
app.use(express.static('client'))

const { upComment } = require('./controller')

app.post('/comment', upComment)

app.listen(PORT, () => console.log(`Server is live on ${PORT}`))

