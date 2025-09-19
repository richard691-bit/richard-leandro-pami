// Funcao que retorna tipos
function saudacao(nome) {
    return "ola, ".concat(nome, "!");
}
console.log(saudacao('leandro'));
// utulizando a interface usuario fica assim:
function exibirUsuario(usuario) {
    console.log("nome: ".concat(usuario.nome));
    console.log("idade: ".concat(usuario.idade));
}
exibirUsuario({ nome: 'marcos', idade: 22 });
// Exemplo de uma funcao que retorna arrays e tem parametros opcionais
function listaNomes(nome) {
    nome.forEach(function (nome) { return console.log(nome); });
}
listaNomes(['ana', 'bruno', 'carlos']);
