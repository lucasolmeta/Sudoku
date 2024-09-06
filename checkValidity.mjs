export { checkValidity };

function checkValidity(num, row, col, sudoku){
    
    //check if the given number is already in the given column

    for (let r = 0; r < 9; r++){
        if(sudoku[r][col] == num){
            return false;
        }
    }
    
    // check if the given number is already in the given row

    for (let c = 0; c < col; c++){
        if(sudoku[row][c] == num){
            return false;
        }
    }

    return true;
}