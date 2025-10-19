"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Funcao que retorna tipos
function saudacao(nome) {
    return `ola, ${nome}!`;
}
console.log(saudacao('leandro'));
// utulizando a interface usuario fica assim:
function exibirUsuario(usuario) {
    console.log(`nome: ${usuario.nome}`);
    console.log(`idade: ${usuario.idade}`);
}
exibirUsuario({ nome: 'marcos', idade: 22 });
// Exemplo de uma funcao que retorna arrays e tem parametros opcionais
function listaNomes(nome) {
    nome.forEach(nome => console.log(nome));
}
listaNomes(['ana', 'bruno', 'carlos']);
//# sourceMappingURL=funcoes.js.map