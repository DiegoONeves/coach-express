const express = require("express");

let app = express();


// app.get('/', function (req, res) {
//     res.send('Olá!!!');
// });

// app.use(function (req, res, next) {
//     console.log('Olhaaaa', Date.now());
//     next();
//   });

var birds = require('./birds');
app.use('/birds', birds);


//First middleware before response is sent
app.use(function(req, res, next){
   console.log("Start");
   next();
});

//Route handler
// app.get('/', function(req, res, next){
//    res.send("Middle");
//    next();
// });

app.use('/', function(req, res){
   console.log('End');
});


app.listen(3000, function () {
    console.log("Servidor rodando na porta 3000");
});
