let count = 0;
let matrix = []
for (i=0; i<9; i++){
    matrix.push(null)
}
let cont = document.querySelector(`.cont`);

function print(coord, count){
    if (count%2 == 1){
        coord.innerHTML = "X";
        matrix[coord.id-1] = 1;
        // console.log( "2", matrix);
    } else {
        coord.innerHTML = "0";
        matrix[coord.id-1] = 0;
    }
    // console.log( "3", matrix);
}

cont.addEventListener('click', function(evt){
    coord = evt.target;
    console.log(coord);
    
    if (matrix[coord.id-1] == null){
        count=count+1;
        console.log(count, "1", matrix)
        print(coord, count);
        console.log( "4", matrix);
        if (count==9){
            alert(`ничья`);
        } else if ((matrix[0] === matrix[1] === matrix[2] === 0) /  (matrix[3] === matrix[4] === matrix[5] === 0)/  (matrix[6] === matrix[7] === matrix[8]=== 0)/  (matrix[0] === matrix[3] === matrix[7]=== 0)/  (matrix[1] ===matrix[4] === matrix[7]===0)/  (matrix[2] === matrix[8] === matrix[5]=== 0)/  (matrix[0] === matrix[4] === matrix[8]===0)/  (matrix[2] === matrix[4] === matrix[6]=== 0) ){
            alert(`Выиграли нолики`);
        } else if ((matrix[0] === matrix[1] === matrix[2] === 1) /  (matrix[3] === matrix[4] === matrix[5] === 1)/  (matrix[6] === matrix[7] ===matrix[8]=== 1)/  (matrix[0] === matrix[3] === matrix[7]=== 1)/  (matrix[1] === matrix[4] === matrix[7]===1)/  (matrix[2] === matrix[8] === matrix[5]=== 1)/  (matrix[0] === matrix[4] === matrix[8]=== 1)/  (matrix[2] === matrix[4] === matrix[6]=== 1) ){
            alert(`Выиграли крестики`);
            // console.log( "6.2", matrix);
        } else {
            console.log("подолжить")
        };
        console.log( "5", matrix);
        console.log("0", "===", matrix[0] === matrix[4] === matrix[8]=== 0);
        console.log("0", "==", matrix[0] == matrix[4] == matrix[8]== 0);
        console.log("1", "===", matrix[0] === matrix[4] === matrix[8]=== 1);
        console.log("1", "==", matrix[0] == matrix[4] == matrix[8]== 1);
        
    }

    }
);
