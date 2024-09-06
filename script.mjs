import { initArray } from "./buildSudoku.mjs";
import { buildSudoku } from "./buildSudoku.mjs";
import { printSudoku } from "./buildSudoku.mjs";
import { buildPuzzle } from "./buildSudoku.mjs";

let solution = [];
let puzzle = [];

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