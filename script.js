const content = document.getElementById('container');
content.style.gridTemplateColumns = 'repeat(5,1fr)';
for(let i = 0;i<25; i++){
    const gridcell = document.createElement('div');
    gridcell.classList.add("gridCell");
    content.append(gridcell);
}

// content.append(grid);

