
const express = require('express');
const bodyParser=require('body-parser');
const cors = require('cors');

let app=express();
app.use(cors());
let urlencodedParser=bodyParser.urlencoded({extended:false});


let dados={
    "nome":'Junior Pereira',
    "cidade":'Belo Horizonte',
    "idade":34,
    "estado":'Minas Gerais',
    "profisao":'Programador'
}


app.get('/',function(req,res){

 //res.send("Hello Word !")
res.send(dados);

});

app.post('/',urlencodedParser,function(req,res){
    let obj={
        name: req.body.name, 
        age: 26
    };
    res.json(obj); //Retorna o json
});


let port= 3000 || process.env.PORT;
app.listen(port);
