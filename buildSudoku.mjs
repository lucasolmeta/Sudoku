export { initArray }
export { resetArray }
export { buildSudoku }
export { buildPuzzle }
export { printSudoku }

function initArray (array){

    // makes sudoku size 9x9
    
    for (let row = 0; row < 9; row++) {
        array[row]=[];
        for (let col = 0; col < 9; col++) {
            array[row][col]=0;
        }
    }

    return array;
}

function resetArray (array){
    for(let r = 0; r < 9; r++){
        for (let c = 0; c < 9; c++){
            array[r][c]=0;
        }
    }
}

function buildSudoku (sudoku){

    let ticks = 0;

    // i loops through every row

    for(let row = 0; row < 9; row++){

        let iterations = 0;

        // loops through every column

        for(let col = 0; col < 9; col++){

            //keep randomizing numbers until the current spot can be filled

            let numPlaced = false;
        
            while(!numPlaced){
            
                //track number of number number generations to make sure all is working well

                var num = Math.floor(Math.random() * 9)+1
                iterations++;
                ticks++;
            
                if (ticks%10000==0){
                    for(row = 8; row > 0; row--){
                        for(col = 8; col > 0; col--){
                            sudoku[row][col]=0;
                        }
                    }
                } else if (iterations>80){
                    for(col = 8; col >-1; col--){
                        sudoku[row][col]=0;
                    }
                    iterations = 0;
                } else if(checkValidity(num, row, col, sudoku)){
                   sudoku[row][col]=num;
                   numPlaced = true;
                }
            }
        }
    }
}

function buildPuzzle(sudoku){
    for(let i = 0; i < 40; i++){
        let numRemoved = false;

        while(!numRemoved){
            var row = Math.floor(Math.random() * 9);
            var col = Math.floor(Math.random() * 9);

            if(sudoku[row][col]!=0){
                sudoku[row][col]=0;     
                numRemoved = true;      
            }
        }
    }
}

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

    let boxRow = Math.floor(row/3);
    let boxCol = Math.floor(col/3);

    for(let r = 3*boxRow; r<3*boxRow+3; r++){
        for(let c = 3*boxCol; c<3*boxCol+3; c++){
            if(sudoku[r][c]== num){
                return false;
            }
        }
    }

    return true;
}

function printSudoku(sudoku){

    for (let row = 0; row < 9; row ++){
        console.log("ROW: " + row + " ");
        for (let col = 0; col < 9; col ++){
            console.log("[ " + sudoku[row][col] + " ]");
        }

        console.log("\n");
    }
}