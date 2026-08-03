// Usado metodos para retirar espaços vazios, passar strings para minusculas e se um elemento existe dentro de um array. Usado um operador Spread.
export function buscarLivro(pesquisaLivro, titulo) {
    const livroBusca = titulo.trim().toUpperCase();
    const resultado = [];

    for (let i = 0; i < pesquisaLivro.length; i++) {
        const item = pesquisaLivro[i];

        if (item.titulo.toUpperCase().includes(livroBusca)) {

            resultado.push(
                {
                    ...item,
                    titulo: item.titulo.toUpperCase()
                });
        }
    }


    if (resultado.length > 0) {
        return resultado;
    } else {
        return 'Livro não encontrado';
    }

}
// console.log(buscarLivro(livros, 'frances'));