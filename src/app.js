'use strict';


const express = require('express');

const app = express();

app.get('/', (req, res)=>{
  res.send('my app is running!')
});
app.get('')
app.listen(8080, () => {
    console.log('Your frontend server is on port 8080');
});

// const URL = "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAowurJ1GrZKbUpmwcs8v0oaC8BWDKwsfg";
