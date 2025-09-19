var cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Salvador'];
function listarCidades(cidadesParaListar) {
    cidadesParaListar.forEach(function (cidade) {
        console.log(cidade);
    });
}
listarCidades(cidades);
