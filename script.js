document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
  
    // Gerar 100 esferas em posições aleatórias dentro do banner
    for (let i = 0; i < 100; i++) {
      const esfera = document.createElement("div");
      esfera.classList.add("esfera");
      esfera.style.top = Math.random() * 50 + "vh"; // Posição vertical aleatória dentro do banner
      esfera.style.left = Math.random() * 100 + "%"; // Posição horizontal aleatória dentro do banner
      container.appendChild(esfera);
    }
  });

  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }

  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }