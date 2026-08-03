import { livros } from "../dados/dadosLivros.js";

export class Livro {
    constructor(titulo, autor, categoria, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.categoria = categoria;
        this.paginas = paginas;
        this.disponivel = true;
    }
    cadastrarLivro() {

        livros.push(this);

        console.log('Livro cadastrado com sucesso!')

    }
}