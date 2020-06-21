const projectData = {};

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('dist'));

const cors = require('cors');
app.use(cors());

const port = 8000;
const server = app.listen(port, listening);

function listening(){
    console.log("server running");
    console.log(`running localhost: ${port}`);
}


app.get('/data', function (req, res) {
  res.sendFile('dist/index.html')
});
  
app.post('/data', (req, res) => {
    console.log("req.body to post route", req.body)
    projectData.country = req.body.country
    projectData.longitude = req.body.longitude
    projectData.latitude = req.body.latitude
    res.send({
      msg: "Post received"
    })
  })