let n1 = 2;
let n2 = 5;
// Pascal Case = NomeVariavel (sempre primeira letra da palavra maiuscula)
// camel Case  = nomeVariavel (primeira letra da palavra é)
// minuscula e o restante comeca com maiuscula)
// kabab Case = nome-variavel (tanto faz se comeca com maiucula ou 
// minuscula, o importante pe separar por hifem)
// snake Case = nome_variavel (tanto faz se comeca com maiuscula ou minuscula, o 
// importante e separar por underline)

function Soma(){
    console.log(5 + 12);
}
Soma();
// funcao simples que nao recebe parametros
function SomaComParametros(v1, v2){
    let resultado = v1 + v2;
    return resultado;
}
console.log(SomaComParametros(n1,n2));
console.log(SomaComParametros(10,20));
