import promptSync from 'prompt-sync'; // como está setado para type: modules, no console quebrava por causa do require.
const prompt = promptSync();


import { livros } from './src/dados/dadosLivros.js';
import { buscarLivro } from './src/funcoes/buscarLivro.js';
import { exibirEstatisticas } from './src/funcoes/exibirEstatisticas.js';
import { listarDisponiveis } from './src/funcoes/listarDisponiveis.js';
import { listarLivros } from './src/funcoes/listarLivros.js';
import { realizarDevolucao } from './src/funcoes/realizarDevolucoes.js';
import { realizarEmprestimo } from './src/funcoes/realizarEmprestimo.js';
import { Livro } from './src/Livro/livro.js';


// Programa Principal

let listar;
let continuar;

console.log('\n\n')
console.log('='.repeat(50))
console.log('               Bem vindo ao Sistema de \n             Gerenciamento de Biblioteca');
console.log('='.repeat(50))

do {
    process.stdout.write("\n============== MENU PRINCIPAL =============\n");
    console.log("||                                       ||")
    console.log("|| [1] - Listar acervo de livros         ||");
    console.log("|| [2] - Buscar                          ||");
    console.log("|| [3] - Listar livros Disponíveis       ||");
    console.log("|| [4] - Cadastrar livro                 ||");
    console.log("|| [5] - Realizar Empréstimo             ||");
    console.log("|| [6] - Realizar Devolução              ||");
    console.log("|| [7] - Exibir Estatísticas             ||");
    console.log("|| [0] - Sair                            ||");
    console.log("||                                       ||");
    console.log("===========================================");

    listar = prompt(`Sua opção: `);
    switch (listar) {
        case '1':
            listarLivros(livros);
            break;
        case '2':
            let buscar = prompt('Pesquisa: ');
            console.log(buscarLivro(livros, buscar));
            break;
        case '3':
            listarDisponiveis(livros);
            break;
        case '4':
            const titulo = prompt('Digite o título: ');
            const autor = prompt('Digite o autor: ');
            const categoria = prompt('Digite a categoria: ');
            const paginas = Number(prompt('Digite o número de páginas: '))
            let novoLivro = new Livro(titulo, autor, categoria, paginas)
            novoLivro.cadastrarLivro();
            break;
        case '5':
            let emprestimo = prompt('Digite o titulo do livro para empréstimo: ')
            realizarEmprestimo(livros, emprestimo);
            
            break;
        case '6':
            let devolucao = prompt('Digite o titulo do livro para devolução: ')
            realizarDevolucao(livros, devolucao);
            
            break;
        case '7':
            exibirEstatisticas(livros);
            break;
        case '0':
            break;

        default:
            console.log('Opção Inválida!')
            break;
    }

    continuar = listar;

} while (continuar !== '0');

console.log('='.repeat(55))
console.log("||+-+-+-+-+ Sistema encerrado. +-+ Até logo! +-+-+-+-||");
console.log('='.repeat(55))