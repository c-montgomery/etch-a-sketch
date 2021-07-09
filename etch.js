let container = document.querySelector('.container');

let header = document.querySelector('header');
let button = document.createElement('button');
let docHeight = document.documentElement.clientHeight;
let docWidth = document.documentElement.clientWidth;
container.style.width = '';
button.textContent = 'Clear and set size'
header.appendChild(button);
let dimension = 32;
container.style.gridTemplateColumns = 'auto '.repeat(dimension);
container.style.gridTemplateRows = 'auto '.repeat(dimension);



let dimensionSquared = dimension**2;
for (let x = 1; x <= dimensionSquared; x++){
    let box = document.createElement('div');
  
    box.style.height = (docHeight/dimension).toFixed(1) +'px';
    box.style.width = (docWidth/dimension).toFixed(1) +'px';
    box.style.borderRadius = '0px'
    
    box.style.margin = '1px';
    box.style.backgroundColor= 'lightgrey';
    // box.style.border= '1px solid red'
    box.className = `e${x}`
    box.addEventListener('mouseenter', addColor)
    box.addEventListener('mouseleave', removeColor)
    container.appendChild(box);
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