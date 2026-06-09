let numeros = [1, 2, 3, 4, 5];
console.log(numeros [0]);// Imprime el primer elemento del array, que es 1

//Percorrer um array usando for
let numeros1 = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros1.length; i++){
    console.log(numeros1[i]);
}

//adicionando elementos a um array usando push
const listaDeCompras = ["feijao", "arroz", "farinha"];

listaDeCompras.push("macarão" ,"cafe");

console.log(listaDeCompras.length); // Imprime o tamanho do array, que é 5
console.log(listaDeCompras); // Imprime o array atualizado com os novos elementos

//adicionando elementos a um array usando push com dois consoles
let filmes = ["Matrix", "Batman", "Vingadores"];

filmes.push("Homen-Aranha", "interestelar");

console.log(filmes);

console.log(filmes.length);


//crie um arrays de tarrefas com 3 itens use pop()para remover o ultimo item altereo segundo item (indice 1)para uma nova tarefa
//mostre o arrays no final e o tamanho dele.
let tarefas = ["estudar", "Praticar", "Ler"];

// Remove o último item da lista
tarefas.pop();

// Altera o segundo item (índice 1)
tarefas[1] = "Treinar JavaScript";

// Mostra o array final e o tamanho
console.log(tarefas);     // ["estudar", "Treinar JavaScript"]
console.log(tarefas.length); // 2