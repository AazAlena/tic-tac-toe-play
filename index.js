let express = require(`express`);
let app = express();

let host = "localhost"
let port = 3001;
let f_data = "moves.data";


// const hbs = require('hbs');
// app.set('views', 'views');
// app.set('view engine', 'hbs');

app.use(express.static('public'));
app.use(express.json());

const fs = require("fs");

app.listen(port, function(){
    console.log(`http://${host}:${port}`)
})



app.get(`/data/send`, async function(req, res){
    console.log("app.get(`/`) запущен");
    
    // fs.appendFileSync("moves.txt", `123\n`)
    fs.readFile(f_data, "utf8", async function(error, data){ 
        console.log(data); 
        res.send(data);
    });
})


app.get(`/data/get`, async function(req, res){
    console.log("app.get(`/get/moves`) запущен");
    let coord = req.query.coord;
    let what = req.query.what;
    
    fs.appendFileSync(f_data, `${coord} ${what}\n`);
})

app.get(`/reload`, async function(req, res){
    console.log("начать заново");
    fs.writeFileSync(f_data, ` `);
})