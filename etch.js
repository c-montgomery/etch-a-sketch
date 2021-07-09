let container = document.querySelector('.container');


let header = document.querySelector('header');
let button = document.createElement('button');
let docHeight = document.documentElement.clientHeight;
let docWidth = document.documentElement.clientWidth;

let containerWidth = 800;
let containerHeight = 800;
container.style.width = containerWidth + 'px';
container.style.height = containerHeight + 'px';
button.textContent = 'Clear and set size'
button.addEventListener('click', createGrid);
header.appendChild(button);
let dimension = 50;
let boxHeight = `${(containerHeight/dimension).toFixed(0)}px `;
let boxWidth = `${(containerHeight/dimension).toFixed(0)}px `;
container.style.gridTemplateColumns = boxHeight.repeat(dimension);
container.style.gridTemplateRows = boxHeight.repeat(dimension);
container.style.gap = '2px';


let dimensionSquared = dimension**2;
for (let x = 1; x <= dimensionSquared; x++){
    let box = document.createElement('div');

    box.style.height = boxHeight;
    box.style.width = boxWidth;
    box.style.borderRadius = '3px'

    box.style.backgroundColor= 'lightgrey';
    // box.style.border= '1px solid red'
    box.className = `e${x}`
    box.addEventListener('mouseenter', addColor)
    box.addEventListener('mouseleave', removeColor)
    container.appendChild(box);
}
function createGrid(){
    removeChildren(container);
    dimension = prompt('what\'s the dimension?');
    dimensionSquared = dimension**2;
    let boxHeight = `${(containerHeight/dimension).toFixed(0)}px `;
    let boxWidth = `${(containerHeight/dimension).toFixed(0)}px `;
    container.style.gridTemplateColumns = boxHeight.repeat(dimension);
    container.style.gridTemplateRows = boxHeight.repeat(dimension);
    container.style.gap = '2px';
    for (let x = 1; x <= dimensionSquared; x++){
        let box = document.createElement('div');
    
        box.style.height = boxHeight;
        box.style.width = boxWidth;
        box.style.borderRadius = '3px'
    
        box.style.backgroundColor= 'lightgrey';
        // box.style.border= '1px solid red'
        box.className = `e${x}`
        box.addEventListener('mouseenter', addColor)
        box.addEventListener('mouseleave', removeColor)
        container.appendChild(box);
    }
}

function addColor(e){
let div  = document.querySelector(`.${e.target.className}`);
div.textContent ='';
div.style.backgroundColor = 'black';

}

function removeColor(e){
    let div  = document.querySelector(`.${e.target.className}`);
    div.textContent ='';
    div.style.backgroundColor = 'grey';
}

function setSize(){
    dimension = prompt('how many squares per side? (less than 100)')
    createGrid();
}


function removeChildren(parent){
    while (parent.lastChild){
        parent.removeChild(parent.lastChild)
    }
}
