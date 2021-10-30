const mode = localStorage.getItem("mode");
console.log(mode);

function switchTheme() {
    if (mode === "dark") {
        localStorage.setItem("mode", "dark");
        var img = document.querySelector(".light");
        img.src = "sun-solid.svg";
        document.getElementById("switch").appendChild(img);
        document.querySelector("body").setAttribute("data-theme", "dark");
        mode = "light";
    } else {
        localStorage.setItem("mode", "light");
        var img = document.querySelector(".light");
        img.src = "moon-solid.svg";
        document.getElementById("switch").appendChild(img);
        document.querySelector("body").removeAttribute("data-theme", "dark");
        mode = "dark";
    }
    if (mode === "undefined") {
        mode = "light";
    }
}