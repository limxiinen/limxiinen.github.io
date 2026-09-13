function updateIcon() {
    const icon = document.getElementById("theme-icon");

    if (document.body.classList.contains("dark-mode")) {
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png";
    }
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
    updateIcon();
}

window.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
    updateIcon();
});
