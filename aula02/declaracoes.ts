// Declarações de variaveis
let nome: string = 'joao';
let idade: number = 25;
let estaAtivo: boolean = true;

// Arrays
let numeros: number[] = [1,2,3,4,5];
let nomes: string[] = ['Ana', 'bruno', 'Carlos'];
let misto: (string | number)[] = ['Ana', 25, 'Carlos', 30];
let misto2: Array<string | number >= ['Ana', 25, 'Carlos', 30];

// tuplas
let pessoa: [string, number] = ['Maria', 30];

// Union types
let id: number | string = 123;
id = 'ABC123';

// Interfaces - são usadas para definir estruturas de objetos
interface Usuario {
    nome: string;
    idade: number;
    email?: string // o ? significa que não é obrigatorio
}

// Utilizar elas fica assim:
let novo_usuario: Usuario = {
    nome: 'Amanda',
    idade:18
};