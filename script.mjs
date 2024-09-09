window.generateSudoku = generateSudoku;
window.checkSudoku = checkSudoku;

export { generateSudoku }

import { initArray } from "./buildSudoku.mjs";
import { buildSudoku } from "./buildSudoku.mjs";
import { resetArray } from "./buildSudoku.mjs";
import { printSudoku } from "./buildSudoku.mjs";
import { buildPuzzle } from "./buildSudoku.mjs";

let solution = [];
let puzzle = [];

initArray(solution);
initArray(puzzle);

function generateSudoku(){

    resetArray(solution);
    resetArray(puzzle);

    buildSudoku(solution);

    for(let r = 0; r < 9; r++){
        for (let c = 0; c < 9; c++){
            puzzle[r][c]=solution[r][c];
        }
    }

    buildPuzzle(puzzle);

    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let thisNum = r*9 + c;
            
            const input = document.getElementById('input' + thisNum);
            const cell = document.getElementById('cell' + thisNum);
            
            if(puzzle[r][c]==0){
                input.value="";
                cell.style.backgroundColor = ('rgb(225,225,225)');
            } else {
                input.value = puzzle[r][c];
                cell.style.backgroundColor = 'rgb(190,190,190)';
            }

            input.style.color = 'black';
        }
    }
}

function checkSudoku(){
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let thisNum= r*9+c;

            const input = document.getElementById('input' + thisNum);

            puzzle[r][c]=input.value;

            if(puzzle[r][c]==solution[r][c]){
                input.style.color = 'blue';
            } else if (puzzle[r][c]==''){
                input.style.color = 'black';
            } else {
                input.style.color = 'red';
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
        alert("Congratulations, You Solved The Sudoku!");
    }
}