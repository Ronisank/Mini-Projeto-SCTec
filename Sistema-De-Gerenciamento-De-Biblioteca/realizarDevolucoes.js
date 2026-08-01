import { livros } from "./dadosLivros.js";

export function devolucaoEmprestimo(livros, titulo) {
    const livro = livros.find((item) => item.titulo.toLowerCase().includes(titulo.toLowerCase()));

    if (!livro) {
        return "Livro não encontrado no acervo."
    }
    if (livro.disponivel === false) {
        livro.disponivel = true;
        return `Devolução realizada com sucesso: ${livro.titulo}`
    }
    return `Livro disponivel`

}
// console.log(livros,"\n");
console.log(devolucaoEmprestimo(livros, 'html'));
// console.log(livros,"\n");