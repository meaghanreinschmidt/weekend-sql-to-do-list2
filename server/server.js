const express = require('express');
// console.log('Is nodemon working?')
const app = express();
const PORT = process.env.PORT || 5001;

// This is how our index.html appears
app.use(express.static('server/public'));
app.use(express.urlencoded({ extended: true }));


// Allows server.js to require our router
app.listen(PORT, () => {
    console.log('listening on port', PORT)
});