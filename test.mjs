import { buildSudoku } from "./functions.mjs";

buildSudoku();

checkSudoku();

function checkSudoku(){

    if(initGeneration){
        return;
    }

    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let thisNum= r*9+c;

            const input = document.getElementById('input' + thisNum);

            if(checkCellSolved(input.value,r,c)){
                input.style.color = 'blue';
                input.style.webkitTextFillColor = 'blue';
            } else if (puzzle[r][c]==''){
                input.style.color = 'black';
                input.style.webkitTextFillColor = 'black';
            } else {
                input.style.color = 'red';
                input.style.webkitTextFillColor = 'red';
            }
        }
    }

    let solved = true;

    for(let r = 0; r < 9; r++){
        for (let c = 0; c < 9; c++){
            if(puzzle[r][c]!=solution[r][c]){
                solved = false;
            }
        }
    }

    if(solved){
        alert("Congratulations, you solved the sudoku!");
    }
}

function checkCellSolved(num, row, col){
    
    for (let r = 0; r < 9; r++){
        if(solution[r][col] == num){
            return false;
        }
    }
    
    for (let c = 0; c < 9; c++){
        if(solution[row][c] == num){
            return false;
        }
    }

    let boxRow = Math.floor(row/3);
    let boxCol = Math.floor(col/3);

    for(let r = 3*boxRow; r<3*boxRow+3; r++){
        for(let c = 3*boxCol; c<3*boxCol+3; c++){
            if(solution[r][c]== num){
                return false;
            }
        }
    }

    return true;
}