let listaN = [41, 17, 89, 3, 56, 9, 25];

function ordenaLista(arrayDesordenado) {
    let listaOrdenada = arrayDesordenado.slice(); // Faz uma cópia da lista
    let trocou; // Variável para checar se houve troca

    do {
        trocou = false; // Inicialmente, assumimos que não houve trocas
        for (let index = 0; index < listaOrdenada.length - 1; index++) {
            let elementoAtual = listaOrdenada[index];
            let proximoElemento = listaOrdenada[index + 1];

            // Se o elemento atual for maior que o próximo, troque
            if (elementoAtual > proximoElemento) {
                listaOrdenada[index] = proximoElemento;
                listaOrdenada[index + 1] = elementoAtual;
                trocou = true; // Indica que houve uma troca
            }
        }
    } while (trocou); // Continue enquanto houver trocas

    return listaOrdenada;
}

console.log(ordenaLista(listaN));
