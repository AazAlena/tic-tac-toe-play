let count = 0;
let matrix = []
for (i=0; i<9; i++){
    matrix.push(null)
}
let cont = document.querySelector(`.cont`);

function print(coord, count){
    if (count%2==1){
        coord.innerHTML = "X";

        matrix[coord.id-1] = 1;
    } else {
        coord.innerHTML = "0";

        matrix[coord.id] = 0;
    }
}

cont.addEventListener('click', function(evt){
    coord = evt.target;
    console.log(coord);
    if (matrix[coord.id] == null){
        count+=1;
        print(coord, count);
        console.log(matrix)
        if (count==9){
            alert(`ничья`);
        } else if ((matrix[1] == matrix[2] == matrix[3] == 1) /  (matrix[4] == matrix[5] == matrix[6] == 1)/  (matrix[7] == matrix[8] == matrix[9]== 1)/  (matrix[1] == matrix[4] == matrix[7]== 1)/  (matrix[2] == matrix[5] == matrix[8]==1)/  (matrix[3] == matrix[9] == matrix[6]== 1)/  (matrix[1] == matrix[5] == matrix[9]== 1)/  (matrix[3] == matrix[5] == matrix[7]== 1) ){
            alert(`Выиграли крестики`);
        } else if ((matrix[1] = matrix[2] = matrix[3] = 0) /  (matrix[4] = matrix[5] = matrix[6] = 0)/  (matrix[7] = matrix[8] = matrix[9]= 0)/  (matrix[1] = matrix[4] = matrix[7]= 0)/  (matrix[2] = matrix[5] = matrix[8]= 0)/  (matrix[3] = matrix[9] = matrix[6]= 0)/  (matrix[1] = matrix[5] = matrix[9]= 0)/  (matrix[3] = matrix[5] = matrix[7]= 0) ){
            alert(`Выиграли нолики`);
        }
    }

    }
);