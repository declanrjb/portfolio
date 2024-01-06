var web_clicker = document.querySelector("#web");
var print_clicker = document.querySelector("#print");

var web_version = document.querySelector("#web-version");
var print_versions = document.querySelectorAll(".clip");

console.log(print_versions);

web_clicker.onclick = function() {
    web_clicker.style.color = "black";
    print_clicker.style.color = "#91a6ff";
    web_version.style.display = "block";
    for (var i=0; i < print_versions.length; i++) {
        print_versions[i].style.display = "none";
    }
}

print_clicker.onclick = function() {
    web_clicker.style.color = "#91a6ff";
    print_clicker.style.color = "black";
    web_version.style.display = "none";
    for (var i=0; i < print_versions.length; i++) {
        print_versions[i].style.display = "block";
    }
}