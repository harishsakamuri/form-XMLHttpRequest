const express = require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');

app.use(cors());
app.use(bodyparser.json());

data = []
app.post('/sid',function(req,res){
  //  console.log(req.body);
    data.push(req.body);
    console.log(data);
    res.status(200).json({'message':'recieved'})
})

app.get('/sidd',function(req,res){
  res.status(200).json(data)
})

app.listen(3000);
