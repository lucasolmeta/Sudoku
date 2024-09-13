window.checkSudoku = checkSudoku;
window.generateRequest = generateRequest;
window.confirmButtonPressed = confirmButtonPressed;
window.cancelButtonPressed = cancelButtonPressed;

export { initArray }
export { buildSudoku }
export { buildPuzzle }
export { initPuzzleUI }
export { checkSudoku }
export { resizeScreen }

let initGeneration = true;

function initArray (array){
    
    for (let row = 0; row < 9; row++) {
        array[row]=[];
        for (let col = 0; col < 9; col++) {
            array[row][col]=0;
        }
    }

    return array;
}

function buildSudoku (){

    initArray(solution);
    initArray(puzzle);

    let ticks = 0;

    for(let row = 0; row < 9; row++){

        let iterations = 0;

        for(let col = 0; col < 9; col++){
            let numPlaced = false;
        
            while(!numPlaced){
                var num = Math.floor(Math.random() * 9)+1
                iterations++;
                ticks++;
            
                if (ticks%10000==0){
                    for(row = 8; row > 0; row--){
                        for(col = 8; col > 0; col--){
                            solution[row][col]=0;
                        }
                    }
                } else if (iterations>80){
                    for(col = 8; col >-1; col--){
                        solution[row][col]=0;
                    }
                    iterations = 0;
                } else if(checkValidity(num, row, col)){
                   solution[row][col]=num;
                   numPlaced = true;
                }
            }
        }
    }

    for(let r = 0; r < 9; r++){
        for (let c = 0; c < 9; c++){
            puzzle[r][c]=solution[r][c];
        }
    }

    buildPuzzle();

    initPuzzleUI();
}

function buildPuzzle(){

    for(let i = 0; i < 40; i++){
        let numRemoved = false;

        while(!numRemoved){
            var row = Math.floor(Math.random() * 9);
            var col = Math.floor(Math.random() * 9);

            if(puzzle[row][col]!=0){
                puzzle[row][col]=0;     
                numRemoved = true;      
            }
        }
    }
}

