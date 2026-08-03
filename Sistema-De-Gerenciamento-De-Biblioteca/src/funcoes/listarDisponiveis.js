import { livros } from "../dados/dadosLivros.js";

export function listarDisponiveis() {
    const disponiveis = livros.map(item => {
        if (item.disponivel) {
            return console.log({
                ...item,
                titulo: item.titulo.toLocaleUpperCase()
            })
        }
    })
}

// listarDisponiveis(livros);