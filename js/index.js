let MoveCount = 0;
let matrix = [];
let NextX = NaN;
let NextY = NaN;
// создание матрицы
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

// функция печати к\н и добавления их в matrix 
function print(coord, MoveCount, x, y, z, a){
    if (MoveCount%2 == 1){
        coord.innerHTML = `<img src="assets/cross.png" class="sing" alt="">`;
        matrix[x][y][z][a] = 1;
    } else {
        coord.innerHTML = `<img src="assets/round.png" class="sing" alt="">`;
        matrix[x][y][z][a] = 0;
    }
}
// функция проверки выигрыша
function test_win(matrix,x,y){
    if ((matrix[x][y][0][0] + matrix[x][y][0][1] + matrix[x][y][0][2] === 0) ||  
        (matrix[x][y][1][0] + matrix[x][y][1][1] + matrix[x][y][1][2] === 0) ||  
        (matrix[x][y][2][0] + matrix[x][y][2][1] + matrix[x][y][2][2] === 0) || 
        (matrix[x][y][0][0] + matrix[x][y][1][0] + matrix[x][y][2][0] === 0) || 
        (matrix[x][y][0][1] + matrix[x][y][1][1] + matrix[x][y][2][1] === 0) || 
        (matrix[x][y][0][2] + matrix[x][y][1][2] + matrix[x][y][2][2] === 0) || 
        (matrix[x][y][0][0] + matrix[x][y][1][1] + matrix[x][y][2][2] === 0) || 
        (matrix[x][y][0][2] + matrix[x][y][1][1] + matrix[x][y][2][0] === 0) )
        {
            setTimeout(function(){alert("Выиграли нолики")}, 100);
        } 
    else if((matrix[x][y][0][0] + matrix[x][y][0][1] + matrix[x][y][0][2] === 3) ||  
            (matrix[x][y][1][0] + matrix[x][y][1][1] + matrix[x][y][1][2] === 3) ||  
            (matrix[x][y][2][0] + matrix[x][y][2][1] + matrix[x][y][2][2] === 3) || 
            (matrix[x][y][0][0] + matrix[x][y][1][0] + matrix[x][y][2][0] === 3) || 
            (matrix[x][y][0][1] + matrix[x][y][1][1] + matrix[x][y][2][1] === 3) || 
            (matrix[x][y][0][2] + matrix[x][y][1][2] + matrix[x][y][2][2] === 3) || 
            (matrix[x][y][0][0] + matrix[x][y][1][1] + matrix[x][y][2][2] === 3) || 
            (matrix[x][y][0][2] + matrix[x][y][1][1] + matrix[x][y][2][0] === 3))
        {
            setTimeout(function(){alert("Выиграли крестики")}, 100);
        }
}
// функция клика на поле
function Click(event,big_x,big_y,small_x,small_y){
    console.log(big_x,big_y,small_x,small_y)
    coord = event.target;
    if (MoveCount!=0){
        DeleteColorful(NextX, NextY);
    }
    // проверка: если ставлю в правильное поле или это первый ход, то делать чтл, иначе игнорировать
    if((isNaN(matrix[big_x][big_y][small_x][small_y]) && (big_x == NextX) && (big_y == NextY)) || MoveCount==0){
        MoveCount ++;
        print(coord, MoveCount, big_x, big_y, small_x, small_y);
        test_win(matrix, big_x, big_y)
        NextX = small_x;
        NextY = small_y;
    }
    
    Colorful(small_x, small_y);
}
// функция добавляет подсветку элементу, в котором нужно поставить знак
function Colorful(x, y){
    let xy = String(x)+String(y);
    object = document.getElementById(`${xy}`);
    object.classList.add("this");
}

function DeleteColorful(past_x, past_y){
    let xy = String(past_x)+String(past_y);
    object = document.getElementById(`${xy}`);
    object.classList.remove("this");
}

// при клике на кнопку again перезагрузка страницы
function again(){
    location.reload()
}