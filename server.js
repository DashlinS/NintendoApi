const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

const data = require('./info.js')

// console.log(data)

app.use(cors())
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/nintendo/:year', (request, response) => {
  const getYear = request.params.year
  console.log(getYear)
  let result = data.find((gameConsole => gameConsole.year.includes(getYear)))
  // let result = data.find((gameConsole =>(gameConsole.year.includes(getYear))))
  if(result === undefined) {
    response.json({name:'Unknown', imageUrl:'Unknown', description:'Unknown', year:'Unknown'})
  }
  else {
    response.json(result)
  }
})

app.listen(PORT, ()=> {
  console.log(`This is running on port ${PORT}`)
})
