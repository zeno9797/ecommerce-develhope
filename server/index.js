const users = require("./data.json")
console.log(users)

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
  const {username, password} = req.body
  const filterUser = users.filter((user) => {
    return user.username === username && user.password === password
  })
  if (filterUser.length > 0) {
    res.status(200)
    res.send("benveuto su game store")
  } else {
    res.status(402)
    res.send("non sei autorizzato")
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})