var marginSlider = document.getElementById("marginSlider");
var marginVal = document.getElementById("marginVal");

var rizzSlider = document.getElementById("rizzSlider");
var rizzVal = document.getElementById("rizzVal");

marginVal.innerHTML = marginSlider.value;

marginSlider.oninput = function() {
    marginVal.innerHTML = this.value;
}

//something's wrong; idk if it's the html or the js but the value isn't showing!