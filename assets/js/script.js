const ele = document.getElementById("ele1")


function pintar(e, color = 'green') {
    e.style.backgroundColor = 'yellow'
}
ele.addEventListener("click", function(event) {
    pintar(event.target, "yellow")
});