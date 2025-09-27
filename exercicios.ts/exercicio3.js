var livroExemplo = {
    titulo: "O Mistério da Casa Verde",
    autor: "João Silva",
    anoPublicacao: 2021
};
function exibirLivro(livro) {
    console.log("T\u00EDtulo: ".concat(livro.titulo));
    console.log("Autor: ".concat(livro.autor));
    console.log("Ano de Publica\u00E7\u00E3o: ".concat(livro.anoPublicacao));
}
exibirLivro(livroExemplo);
