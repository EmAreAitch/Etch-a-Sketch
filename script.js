let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let gridValue = 16;

let eraserMode = false;
let rainbowMode = false;
let shadingMode = false;
let lightenMode = false;
let currentColor = 'black';
let gridLines = false;

const playGround = document.querySelector(".playGround");
const square = document.createElement("div");
const grid = document.querySelector(".settings p");
const eraser = document.querySelector(".eraser"); 
const rainbow = document.querySelector(".rainbow");
const shading = document.querySelector(".shading");
const lighten = document.querySelector(".lighten");

square.classList.add("square");
square.style.width = 500/gridValue + 'px';
square.style.height = 500/gridValue + 'px';
square.style.filter = 'brightness(1)';
square.style.boxSizing = 'border-box';

grid.textContent = `Grid Size: ${gridValue} x ${gridValue}`;

function gridMaker(val) {

    for (i=1;i<=val;i++) {
        playGround.append(square.cloneNode(true));
    }
}

gridMaker(gridValue**2);

box = document.querySelectorAll("div.square");

function eventer() {
    box = document.querySelectorAll("div.square");

    box.forEach(element => {
    element.addEventListener('mousedown', sketch)
    })

    box.forEach(element => {
    element.addEventListener('mouseover', sketch)
    })
}

function sketch(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return;
    }
    
    else if (eraserMode===true) {
        e.target.style.backgroundColor = '';
    }

    else if (lightenMode===true) {
        e.target.style.filter = `brightness(${parseFloat(e.target.style.filter.slice(11,-1))+0.05})`;
    }

    else if (shadingMode===true) {
        e.target.style.filter = `brightness(${parseFloat(e.target.style.filter.slice(11,-1))-0.05})`;
    }

    else if (rainbowMode===true) {
        r = parseInt(Math.random() * 255);
        g = parseInt(Math.random() * 255);
        b = parseInt(Math.random() * 255);
        e.target.style.backgroundColor = `rgb(${r},${g},${b})`     
    }
    
    else {
        e.target.style.backgroundColor = currentColor;
        e.target.style.filter = 'brightness(1)';
    }
}

function reset() {
    if (confirm('Are you sure you want to reset?')) {
    box.forEach(element => {
        element.style.backgroundColor='';
    })}
}

function _eraser() {
    if (eraserMode===false) {
        eraserMode=true;
        eraser.textContent = 'Eraser(X): ON';
    }
    else if (eraserMode===true) {
        eraserMode=false;
        eraser.textContent = 'Eraser(X): OFF';
    }
}

function incGrid() {
    if (gridValue < 128) {
    box.forEach(n => n.remove());
    gridValue *= 2;
    grid.textContent = `Grid Size: ${gridValue} x ${gridValue}`;
    // reset();
    square.style.width = 500/gridValue + 'px';
    square.style.height = 500/gridValue + 'px';
    gridMaker(gridValue**2);
    eventer();
    }
    else alert('Cannot go beyond this!!')
}

function decGrid() {
    if (gridValue > 1) {
    box.forEach(n => n.remove());
    gridValue /= 2;
    grid.textContent = `Grid Size: ${gridValue} x ${gridValue}`;
    // reset();
    square.style.width = 500/gridValue + 'px';
    square.style.height = 500/gridValue + 'px';
    gridMaker(gridValue**2);
    eventer();
    }
    else alert('Cannot go beyond this!!')
}

eventer();

function _rainbow() {
    if (rainbowMode===false) {
        rainbowMode=true;
        rainbow.textContent = 'Rainbow: ON';
    }
    else if (rainbowMode===true) {
        rainbowMode=false;
        rainbow.textContent = 'Rainbow: OFF';
    }
}

function _shading() {
    if (shadingMode===false) {
        shadingMode=true;
        shading.textContent = 'Shading: ON';
    }
    else if (shadingMode===true) {
        shadingMode=false;
        shading.textContent = 'Shading: OFF';
    }
}

function _lighten() {
    if (lightenMode===false) {
        lightenMode=true;
        lighten.textContent = 'Lighten: ON';
    }
    else if (lightenMode===true) {
        lightenMode=false;
        lighten.textContent = 'Lighten: OFF';
    }
}

function _currentColor() {
    newColor = prompt('Enter color name or hexcode or rgb(r,g,b)');
    if (!!newColor) {
        currentColor = newColor;
    }
}

function _bgcolor() {
    bgcolor = prompt('Enter background color name or hexcode or rgb(r,g,b) or rainbow');
    if (!!bgcolor) {
        if (bgcolor == 'rainbow') {
            box.forEach(element => {
                r = parseInt(Math.random() * 255);
                g = parseInt(Math.random() * 255);
                b = parseInt(Math.random() * 255);
                element.style.backgroundColor = `rgb(${r},${g},${b})` 
            })
        }

        else playGround.style.backgroundColor = bgcolor;
    }
}

function fill() {
    fillColor = prompt('Enter color name or hexcode or rgb(r,g,b) or rainbow');
    if (!!fillColor) {
        if (fillColor == 'rainbow') {
            box.forEach(element => {
                r = parseInt(Math.random() * 255);
                g = parseInt(Math.random() * 255);
                b = parseInt(Math.random() * 255);
                element.style.backgroundColor = `rgb(${r},${g},${b})` 
            })
        }
        else box.forEach(element => {
            element.style.backgroundColor = fillColor;
        })
}
}

function _gridLines() {
    if (!gridLines) {
        gridLines = !gridLines;
        box.forEach(element => {
            element.style.border = '1px solid black';
        })
    }

    else if (!!gridLines) {
        gridLines = !gridLines;
        box.forEach(element => {
            element.style.border = '';
        })
    }
}