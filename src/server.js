const express = require('express')
const { join } = require('path')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(join(__dirname, 'public')))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
