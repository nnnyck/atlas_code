function showContent(content) {
    // Oculta todos os conteúdos
    document.getElementById("htmlContent").style.display = "none";
    document.getElementById("cssContent").style.display = "none";
    document.getElementById("jsContent").style.display = "none";
    document.getElementById("phpContent").style.display = "none";
    
    // Mostra o conteúdo correspondente ao botão clicado
    document.getElementById(content + "Content").style.display = "block";
}
