// Função onde lista todos os livros cadstrados da biblioteca

export function listarLivros(livros) {
    livros.forEach(livro => console.table(livro));
}
