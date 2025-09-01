// Seleciona o botão/ícone responsável por alternar o tema
const toggleTheme = document.getElementById("toggleTheme");
const rootHtml =document.documentElement



function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");
    // Se o tema atual for "dark", muda para "light"
    // Caso contrário, volta para "dark"
    if(currentTheme ==="dark") rootHtml.setAttribute("data-Theme", "light")
    else rootHtml.setAttribute("data-theme", "dark")
}


// Adiciona um evento de clique no botão de alternar tema
// Quando clicado, chama a função changeTheme()
toggleTheme.addEventListener("click", changeTheme);