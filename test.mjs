let solution = []

let ticks = 0;

initArray(test);
buildSudoku(test);

printArray(test);

function initArray (array){
    
    for (let row = 0; row < 9; row++) {
        array[row]=[];
        for (let col = 0; col < 9; col++) {
            array[row][col]=0;
        }
    }

    return array;
}

function buildSudoku (test){
    for(let row = 0; row < 9; row++){

        let numsAvailable = [1,2,3,4,5,6,7,8,9];
        let iterations = 0;

        for(let col = 0; col < 9; col++){

            let numPlaced = false;
    
            while(numPlaced == false){

                let i = Math.floor(Math.random() * numsAvailable.length);

                iterations++;

                if (iterations > 300){
                    for(row = 8; row > 0; row--){
                        for(col = 8; col > 0; col--){
                            solution[row][col]=0;
                        }
                    }

                    iterations = 0;
                    numsAvailable = [1,2,3,4,5,6,7,8,9];

                } else if (iterations%100 == 0){
                    for (col = 8; col > 0; col--){
                        solution[row][col]=0;
                    }

                    numsAvailable = [1,2,3,4,5,6,7,8,9];

                } else if (checkValidity(numsAvailable[i], row, col)){

                    solution[row][col] = numsAvailable[i];

                    numsAvailable.splice(i,1);
                    numPlaced = true;
                }
            }
        }
    }
}

function checkValidity(num, row, col){
    
    for (let r = 0; r < 9; r++){
        if(test[r][col] == num){
            return false;
        }
    }

    let boxRow = Math.floor(row/3);
    let boxCol = Math.floor(col/3);

    for(let r = 3*boxRow; r<3*boxRow+3; r++){
        for(let c = 3*boxCol; c<3*boxCol+3; c++){
            if(test[r][c] == num){
                return false;
            }
        }
    }

    return true;
}

function printArray(array){
    console.log("");
    for(let r = 0; r < 9; r++){
        
    process.stdout.write("\nRow: " + r);

        for(let c = 0; c < 9; c++){
            process.stdout.write(" [ " + array[r][c] + " ]");
        }
    }
}