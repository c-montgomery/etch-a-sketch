let container = document.querySelector('.container')

let dimension = 16;
let dimensionCubed = 256;
for (let x = 1; x <= 256; x++){
    let box = document.createElement('div');
    box.textContent = x;
    box.className = x
    box.addEventListener('mouseenter', addColor)
    // box.addEventListener('mouseleave', removeColor)
    container.appendChild(box);
}
let fuck = document.querySelector('.4');
fuck.textContent = 'fuck';
function addColor(e){
    console.log(e);
let div  = document.querySelector(`div.${e.target.className}`);
div.textContent ='fuck';

}

function removeColor(e){
    pass;
}