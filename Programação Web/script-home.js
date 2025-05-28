        let livros = [
            { id: 1, titulo: "Dom Casmurro" },
            { id: 2, titulo: "A Revolução dos Bichos" },
            { id: 3, titulo: "O Pequeno Príncipe" }
        ];

        function exibirLivros(lista) {
            const container = document.getElementById("listaLivros");
            container.innerHTML = "";

            if (lista.length === 0) {
                container.innerHTML = "Nenhum livro encontrado.";
                return;
            }

            lista.forEach(livro => {
                const div = document.createElement("div");
                div.textContent = livro.titulo + " ";
                
                const btn = document.createElement("button");
                btn.textContent = "Remover";
                btn.onclick = () => removerLivro(livro.id);
                
                div.appendChild(btn);
                container.appendChild(div);
            });
        }

        function adicionarLivro() {
            const tituloInput = document.getElementById("novoTitulo");
            const titulo = tituloInput.value.trim();
            if (titulo === "") return;

            const novoLivro = {
                id: Date.now(),
                titulo: titulo
            };

            livros.push(novoLivro);
            tituloInput.value = "";
            exibirLivros(livros);
        }

        function removerLivro(id) {
            livros = livros.filter(livro => livro.id !== id);
            exibirLivros(livros);
        }

        function filtrarLivros() {
            const termo = document.getElementById("filtro").value.trim().toLowerCase();
            const filtrados = livros.filter(livro => livro.titulo.toLowerCase().includes(termo));
            exibirLivros(filtrados);
        }

        // Exibe todos os livros ao carregar
        exibirLivros(livros);