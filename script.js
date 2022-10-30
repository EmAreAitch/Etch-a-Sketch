let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const playGround = document.querySelector(".playGround");
const square = document.createElement("div");

let i = 1;
while (i<=256) {
    square.classList.add("square");
    playGround.append(square.cloneNode(true));
    i++;
}

box = document.querySelectorAll("div.square");

box.forEach(element => {
    element.addEventListener('mousedown', sketch)
})

box.forEach(element => {
    element.addEventListener('mouseover', sketch)
})

function sketch(e) {
    console.log(e.type);
    if (e.type === 'mouseover' && !mouseDown) {
        return;
    }
    else e.target.style.backgroundColor = 'black';
}

// function sketchy() {
//     element.style.backgroundColor = "red";
// }
// square.addEventListener('click', function sketch(){
//     square.style.backgroundColor = "red";
// })