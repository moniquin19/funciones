var cuadrado_1 = document.getElementById("1");
cuadrado_1.style.backgroundColor = 'blue'

var cuadrado_2 = document.getElementById("2");
cuadrado_2.style.backgroundColor = 'red'

var cuadrado_3 = document.getElementById("3");
cuadrado_3.style.backgroundColor = 'green'

var cuadrado_4 = document.getElementById("4");
cuadrado_4.style.backgroundColor = 'yellow'

function pintar(e) {
    e.style.backgroundColor = 'black'
}
cuadrado_1.addEventListener("click", function(event) {
    pintar(event.target, )
})
cuadrado_2.addEventListener("click", function(event) {
    pintar(event.target, )
})
cuadrado_3.addEventListener("click", function(event) {
    pintar(event.target, )
})
cuadrado_4.addEventListener("click", function(event) {
    pintar(event.target, )
});