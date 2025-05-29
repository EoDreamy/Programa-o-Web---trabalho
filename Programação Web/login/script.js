document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    // Impede o envio padrão do formulário (evita recarregar a página)

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error");
    // Pega os valores digitados nos campos e a área para mostrar erro

    if (username === "admin" && password === "123") {
        window.location.href ="../home/pagina-principal.html"; 
        // Se login estiver correto, redireciona para a página principal
    } else {
        errorMsg.textContent = "Usuário ou senha inválidos.";
        // Se estiver errado, exibe mensagem de erro na tela
    }
});
