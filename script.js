function toggleMode() {

    //pegando o html
    const html = document.documentElement
    
    //mudar o switch quando clicar:
    html.classList.toggle("light")

    //pegar a tag img:
    const img = document.querySelector("#profile img")

     //substituir a imagem:
    if (html.classList.contains('light')) {
        //se tiver light mode, adicionar a imagem light:
    img.setAttribute("src", "./Assets/avatar-light.png") 
    } else {
        //se tiver dark mode, manter a imagem normal
        img.setAttribute("src", "./Assets/avatar.png")
    } 

        //mexendo no "alt"
    if (html.classList.contains("light")) {
        img.setAttribute("alt", "Foto de perfil light mode" )
    } else {
        img.setAttribute("alt", "Foto de perfil dark mode")
    }
}