interface Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
}

const livroExemplo: Livro = {
  titulo: "O Mistério da Casa Verde",
  autor: "João Silva",
  anoPublicacao: 2021
};

function exibirLivro(livro: Livro): void {
  console.log(`Título: ${livro.titulo}`);
  console.log(`Autor: ${livro.autor}`);
  console.log(`Ano de Publicação: ${livro.anoPublicacao}`);
}

exibirLivro(livroExemplo);