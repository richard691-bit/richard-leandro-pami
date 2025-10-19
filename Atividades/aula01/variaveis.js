// primeira aula do joao
// java script é uma linguagem fracamente tipada!
var texto = "ola"; // aspas dduplas cotem sempre string
let texto2 = 'mundo'; // ponto e virgula é ipcional
const texto3 = "!"; // aspas simples tambem serve para string

console.log(texto, texto2 + texto3)
// vitgula concatena com espaço, enquanto o sinal de + deixa tudo junto
texto = 'hello';
let msg = `${texto}, ${texto2 } + ${texto3}`

// use a crase para chamar variaveis para concatenar
// tambem 
console.log(msg)

// texto3 = "teste"
// O exemplo acima mostra que é impossivel reatribuir um novo valor
// a uma constante

let numero = 4;
console.log(typeof numero);

// typeof identica o que é a variavel, o que tem dentro dela

let obj = {nome:"joao", idade: 37}
console.log("nome da pessoa", obj.nome, "idade", obj.idade)
// obj nome da variavel
// . para chamar uma variavel especifica dentro das chaves
console.log(typeof obj)

let arr = ['joao', 'p', 't', 'silas']
console.log(arr[0], arr[3])
console.log(typeof arr)