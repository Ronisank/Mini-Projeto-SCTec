import { Livro } from "../livro.js";
import { livros } from "./dadosLivros.js";

function cadastrarLivro(titulo, autor, categoria, paginas) {
    const novoLivro = new Livro(titulo, autor, categoria, paginas)

    livros.push(novoLivro);

    console.log('Livro cadastrado com sucesso!')

}
cadastrarLivro("React", "Jonh Doe", "Programação", 280);
cadastrarLivro("C# - .NET", "Jane Doe", "Programação", 380);
console.table(livros);