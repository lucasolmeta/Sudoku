export { generateSudoku }

import { initArray } from "./buildSudoku.mjs";
import { buildSudoku } from "./buildSudoku.mjs";
import { printSudoku } from "./buildSudoku.mjs";
import { buildPuzzle } from "./buildSudoku.mjs";

let solution = [];
let puzzle = [];

generateSudoku();

function generateSudoku(){

    solution = initArray(solution);
    puzzle = initArray(puzzle);

    buildSudoku(solution);

    for(let r = 0; r < 9; r++){
        for (let c = 0; c < 9; c++){
            puzzle[r][c]=solution[r][c];
        }
    }

    buildPuzzle(puzzle);

    printSudoku(puzzle);

    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let thisCell = r*9 + c;
            document.getElementById('cell' + thisCell).innerHTML = puzzle[r][c];
        }
    }
}

function checkSudoku(){
    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let thisNum= r*9+c;

            if(puzzle[r][c]==solution[r][c]){
                document.getElementById('cell' + thisNum).style.color = 'blue';
            } else {
                document.getElementById('cell' + thisNum).style.color = 'red';
            }
        }
    }
}