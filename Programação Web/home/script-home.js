// Lista inicial de livros com id e título
let livros = [
    { id: 1, titulo: "Dom Casmurro" },
    { id: 2, titulo: "A Revolução dos Bichos" },
    { id: 3, titulo: "O Pequeno Príncipe" }
];

// Função que exibe os livros na tela
function exibirLivros(lista) {
    const container = document.getElementById("listaLivros"); // Pega o elemento onde os livros serão mostrados
    container.innerHTML = ""; // Limpa o conteúdo atual

    if (lista.length === 0) {
        container.innerHTML = "Nenhum livro encontrado."; // Mostra mensagem se não houver livros
        return;
    }

    // Para cada livro da lista, cria um bloco com o título e botão de remover
    lista.forEach(livro => {
        const div = document.createElement("div"); // Cria uma div
        div.textContent = livro.titulo + " "; // Mostra o título do livro

        const btn = document.createElement("button"); // Cria o botão
        btn.textContent = "Remover"; // Texto do botão
        btn.onclick = () => removerLivro(livro.id); // Quando clicado, chama a função para remover

        div.appendChild(btn); // Adiciona o botão dentro da div
        container.appendChild(div); // Adiciona a div no container da lista
    });
}

// Função para adicionar um novo livro à lista
function adicionarLivro() {
    const tituloInput = document.getElementById("novoTitulo"); // Campo de entrada do título
    const titulo = tituloInput.value.trim(); // Remove espaços do início/fim

    if (titulo === "") return; // Não adiciona se o campo estiver vazio

    const novoLivro = {
        id: Date.now(), // Gera um ID único baseado no tempo
        titulo: titulo
    };

    livros.push(novoLivro); // Adiciona o novo livro à lista
    tituloInput.value = ""; // Limpa o campo de texto
    exibirLivros(livros); // Atualiza a lista exibida
}

// Função para remover um livro pelo ID
function removerLivro(id) {
    livros = livros.filter(livro => livro.id !== id); // Remove o livro com o ID informado
    exibirLivros(livros); // Atualiza a lista exibida
}

// Função para filtrar os livros pelo título digitado
function filtrarLivros() {
    const termo = document.getElementById("filtro").value.trim().toLowerCase(); // Pega o texto do filtro e coloca em minúsculo
    const filtrados = livros.filter(livro => livro.titulo.toLowerCase().includes(termo)); // Filtra os livros com base no termo
    exibirLivros(filtrados); // Mostra os livros filtrados
}

// Mostra todos os livros quando a página carrega
exibirLivros(livros);
