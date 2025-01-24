const express = require('express');
const app = express();
const router = require('./routes'); 


app.use('/', router);


const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