function initPuzzleUI(){
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

    if(initGeneration){
        return;
    }

    for(let r = 0; r < 9; r++){
        for(let c = 0; c < 9; c++){
            let thisNum= r*9+c;

            const input = document.getElementById('input' + thisNum);

            puzzle[r][c]=input.value;

            if(puzzle[r][c]==solution[r][c]){
                input.style.color = 'blue';
                input.style.webkitTextFillColor = 'blue';
            } else if (puzzle[r][c]==''){
                input.style.color = 'black';
                input.style.webkitTextFillColor = 'black';
            } else {
                input.style.color = 'red';
                input.style.webkitTextFillColor = 'red';
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

    if(solved && !initGeneration){
        alert("Congratulations, you solved the sudoku!");
    }
}

function checkValidity(num, row, col){
    
    for (let r = 0; r < 9; r++){
        if(solution[r][col] == num){
            return false;
        }
    }
    
    for (let c = 0; c < col; c++){
        if(solution[row][c] == num){
            return false;
        }
    }

    let boxRow = Math.floor(row/3);
    let boxCol = Math.floor(col/3);

    for(let r = 3*boxRow; r<3*boxRow+3; r++){
        for(let c = 3*boxCol; c<3*boxCol+3; c++){
            if(solution[r][c]== num){
                return false;
            }
        }
    }

    return true;
}

function generateRequest(){

    if(initGeneration){
        buildSudoku();
        initGeneration=false;
        return;
    }
    
    let alert = document.getElementById("alert");

    alert.style.display = 'flex';
}

function confirmButtonPressed (){

    buildSudoku();

    let alert = document.getElementById("alert");

    alert.style.display = 'none';
}

function cancelButtonPressed (){

    let alert = document.getElementById("alert");

    alert.style.display = 'none';
}

function resizeScreen (){
    let scalingMultiplier = 1;

    if(window.innerWidth/window.innerHeight < 1){
        scalingMultiplier = window.innerWidth/window.innerHeight;
    }

    const logoHeight = (window.innerHeight/18)*scalingMultiplier;
    const numInputSize = (window.innerHeight/12.5+2)*scalingMultiplier;
    const fontSize = numInputSize*0.7;
    const innerBoxSize = numInputSize*3+6;
    const outerBoxSize = innerBoxSize*3;
    const sudokuFunctionButtonsHeight = (window.innerHeight/11)*scalingMultiplier;
    const alertMenuHeight = (window.innerHeight*0.3)*scalingMultiplier;
    const alertMenuTop = (window.innerHeight*0.4)*scalingMultiplier;
    const menuButtonsHeight = (sudokuFunctionButtonsHeight*0.65)*scalingMultiplier;

    const logo = document.getElementById('logo');
    const numInputs = document.querySelectorAll('.numInput');
    const cells = document.querySelectorAll('.cell');
    const innerBoxes = document.querySelectorAll('.innerBox');
    const outerBox = document.getElementById('outerBox');
    const sudokuFunctionButtons = document.querySelectorAll('.sudokuFunctionButtons');
    const alertMenu = document.getElementById('alert');
    const menuButtons = document.querySelectorAll('.menuButton');
    
    if(window.innerHeight<1050){
        logo.style.height = logoHeight + 'px';
        logo.style.width = 'auto';
        logo.style.marginTop = logoHeight/4 + 'px'
        logo.style.marginBottom = logo.style.marginTop;
    } else {
        logo.style.height = '70px';
        logo.style.width = 'auto';
        logo.style.marginTop =  '18px'
        logo.style.marginBottom = '18px';
    }

    numInputs.forEach(numInput => {
        numInput.style.height = numInputSize + 'px';
        numInput.style.width = numInputSize + 'px';
        numInput.style.lineHeight = numInputSize + 'px';
        numInput.style.fontSize = fontSize + 'px';
    });

    cells.forEach(cell => {
        cell.style.height = numInputSize + 'px';
        cell.style.width = numInputSize + 'px';
    });
    
    innerBoxes.forEach(innerBox => {
        innerBox.style.height = innerBoxSize + 'px';
        innerBox.style.width = innerBoxSize + 'px';
        innerBox.style.borderWidth = '3px';
    });

    outerBox.style.height = outerBoxSize + 'px';
    outerBox.style.width = outerBoxSize + 'px';

    sudokuFunctionButtons.forEach(sudokuFunctionButton =>{
        sudokuFunctionButton.style.height = sudokuFunctionButtonsHeight + 'px';
        sudokuFunctionButton.style.width = sudokuFunctionButtonsHeight*2.5 + 'px';
        sudokuFunctionButton.style.margin = sudokuFunctionButtonsHeight*0.6 + 'px';
        sudokuFunctionButton.style.marginTop = sudokuFunctionButtonsHeight*0.3 + 'px';
        sudokuFunctionButton.style.fontSize = sudokuFunctionButtonsHeight*0.35 + 'px';
        sudokuFunctionButton.style.borderWidth = sudokuFunctionButtonsHeight/10 + 'px';
    });

    alertMenu.style.height = alertMenuHeight + 'px';
    alertMenu.style.width = alertMenuHeight*1.6 + 'px';
    alertMenu.style.fontSize = alertMenuHeight/8.3 + 'px';
    alertMenu.style.top = alertMenuTop + 'px';

    menuButtons.forEach(menuButton =>{
        menuButton.style.height = menuButtonsHeight + 'px';
        menuButton.style.width = menuButtonsHeight*2.5 + 'px';
        menuButton.style.marginLeft = menuButtonsHeight*0.4 + 'px';
        menuButton.style.marginRight = menuButtonsHeight*0.4 + 'px';
        menuButton.style.fontSize = menuButtonsHeight*0.54 + 'px';
        menuButton.style.lineHeight = menuButtonsHeight + 'px';
    });
  }