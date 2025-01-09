express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 80;

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))