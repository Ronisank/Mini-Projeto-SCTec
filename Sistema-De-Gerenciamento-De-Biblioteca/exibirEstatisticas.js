import { livros } from "./dadosLivros.js";

export function exibirEstatisticas(livros) {
    const totalLivros = livros.length
    const livrosDisponiveis = livros.filter(item => item.disponivel).length
    const livrosIndisponiveis = totalLivros - livrosDisponiveis
    const totalDePaginas = livros.reduce((total, item) => total + item.paginas, 0);
    const mediaPaginasPorLivros = totalDePaginas / totalLivros

    console.log({
        'Total de Livros Cadastrados': totalLivros,
        'Quantidade de Livros Disponíveis': livrosDisponiveis,
        'Quantidade de Livros Indisponíveis': livrosIndisponiveis,
        'Total de Páginas considerando todos os livros': totalDePaginas,
        'Média de Páginas Por Livros': mediaPaginasPorLivros,
    });

}
exibirEstatisticas(livros);