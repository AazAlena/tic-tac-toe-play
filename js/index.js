let count = 0;
let matrix = [];

// создание матрицы
for (i=0; i<3; i++){
    let list = [];
    
    for (j=0; j<3; j++){
        list.push(NaN)
    }
    matrix.push(list);
}
// функция печати к\н и добавления их в matrix 
function print(coord, count, x, y){
    if (count%2 == 1){
        coord.innerHTML = `<img src="assets/cross.png" class="sing" alt="">`;
        matrix[x][y] = 1;
    } else {
        coord.innerHTML = `<img src="assets/round.png" class="sing" alt="">`;
        matrix[x][y] = 0;
    }
}
// функция проверки выигрыша
function test_win(matrix){
    if ((matrix[0][0] + matrix[0][1] + matrix[0][2] === 0) ||  
        (matrix[1][0] + matrix[1][1] + matrix[1][2] === 0) ||  
        (matrix[2][0] + matrix[2][1] + matrix[2][2] === 0) || 
        (matrix[0][0] + matrix[1][0] + matrix[2][0] === 0) || 
        (matrix[0][1] + matrix[1][1] + matrix[2][1] === 0) || 
        (matrix[0][2] + matrix[1][2] + matrix[2][2] === 0) || 
        (matrix[0][0] + matrix[1][1] + matrix[2][2] === 0) || 
        (matrix[0][2] + matrix[1][1] + matrix[2][0] === 0) )
        {
            setTimeout(function(){alert("Выиграли нолики")}, 100);
        } 
    else if ((matrix[0][0] + matrix[0][1] + matrix[0][2] === 3) ||  
            (matrix[1][0] + matrix[1][1] + matrix[1][2] === 3) ||  
            (matrix[2][0] + matrix[2][1] + matrix[2][2] === 3) || 
            (matrix[0][0] + matrix[1][0] + matrix[2][0] === 3) || 
            (matrix[0][1] + matrix[1][1] + matrix[2][1] === 3) || 
            (matrix[0][2] + matrix[1][2] + matrix[2][2] === 3) || 
            (matrix[0][0] + matrix[1][1] + matrix[2][2] === 3) || 
            (matrix[0][2] + matrix[1][1] + matrix[2][0] === 3))
        {
            setTimeout(function(){alert("Выиграли крестики")}, 100);
        } 
    else if (count == 9){
        setTimeout(function(){alert("Ничья");}, 100);
    } 
}
// функция клика на поле
function Click(event,x,y){
    console.log(x ,y)
    coord = event.target;
    if (isNaN(matrix[x][y])){
        count = count + 1;
        print(coord, count, x, y);
        test_win(matrix)
    }
}
// при клике на кнопку again перезагрузка страницы
function again(){
    location.reload()
}