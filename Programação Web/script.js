        document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMsg = document.getElementById("error");

            if (username === "admin" && password === "123") {
                window.location.href = "pagina-principal.html"; // COM extensão
            } else {
                errorMsg.textContent = "Usuário ou senha inválidos.";
            }
        });