axios.defaults.headers.post[`Content-Type`] = `application/json`;
getInfo()

let timerId = setInterval(() => getInfo(), 1000);
// setTimeout(() => {clearInterval(getInfo());}, 2000);

async function sendInfo(nextX, nextY) {
    await axios.get(`/data/get`, {
        params:{
            globalFieldCoord: String(globalFieldX) + String(globalFieldY) + String(smallFieldX) + String(smallFieldY),
            nextXY: String(nextX) + String(nextY)
        }
    });
    console.log(`отправлено на back js(в файл):`, String(globalFieldX) + String(globalFieldY) + String(smallFieldX) + String(smallFieldY), ` `, moveCount);
}

async function getInfo() {
    let response = await axios(`/data/send`);
    let lastMove = response.data;
    console.log(`пришел на front js:`, lastMove);
    // отрисовать картинку
    if (lastMove == 0){
        moveCount = 0;
    } else {
        moveCount = (lastMove[5]);
        
        bigX = lastMove[0];
        bigY = lastMove[1];
        smallX = lastMove[2];
        smallY =  lastMove[3];
        globalFieldX = bigX;
        globalFieldY = bigY;
        smallFieldX = smallX;
        smallFieldY = smallY;
        
    
        globalCoord = String(globalFieldX)+String(globalFieldY)+String(smallFieldX)+String(smallFieldY);
    
        if (moveCount != 1){
            DeleteColorful(nextX, nextY);
        }
        // проверка: если ставлю в правильное поле или это первый ход, то делать чтл, иначе игнорировать
        
        printPicture(globalCoord, moveCount, bigX, bigY, smallX, smallY);
        testWin(matrix, bigX, bigY)
        nextX = smallX;
        nextY = smallY;
        
        
        Colorful(smallX, smallY);

    }
};

// let moveCount = 0;
let matrix = [];
let nextX = NaN;
let nextY = NaN;

let globalFieldX = NaN;
let globalFieldY = NaN;
let smallFieldX = NaN;
let smallFieldY = NaN;

// создание матрицы
function createMatrix(){
    for (i=0; i<3; i++){
        let list1 = [];
        for (j=0; j<3; j++){
            let list2 = [];
            for (t=0; t<3; t++){
                let list3 = [];
                for (q=0; q<3; q++){
                    list3.push([NaN, NaN, NaN]);
                }
                list2.push(list3);
            }
            list1.push(list2);
        }
        matrix.push(list1);
    }
}

createMatrix();

function printPicture(globalCoord, moveCount, bigX, bigY, smallX, smallY){
    console.log(`globalCoord: `, globalCoord);
    let coord = document.getElementById(`${globalCoord}`);
    console.log(`right coord:`, coord);
    if (moveCount%2 == 1){
        coord.innerHTML = `<img src="assets/cross.png" class="sing" alt="">`;
        matrix[bigX][bigY][smallX][smallY] = 1;
    } else {
        coord.innerHTML = `<img src="assets/round.png" class="sing" alt="">`;
        matrix[bigX][bigY][smallX][smallY] = 0;
    }
}

// функция проверки выигрыша
function testWin(matrix, x, y){
    if ((matrix[x][y][0][0] + matrix[x][y][0][1] + matrix[x][y][0][2] === 0) ||  
        (matrix[x][y][1][0] + matrix[x][y][1][1] + matrix[x][y][1][2] === 0) ||  
        (matrix[x][y][2][0] + matrix[x][y][2][1] + matrix[x][y][2][2] === 0) || 
        (matrix[x][y][0][0] + matrix[x][y][1][0] + matrix[x][y][2][0] === 0) || 
        (matrix[x][y][0][1] + matrix[x][y][1][1] + matrix[x][y][2][1] === 0) || 
        (matrix[x][y][0][2] + matrix[x][y][1][2] + matrix[x][y][2][2] === 0) || 
        (matrix[x][y][0][0] + matrix[x][y][1][1] + matrix[x][y][2][2] === 0) || 
        (matrix[x][y][0][2] + matrix[x][y][1][1] + matrix[x][y][2][0] === 0) ){
            setTimeout(function(){alert(`Выиграли нолики`)}, 100);
        } 
    else if(
        (matrix[x][y][0][0] + matrix[x][y][0][1] + matrix[x][y][0][2] === 3) ||  
        (matrix[x][y][1][0] + matrix[x][y][1][1] + matrix[x][y][1][2] === 3) ||  
        (matrix[x][y][2][0] + matrix[x][y][2][1] + matrix[x][y][2][2] === 3) || 
        (matrix[x][y][0][0] + matrix[x][y][1][0] + matrix[x][y][2][0] === 3) || 
        (matrix[x][y][0][1] + matrix[x][y][1][1] + matrix[x][y][2][1] === 3) || 
        (matrix[x][y][0][2] + matrix[x][y][1][2] + matrix[x][y][2][2] === 3) || 
        (matrix[x][y][0][0] + matrix[x][y][1][1] + matrix[x][y][2][2] === 3) || 
        (matrix[x][y][0][2] + matrix[x][y][1][1] + matrix[x][y][2][0] === 3)){
            setTimeout(function(){alert(`Выиграли крестики`)}, 100);
        } 
}
// функция клика на поле
function Click(event, bigX, bigY, smallX, smallY){
    
    globalFieldX = bigX;
    globalFieldY = bigY;
    smallFieldX = smallX;
    smallFieldY = smallY;

    globalCoord = String(globalFieldX)+String(globalFieldY)+String(smallFieldX)+String(smallFieldY);

    if (moveCount != 0){
        DeleteColorful(nextX, nextY);
    }
    // проверка: если ставлю в правильное поле или это первый ход, то делать чтл, иначе игнорировать
    if((isNaN(matrix[bigX][bigY][smallX][smallY]) && (bigX == nextX) && (bigY == nextY)) || moveCount == 0){
        moveCount ++;
        printPicture(globalCoord, moveCount, bigX, bigY, smallX, smallY);
        testWin(matrix, bigX, bigY)
        nextX = smallX;
        nextY = smallY;

        sendInfo(nextX, nextY);
    }
    
    Colorful(smallX, smallY);
}

// функция добавляет подсветку элементу, в котором нужно поставить знак
function Colorful(x, y){
    let xy = String(x)+String(y);
    object = document.getElementById(`${xy}`);
    object.classList.add(`this`);
}

function DeleteColorful(pastX, pastY){
    let pastCoordXY = String(pastX)+String(pastY);
    object = document.getElementById(`${pastCoordXY}`);
    object.classList.remove(`this`);
}

// при клике на кнопку again перезагрузка страницы
async function again(){
    location.reload();
    await axios.get(`/reload`);
}
