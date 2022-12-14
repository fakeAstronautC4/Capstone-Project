const express = require('express');
const cors = require("cors")
const path = require('path')
const app = express()
const port = process.env.PORT || 5000


app.use(express.json())
app.use(cors())
app.use(express.static('client'))

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})
const { upComment } = require('./controller')

app.post('/comment', upComment)

app.listen(port, () => console.log(`Server is live on ${port}`))

