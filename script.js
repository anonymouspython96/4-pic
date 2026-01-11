// Hoisting 
const btnTheme = document.getElementById("toggle-theme")
const favicon = document.querySelector('link[rel="icon"]')

// events
btnTheme.addEventListener("click", toggleTheme)

// functions
function toggleTheme() {
    
    const isDark = document.body.classList.toggle("toggle-theme")

    favicon.href = isDark ? "./Logos/white_logo.png" : "./Logos/black_logo.png"

}