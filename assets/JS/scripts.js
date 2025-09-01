const toggleTheme = document.getElementById("toggleTheme");
const rootHtml =document.documentElement



function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");

    if(currentTheme ==="dark") rootHtml.setAttribute("data-Theme", "light")
    else rootHtml.setAttribute("data-theme", "dark")
}



toggleTheme.addEventListener("click", changeTheme);