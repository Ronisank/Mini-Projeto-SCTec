// Função onde lista todos os livros cadastrados da biblioteca

export function listarLivros(livros) {
    livros.forEach(livro => {
        livro.titulo = livro.titulo.toUpperCase();
        console.table(livro)
    });
}
// listarLivros(livros)