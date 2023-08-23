const content = document.getElementById('container');
content.style.height = '550px';
content.style.width = '550px';
// const clear = document.getElementById('clear');
var rain = 0;


function creategrid(side){
    content.style.gridTemplateColumns = `repeat(${side},1fr)`;
    content.style.gridTemplateRows = `repeat(${side},1fr)`;
    content.innerHTML = "";
    for(let i = 0;i<side*side; i++){
        const gridcell = document.createElement('div');
        gridcell.classList.add("gridCell");
        content.append(gridcell);
    }
    draw();
}

function clearboard(){
    console.log("hello");
    let grid = document.querySelectorAll('.gridCell');
    grid.forEach((div) => (div.style.backgroundColor='white'));
}

function select(){
    let x = prompt("Enter the number of sides",'');
    creategrid(x);
}

function rainbow(){
    rain = (rain==1)?0:1;
    console.log(rain);
}

function draw(){
    let grid = document.querySelectorAll('.gridCell');
    grid.forEach((div)=>div.addEventListener('mouseover',(e)=>{
        if(rain===1){
            e.target.style.backgroundColor = `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
        }
        else{
            e.target.style.backgroundColor = 'black';
        }
        
    }))
}

creategrid(5);

// content.append(grid);

