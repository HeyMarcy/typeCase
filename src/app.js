'use strict';


const express = require('express');

const app = express();

app.listen(3000);

app.listen(3000, () => {
    console.log('Your app is running');
});

// const URL = "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAowurJ1GrZKbUpmwcs8v0oaC8BWDKwsfg";
