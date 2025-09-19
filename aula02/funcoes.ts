// Funcao que retorna tipos
function saudacao(nome: string): string {
    return `ola, ${nome}!`;
}

console.log(saudacao('leandro'));

// interface para objeto Usuario
interface Usuario {
    nome:string;
    idade:number;
    email?:string;
}

// utulizando a interface usuario fica assim:

function exibirUsuario(usuario:Usuario): void{
    console.log(`nome: ${usuario.nome}`);
    console.log(`idade: ${usuario.idade}`);
}

exibirUsuario({nome: 'marcos', idade: 22});

// Exemplo de uma funcao que retorna arrays e tem parametros opcionais
function listaNomes(nome: string[]): void{
    nome.forEach(nome => console.log(nome));
}

listaNomes(['ana', 'bruno', 'carlos']);
