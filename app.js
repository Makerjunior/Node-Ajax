
const express = require('express');
const bodyParcer = require('body-parser');
const cors = require('cors');

let app=express();
app.use(cors());
app.urlencodeParcer=bodyParcer.urlencoded({extended:false});

app.get('/',function(req,res){
    let dados={
        "nome":'Junior Pereira',
        "cidade":'Belo Horizonte',
        "idade":34,
        "estado":'Minas Gerais',
        "profisao":'Programador'
    }
 //res.send("Hello Word !")
res.send(dados);

});

let port= 3000 || process.env.PORT;
app.listen(port);