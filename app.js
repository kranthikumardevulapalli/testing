const express = require('express');
const app     = express();
const cors    = require('cors');

var corsoption = {
    origin : "http://localhost:8080"
}
app.use(cors(corsoption));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.status(200).json({'message':"welcome to nodejs project"});
});

require('./routes/employee.routes')(app);

app.listen(8080,()=>{
    console.log('server is running');
});