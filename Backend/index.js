const express = require('express')
const path = require('path');
const app = express()
app.use(express.static('FrontEnd'));
const root = path.join(__dirname, '..');

app.get('/', (req, res) => {
  res.sendFile(path.join(root, 'FrontEnd', 'DubSpotWeb.html'));
})



app.listen(3000, () => {
  console.log('Server started on port 3000')
})