const content = document.getElementById('container');
content.style.height = '550px';
content.style.width = '550px';
const rbut = document.querySelector('#rainbow');
const sbut = document.querySelector('#shading');
var rain = 0;
var shading = 0;

function creategrid(side){
    content.style.gridTemplateColumns = `repeat(${side},1fr)`;
    content.style.gridTemplateRows = `repeat(${side},1fr)`;
    content.innerHTML = "";
    for(let i = 0;i<side*side; i++){
        const gridcell = document.createElement('div');
        gridcell.classList.add("gridCell");
        content.append(gridcell);
    }
    clearboard();
    draw();
}

function clearboard(){
    let grid = document.querySelectorAll('.gridCell');
    grid.forEach((div) => (div.style.backgroundColor='rgb(255,255,255)'));
}

function select(){
    let x = prompt("Enter the number of sides",'');
    if(!x){
        x = 5;
    }
    creategrid(x);
}

function rainbow(){
    rain = (rain==1)?0:1;
    
    if(rain==1){
        rbut.style.background = "#3700b3";
        sbut.style.background = "#bb86fc";
    }
    else{
        rbut.style.background = "#bb86fc";
    }
    shading = 0;
    console.log(rain);
}

function shade(){
    shading = (shading==1)?0:1;
    if(shading==1){
        sbut.style.background = "#3700b3";
        rbut.style.background = "#BB86Fc";
    }
    else{
        sbut.style.background = "#bb86fc";
    }
    rain = 0;
    console.log(shading);
}

function draw(){
    let grid = document.querySelectorAll('.gridCell');
    grid.forEach((div)=>div.addEventListener('mouseover',(e)=>{
        
        if(rain===1){
            e.target.style.backgroundColor = `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
        }
        else if(shading==1){
            let x = e.target.style.backgroundColor;
            x = x.slice(4,-1);
            let y = x.split(",");
            if(y[0]>0){
                e.target.style.backgroundColor = `rgb(${y[0]-25},${y[0]-25},${y[0]-25})`;
            }
        }
        else{
            e.target.style.backgroundColor = 'black';
        }
        
    }))
}

creategrid(5);

