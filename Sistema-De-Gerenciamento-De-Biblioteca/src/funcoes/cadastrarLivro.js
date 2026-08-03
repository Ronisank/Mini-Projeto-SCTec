import { livros } from "../dados/dadosLivros.js";
import { Livro } from "../Livro/livro.js";

export function cadastrarLivro(titulo, autor, categoria, paginas) {
    const novoLivro = new Livro(titulo, autor, categoria, paginas)

    livros.push(novoLivro);

    console.log('Livro cadastrado com sucesso!')

}