// Usado metodos para retirar espaços vazios, passar strings para minusculas e se um elemento existe dentro de um array.

function buscarLivro(pesquisaLivro, titulo) {
    const livroBusca = titulo.trim().toLowerCase();
    const livroEncontrado = pesquisaLivro.filter(item => item.titulo.toLowerCase().includes(livroBusca));

    if (livroEncontrado.length > 0) {
        return console.log(livroEncontrado);
    } else {
        return console.log('Livro não encontrado')
    }

}
// buscarLivro(livros, 'html')