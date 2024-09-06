import { buildSudoku } from "./buildSudoku.mjs";
import { printSudoku } from "./buildSudoku.mjs";

let sudoku = [];
buildSudoku(sudoku);

printSudoku(sudoku);