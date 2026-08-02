const prompt = require('prompt-sync')();

// Programa Principal

let listar;
let continuar;

console.log('\n\n--+--+-- Bem vindo ao Sistema de Gerenciamento de Biblioteca -+--+--');


process.stdout.write("\n============== MENU PRINCIPAL =============\n");

do {
    console.log("||                                       ||")
    console.log("|| [1] - Listar acervo de livros         ||");
    console.log("|| [2] - Buscar                          ||");
    console.log("|| [3] - Listar livros                   ||");
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
            buscarLivro(livros, buscar);
            break;
        case '3':
            listarDisponiveis(livros);
            break;
        case '4':
            cadastrarLivro(livros);
            break;
        case '5':
            realizarEmprestimo(livros);
            break;
        case '6':
            realizarDevolução(livros);
            break;
        case '7':
            exibirEstatisticas(livros);
            break;

        default:
            break;
    }

    continuar = listar;
    
} while (continuar !== '0');

console.log("\nSistema encerrado. Até logo!");