let express = require(`express`);
let app = express();

let host = `0.0.0.0`;
let port = 3001;
let fileData = `moves.data`;
let lastMove;
let moveCount = 0;

app.use(express.static(`public`));
app.use(express.json());

const fs = require(`fs`);

app.listen(port, host, function(){
    console.log(`http://${host}:${port}`)
})

app.get(`/data/send`, async function(req, res){
    console.log(`app.get(/data/send) запущен`);
    if (moveCount == 0){
        res.send(String(moveCount));
    } else {
        res.send(lastMove);
    }
    
})

app.get(`/data/get`, async function(req, res){
    console.log(`app.get(/data/get) запущен`);
    let globalFieldCoord = req.query.globalFieldCoord;
    moveCount += 1;
    
    lastMove = String(globalFieldCoord) + " " + String(moveCount);
    fs.appendFileSync(fileData, `${globalFieldCoord} ${moveCount}\n`);
})

app.get(`/reload`, async function(req, res){
    console.log(`начать заново`);
    lastMove = null;
    moveCount = 0;
    fs.writeFileSync(fileData, ``);
})