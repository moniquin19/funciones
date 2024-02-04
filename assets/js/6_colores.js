let color = ""

cuadrado = document.getElementById('key');

draw = document.getElementsByClassName('section');

function colorCuadro(element, color) {
    element.style.backgroundColor = color;
}

function newDiv(color) {
    const key2 = document.getElementById('key2');
    if (key2) {
        key2.remove()
    }
    const myDiv = document.createElement("div");
    myDiv.id = 'key2';
    myDiv.className = 'cuadrado';
    myDiv.style.backgroundColor = color;
    draw[0].appendChild(myDiv);
}


document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        color = "pink"
        colorCuadro(cuadrado, color)
    } else if (event.key === 's') {
        color = "orange"
        colorCuadro(cuadrado, color)
    } else if (event.key === 'd') {
        color = "cyan"
        colorCuadro(cuadrado, color)
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'q') {
        newDiv("purple")
    } else if (event.key === 'w') {
        newDiv("gray")
    } else if (event.key === 'e') {
        newDiv("brown")
    }
});