const express = require('express')

// init app & middleware
const app = express()

app.listen(3000, () => {
  console.log('app listening on port 3000')
})

// routes
app.get('/', (req, res) => {
  res.json({msg: "welcome to the api"})
})