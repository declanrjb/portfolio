var web_clicker = document.querySelector("#web");
var print_clicker = document.querySelector("#print");

var web_version = document.querySelector("#web-version");
var print_version = document.querySelector(".clip");

web_clicker.onclick = function() {
    web_clicker.style.color = "black";
    print_clicker.style.color = "#91a6ff";
    web_version.style.display = "block";
    print_version.style.display = "none";
}

print_clicker.onclick = function() {
    web_clicker.style.color = "#91a6ff";
    print_clicker.style.color = "black";
    web_version.style.display = "none";
    print_version.style.display = "block";
}