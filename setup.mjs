import { initArray } from "./functions.mjs";
import { resizeScreen } from "./functions.mjs";

window.addEventListener('resize', resizeScreen);

let solution = [];
let puzzle = [];

const outerBox = document.getElementById('outerBox');

window['solution'] = solution;
window['puzzle'] = puzzle;

for (let i = 0; i < 9; i++) {
    const innerBox = document.createElement('div');

    innerBox.className = 'innerBox';
    innerBox.id = 'innerbox' + i;

    outerBox.appendChild(innerBox);

    for (let j = 0; j < 9; j++){
        const cell = document.createElement('div');
        const numInput = document.createElement('input');

        const numInputSize = window.innerHeight/12+2;
        const fontSize = numInputSize*0.7;
        const innerBoxSize = numInputSize*3+6;
        const outerBoxSize = innerBoxSize*3;
                    
        let cellNum = Math.floor(i/3)*18+Math.floor(j/3)*6+i*3+j;
    
        cell.className = 'cell';
        cell.id = 'cell' + cellNum;
                    
        numInput.type = 'text';
        numInput.maxLength = '1';

        numInput.className = 'numInput';

        numInput.id = 'input' + cellNum;

        numInput.value = "";

        innerBox.appendChild(cell);
        cell.appendChild(numInput);
    }
}

resizeScreen();

initArray(solution);
initArray(puzzle);