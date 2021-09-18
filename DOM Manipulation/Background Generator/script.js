var css_property = document.querySelector("h3");
var c1 = document.querySelector(".colour1");
var c2 = document.querySelector(".colour2");
var body_bg = document.getElementById("gradient");

function setGradient() {
    body_bg.style.background =
        "linear-gradient(to right,"
        + c1.value
        + ", "
        + c2.value
        + ")";

    css_property.textContent = body_bg.style.background + ";";
}

c1.addEventListener("input", setGradient);

c2.addEventListener("input", setGradient);