const port = '3030'
const express = require('express')
const app = express();
const handlebars = require("express-handlebars")
const bodyParser = require('body-parser');
const newName = require("./models/insert")

app.engine('handlebars',handlebars({defaultLayout:'main'}))
app.set('view engine','handlebars')

app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

//Rotes
app.get('/formulario',function(req,res){
    res.render("formulario");
});
app.post('/salvar-nome',function(req,res){
    newName.create({
        nome:req.body.nome
    }).then(function(){
        res.send("Novo usuario registrado!")
    }).catch(function(error){
        res.send("Error:Usuario nao registrado" + error)
    }) 
})
app.listen(port);