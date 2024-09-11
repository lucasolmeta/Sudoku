import { initArray } from "./functions.mjs";
import { buildSudoku } from "./functions.mjs";
import { initPuzzleUI } from "./functions.mjs";
import { buildPuzzle } from "./functions.mjs";

let solution = [];
let puzzle = [];

window['solution'] = solution;
window['puzzle'] = puzzle;

initArray(solution);
initArray(puzzle);

buildSudoku();

for(let r = 0; r < 9; r++){
    for (let c = 0; c < 9; c++){
        puzzle[r][c]=solution[r][c];
    }
}

buildPuzzle();

initPuzzleUI();