let express = require(`express`);
let app = express();

let host = "localhost"
let port = 3001;

app.listen(port, function(){
    console.log(`http://${host}:${port}`)
})

app.use(express.static('public'));

app.get('/', async function (req, res) {
    res.send();
    res.render(`index`);
})
