export function realizarDevolucao(livros, titulo) {
    const livro = livros.find((item) => item.titulo.toLowerCase().includes(titulo.toLowerCase()));

    if (!livro) {
        return console.log("Livro não encontrado no acervo.");
    }
    if (livro.disponivel === false) {
        livro.disponivel = true;
        return console.log(`Devolução realizada com sucesso livro : ${livro.titulo}`);
    }
    return console.log(`Livro se encontra disponivel`);

}