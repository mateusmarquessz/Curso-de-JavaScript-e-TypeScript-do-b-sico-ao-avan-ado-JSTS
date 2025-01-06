//Filtrando valores de um array
//Filter, map, reduce

//filter filtra o array
//map modificar o array
//reduce vai reduzir o array em um outro valor


const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 6, 7, 32, 412, 5231,]

const numerosFiltrados = numeros.filter(
    (valor) => {
        return valor > 10;
    });
console.log(numerosFiltrados);