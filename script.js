//init sudoku array

const sudoku = [];

// fill array with empty sub-arrays

for (let i = 0; i < 9; i++) {
  sudoku[i]=[];
  for (let j = 0; j < 9; j++) {
    sudoku[i][j]=[];
    for(let k = 0; k < 10; k++){
        sudoku[i][j][k]=k;
    }
  }
}

var random = parseInt(Math.random()*10);
console.log("Random: " + random);