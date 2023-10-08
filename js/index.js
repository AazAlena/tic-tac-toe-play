let count = 0;
let matrix = []
for (i=0; i<9; i++){
    matrix.push(NaN)
}
let cont = document.querySelector(`.cont`);
// let a = NaN;
// let b = NaN;
// let c = NaN;
// console.log("йцу", c + a + b, matrix);
        
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
    // console.log(coord);
    console.log("matrix[coord.id-1]", isNaN(matrix[coord.id-1]))
    if (isNaN(matrix[coord.id-1])){
        count=count+1;
        // console.log(count, "1", matrix)
        print(coord, count);
       
        console.log( "4", matrix);
        if ((matrix[0] + matrix[1] + matrix[2] === 0) ||  
            (matrix[3] + matrix[4] + matrix[5] === 0) ||  
            (matrix[6] + matrix[7] + matrix[8] === 0) || 
            (matrix[0] + matrix[3] + matrix[7] === 0) || 
            (matrix[1] + matrix[4] + matrix[7] === 0) || 
            (matrix[2] + matrix[8] + matrix[5] === 0) || 
            (matrix[0] + matrix[4] + matrix[8] === 0) || 
            (matrix[2] + matrix[4] + matrix[6] === 0) )
            {
                setTimeout(function(){alert("Выиграли нолики")}, 100);
            } 
        else if ((matrix[0] + matrix[1] + matrix[2] === 3) || 
                (matrix[3] + matrix[4] + matrix[5] === 3) || 
                (matrix[6] + matrix[7] + matrix[8] === 3) || 
                (matrix[0] + matrix[3] + matrix[7] === 3) || 
                (matrix[1] + matrix[4] + matrix[7] === 3) || 
                (matrix[2] + matrix[8] + matrix[5] === 3) ||  
                (matrix[0] + matrix[4] + matrix[8] === 3) ||  
                (matrix[2] + matrix[4] + matrix[6] === 3) )
                {
                    setTimeout(function(){alert("Выиграли крестики")}, 100);
                } 
        else if (count == 9){
            setTimeout(function(){alert("Ничья");}, 100);
        } 
        // console.log( "5", matrix);
        // console.log("0", "===", matrix[0] === matrix[4] === matrix[8]=== 0);
        // console.log("0", "==", matrix[0] == matrix[4] == matrix[8]== 0);
        // console.log("1", "===", matrix[0] === matrix[4] === matrix[8]=== 1);
        // console.log("1", "==", matrix[0] == matrix[4] == matrix[8]== 1);
        
        // console.log("1", "==", matrix[0] == matrix[4] == matrix[8]== 1);
        
    }

    }
);
