const express = require('express');
const app = express();
const index = require('./index');


app.get('/', async (req, res) => {
  console.log('Hello world received a request.');

  var event = {"a":3,"b":4}
  var funRes = await index.main_handler(event);
  var funResStr = funRes.toString();
  
  console.log("funResStr:")
  console.log(funResStr)
  res.send(funResStr);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
