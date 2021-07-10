

let container = document.querySelector('.container');

let header = document.querySelector('header');
let headerOptions = document.createElement('div');
// headerOptions.style.display = 'flex';
header.appendChild(headerOptions);
console.log(headerOptions);
let button = document.createElement('button');
let optionDarken = document.createElement('button');
let optionRandom = document.createElement('button');


let docHeight = document.documentElement.clientHeight;
let docWidth = document.documentElement.clientWidth;
console.log(docHeight +'docheigth');

let containerWidth = docHeight/1.9;
let containerHeight = docHeight/1.9;
headerOptions.style.width = containerWidth;
container.style.width = containerWidth + 'px';
container.style.height = containerHeight + 'px';

button.textContent = 'Clear and set size';
optionDarken.textContent = 'Erode';
optionRandom.textContent = 'Random color'
optionRandom.addEventListener('click', toggleRandom)
optionDarken.addEventListener('click', toggleDarken)
button.addEventListener('click', getDimension);

let random = false;
let darken = false;

headerOptions.appendChild(button);
headerOptions.appendChild(optionDarken);
headerOptions.appendChild(optionRandom);

let dimension = 50;
let boxHeight = `${(containerHeight/dimension)}px `;
let boxWidth = `${(containerHeight/dimension)}px `;


function getDimension(){
    dimension = prompt('how many per side?')
    random = false;
    darken = false;
    createGrid(dimension)
}
function toggleRandom(){
    
    darken = false;
    random = true;
    console.log(dimension)
    createGrid(dimension);
}

function toggleDarken(){
    random = false;
    darken = true;
    createGrid(dimension)
}

function createGrid(dimension = 50){
    
    console.log(docHeight+ 'docheight in function');
    removeChildren(container);
    docHeight = document.documentElement.clientHeight;
    docWidth = document.documentElement.clientWidth;

    containerWidth = docHeight/1.9;
    containerHeight = docHeight/1.9;

    container.style.width = containerWidth + 'px';
    container.style.height = containerHeight + 'px';


    
    dimensionSquared = dimension**2;

    boxHeight = `${(containerHeight/dimension)}px `;
    boxWidth = `${(containerHeight/dimension)}px `;
        

    container.style.gridTemplateColumns = boxHeight.repeat(dimension);
    container.style.gridTemplateRows = boxHeight.repeat(dimension);
    container.style.gap = '0px';
    fillGrid();

function fillGrid(){   
    for (let x = 1; x <= dimensionSquared; x++){
        let box = document.createElement('div');

        
        box.style.height = boxHeight;
        box.style.width = boxWidth;
        box.style.borderRadius = '5%';
    
        box.style.backgroundColor= 'white';
        // box.style.border= '1px solid red'
        box.id = `e${x}`;
        box.addEventListener('mouseenter', addColor);
        box.addEventListener('mouseleave', darkenColor);
        container.appendChild(box);
    }
}
}

function addColor(e){
    
    let div  = document.querySelector(`#${e.target.id}`);
    div.style.backgroundColor = 'black';

}
function turnBlack(e){

}
function getColor(){
    return (Math.random() * 255).toFixed(0);
}

function darkenColor(e){
    console.log('in darken color function')
    console.log(random)
    if(random == false && darken == false){
        let div = document.querySelector(`#${e.target.id}`)
        div.style.background = 'rgb(0,0,0)'
    } else if (darken == true){
        let div  = document.querySelector(`#${e.target.id}`);
        switch (div.className){
            case '10':
            div.className = '30';
            div.style.backgroundColor = 'rgba(200,200,200,1)';
            break;
            case '30':
            div.className = '40';
            div.style.backgroundColor = 'rgba(200,200,200,.7)';
            break;
            case '40':
            div.className = '50';
            div.style.backgroundColor = 'rgba(175,175,175,.6)';
            break;
            case '50':
            div.className = '60';
            div.style.backgroundColor = 'rgba(100,100,100,.5)';
            break;
            case '60':
            div.className = '70';
            div.style.backgroundColor = 'rgba(75,75,75,.4)';
            break;
            case '70':
            div.className = '80';
            div.style.backgroundColor = 'rgba(50,50,50,.25)';
            break;
            case '80':
            div.className = '90';
            div.style.backgroundColor = 'rgba(50,50,50,.1)';
            break;
            case '90':
            div.style.backgroundColor = 'rgba(0,0,0,0)';
            break;
            default :
            div.className = '10';
            div.style.backgroundColor = 'rgba(225,225,225,1)';  
            break;    
        }
    } else {
        console.log(getColor())
        let div = document.querySelector(`#${e.target.id}`);
        div.style.backgroundColor = `rgb(${getColor()},${getColor()},${getColor()})`
    }
   
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
createGrid();