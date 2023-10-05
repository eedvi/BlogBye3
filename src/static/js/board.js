const cnv = document.getElementById('main-canvas');
const cnt = cnv.getContext('2d');
let initialX;
let initialY;
let drawing = false;
let currentColor = "#000"; // Color inicial

const draw = (cursorX, cursorY) => {
    if (!drawing) return;
    cnt.beginPath();
    cnt.moveTo(initialX, initialY);
    cnt.lineWidth = 10;
    cnt.strokeStyle = currentColor;
    cnt.lineCap = "round";
    cnt.lineJoin = "round";
    cnt.lineTo(cursorX, cursorY);
    cnt.stroke();

    initialX = cursorX;
    initialY = cursorY;
};

const changeColor = (newColor) => {
    currentColor = newColor;
};

const toggleEraser = () => {
    if (currentColor !== "#fff") {
        currentColor = "#fff"; // Cambia el color entre blanco y negro para simular un borrador
    } else {
        currentColor = "#000"; 
    }
};

const mouseDown = (evt) => {
    drawing = true;
    initialX = evt.offsetX;
    initialY = evt.offsetY;
    draw(initialX, initialY);
};

const mouseMove = (evt) => {
    if (!drawing) return;
    draw(evt.offsetX, evt.offsetY);
};

const mouseUp = () => {
    drawing = false;
};

cnv.addEventListener("mousedown", mouseDown);
cnv.addEventListener("mousemove", mouseMove);
cnv.addEventListener("mouseup", mouseUp);

//  color del trazo
document.getElementById("red-btn").addEventListener("click", () => {
    changeColor("#ff0000"); 
});

document.getElementById("blue-btn").addEventListener("click", () => {
    changeColor("#0000ff"); 
});


document.getElementById("erase-btn").addEventListener("click", () => {
    toggleEraser();
});
