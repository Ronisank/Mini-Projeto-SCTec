import { livros } from "./dadosLivros.js";

export function realizarEmprestimo(livros, titulo) {
    const livro = livros.find((item) => item.titulo.toLowerCase().includes(titulo.toLowerCase()));

    if (!livro) {
        return "Livro não encontrado no acervo."
    }
    if (livro.disponivel) {
        livro.disponivel = false;
        return `Empréstimo realizado com sucesso: ${livro.titulo}`
    }
    return `O livro ${livro.titulo} não está disponivel`

}
// console.log(livros,"\n");
console.log(realizarEmprestimo(livros, 'html'));
console.log(livros,"\n");
