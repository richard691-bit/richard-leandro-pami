// Atividade Chat para criar um programa que imprima a media de um aluno
// funcao que calcula a media
function calcularMedia(notas) {
    var soma = 0;
    for (var _i = 0, notas_1 = notas; _i < notas_1.length; _i++) {
        var nota = notas_1[_i];
        soma += nota;
    }
    return soma / notas.length;
}
// funcao que avalia o aluno
function avaliarAluno(nome, notas) {
    var media = calcularMedia(notas);
    if (media >= 9) {
        return "O aluno(a) ".concat(nome, " teve m\u00E9dia ").concat(media.toFixed(2), " e foi aprovado(a) com distin\u00E7\u00E3o.");
    }
    else if (media >= 7) {
        return "O aluno(a) ".concat(nome, " foi aprovado(a) com m\u00E9dia ").concat(media.toFixed(2), ".");
    }
    else if (media >= 5) {
        return "O aluno(a) ".concat(nome, " est\u00E1 de recupera\u00E7\u00E3o com m\u00E9dia ").concat(media.toFixed(2), ".");
    }
    else {
        return "O aluno(a) ".concat(nome, " foi reprovado(a) com m\u00E9dia ").concat(media.toFixed(2), ".");
    }
}
// exemplo de uso
console.log(avaliarAluno("Maria", [9, 8, 10, 9]));
console.log(avaliarAluno("João", [7, 6, 8, 7]));
console.log(avaliarAluno("Ana", [5, 4, 6, 5]));
console.log(avaliarAluno("Pedro", [3, 4, 2, 5]));
/*// Função para calcular a média
function calcularMedia(notas: number[]): number {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    return soma / notas.length;
}

// Função principal que avalia o aluno
function avaliarAluno(nome: string, notas: number[]): string {
    const media = calcularMedia(notas);

    if (media >= 7) {
        return `O aluno(a) ${nome} foi aprovado(a) com média ${media.toFixed(2)}`;
    } else {
        return `O aluno(a) ${nome} foi reprovado(a) com média ${media.toFixed(2)}`;
    }
}

// Exemplo de uso
console.log(avaliarAluno("Maria", [7, 8, 6, 9]));
console.log(avaliarAluno("João", [5, 4, 6, 5]));
*/
