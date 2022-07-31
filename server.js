const express = require('express');
const cors = require('cors')
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/weather-app'));

app.use(cors({
    origin: "*",
}))

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname +
        '/dist/weather-app/index.html'));
});
app.listen(process.env.PORT || 8080);