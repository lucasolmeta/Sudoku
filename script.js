import { checkValidity } from './checkValidity.js';

//init sudoku array

const sudoku = [];

// fill array with empty sub-arrays

for (let row = 0; i < 9; i++) {
  sudoku[i]=[];
  for (let col = 0; j < 9; j++) {
    sudoku[i][j]=k;
  }
}


// i loops through numbers 1-9

for(let i = 1; i < 10; i++){

    // loops through every row to put each number i into each row once

    for(let row = 0; row < 9; row++){

        //keep randomizing columns until number i can be placed somewhere in the row

        let numPlaced = false;

        while(numPlaced = false){
            var randomCol = parseInt(Math.random()*10);
            if(checkValidity(i, randomCol, sudoku)){
               sudoku[row][randomCol]=i;
               numPlaced = true;
            }
        }
    }
}

// print random sudoku

for (let row = 0; row < 9; row ++){
    for (let col = 0; col < 9; col ++){
        console.log("[ " + sudoku[row][col] + " ]");
    }

    console.log("/n");
}