import { checkValidity } from './checkValidity.mjs';

//init sudoku array

const sudoku = [];

// fill array with empty sub-arrays

for (let row = 0; row < 9; row++) {
  sudoku[row]=[];
  for (let col = 0; col < 9; col++) {
    sudoku[row][col]=[];
  }
}


// i loops through numbers 1-9

for(let i = 1; i < 10; i++){

    // loops through every row to put each number i into each row once

    for(let row = 0; row < 9; row++){

        //keep randomizing columns until number i can be placed somewhere in the row

        let numPlaced = false;

        while(numPlaced == false){
            var randomCol = parseInt(Math.random()*10);
            if(checkValidity(i, row, randomCol, sudoku)){
               sudoku[row][randomCol]=i;
               numPlaced = true;
            }
        }
    }
}

// print sudoku

for (let row = 0; row < 9; row ++){
    for (let col = 0; col < 9; col ++){
        process.stdout.write("[ " + sudoku[row][col] + " ]");
    }

    console.log("\n");
}


// THEYRE WRITING OBVER EACH OTHER