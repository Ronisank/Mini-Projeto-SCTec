
export function realizarEmprestimo(livros, titulo) {
    const livro = livros.find((item) => item.titulo.toLowerCase().includes(titulo.toLowerCase()));

    if (!livro) {
        return console.log("Livro não encontrado no acervo.");
    }
    if (livro.disponivel) {
        livro.disponivel = false;
        return console.log(`Empréstimo realizado com sucesso do livro: ${livro.titulo}`);
    }
    return console.log(`O livro ${livro.titulo} não está disponivel`);

}
// console.log(livros,"\n");
// console.log(realizarEmprestimo(livros, 'html'));
// console.log(livros,"\n");
