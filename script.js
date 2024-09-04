//init sudoku matrix

var matrix = [],
    cols = 9;
    rows = 9;

//set matrix equal to integers

for ( var i = 0; i < cols; i++ ) {
    matrix[i] = i; 
}

console.log(matrix)