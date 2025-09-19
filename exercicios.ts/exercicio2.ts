
const cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Salvador'];

function listarCidades(cidadesParaListar: string[]): void {
  cidadesParaListar.forEach((cidade) => {
    console.log(cidade);
  });
}

listarCidades(cidades);