import { checkValidity } from './checkValidity.mjs';

let ticks = 0;

let sudoku = [];

//init sudoku array

// makes sudoku size 9x9

for (let row = 0; row < 9; row++) {
  sudoku[row]=[];
  for (let col = 0; col < 9; col++) {
    sudoku[row][col]=0;
  }
}

// i loops through every row

for(let row = 0; row < 9; row++){

    let iterations = 0;

    // loops through every column

    for(let col = 0; col < 9; col++){

        //keep randomizing numbers until the current spot can be filled

        let numPlaced = false;
        
        while(numPlaced == false){
            
            //track number of number number generations to make sure all is working well

            var num = Math.floor(Math.random() * 9)+1
            iterations++;
            ticks++;
            
            if (iterations>80){
                for(col = 8; col >-1; col--){
                    sudoku[row][col]=0;
                }
                iterations = 0;
            }else if(checkValidity(num, row, col, sudoku)){
               sudoku[row][col]=num;
               numPlaced = true;
            }
        }
    }
}

console.log("TICKS = " + ticks);
printSudoku();

function printSudoku(){

    for (let row = 0; row < 9; row ++){
        process.stdout.write("ROW: " + row + " ");
        for (let col = 0; col < 9; col ++){
            process.stdout.write("[ " + sudoku[row][col] + " ]");
        }

        console.log("\n");
    }
}