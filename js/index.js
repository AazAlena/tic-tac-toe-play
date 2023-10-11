let count = 0;
let matrix = [];

// создание матрицы
// for (i=0; i<3; i++){
//     let list = [];
    
//     for (j=0; j<3; j++){
//         list.push(NaN)
//     }
//     matrix.push(list);
// }

for (i=0; i<3; i++){
    let list1 = [];
    for (j=0; j<3; j++){
        let list2 = [];
        for (t=0; t<3; t++){
            let list3 = [];
            for (q=0; q<3; q++){
                let list4 = [NaN, NaN, NaN];
                list3.push(list4);
            }
            list2.push(list3);
        }
        list1.push(list2);
    }
    matrix.push(list1);
}

// функция печати к\н и добавления их в matrix 
function print(coord, count, x, y, z, a){
    if (count%2 == 1){
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
    else if (count == 9){
        setTimeout(function(){alert("Ничья");}, 100);
    } 
}
// функция клика на поле
function Click(event,x,y,z,a){
    console.log(x,y,z,a)
    coord = event.target;
    if (isNaN(matrix[x][y][z][a])){
        count = count + 1;
        print(coord, count, x, y, z, a);
        test_win(matrix,x,y)
    }
}
// при клике на кнопку again перезагрузка страницы
function again(){
    location.reload()
}