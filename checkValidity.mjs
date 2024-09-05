export { checkValidity };

function checkValidity(num, row, randomCol, sudoku){
    
    //check if cell is already taken by another number

    if(sudoku[row][randomCol]!=[]){
        return false;
    }

    //check if the given number is already in a given column

    for (let row = 0; row < 9; row++){
        if(sudoku[row][randomCol]==num){
            return false;
        }
    }

    return true;
}