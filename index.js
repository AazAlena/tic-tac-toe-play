let express = require(`express`);
let app = express();

let host = `0.0.0.0`;
let port = 3001;
let fileData = `moves.data`;
let lastMove;

app.use(express.static(`public`));
app.use(express.json());

const fs = require(`fs`);

app.listen(port, host, function(){
    console.log(`http://${host}:${port}`)
})

app.get(`/data/send`, async function(req, res){
    console.log(`app.get(/data/send) запущен`);
    res.send(lastMove);
    // fs.appendFileSync("moves.txt", `123\n`)
    // fs.readFile(fileData, `utf8`, async function(error, data){ 
    //     console.log(data); 
    //     res.send(data);
    // });
})

app.get(`/data/get`, async function(req, res){
    console.log(`app.get(/data/get) запущен`);
    let globalFieldCoord = req.query.globalFieldCoord;
    let moveCount = req.query.moveCount;
    
    lastMove = String(globalFieldCoord) + " " + String(moveCount);
    fs.appendFileSync(fileData, `${globalFieldCoord} ${moveCount}\n`);
})

app.get(`/reload`, async function(req, res){
    console.log(`начать заново`);
    fs.writeFileSync(fileData, ``);
})