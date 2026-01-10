const btn = document.getElementById("toggle-dark-mode"); 

btn.addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}