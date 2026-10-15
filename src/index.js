let numeros = [1, 2, 3, 4, 5];
console.log(numeros [0]);// Imprime el primer elemento del array, que es 1

//Percorrer um array usando for
let numeros1 = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros1.length; i++){
    console.log(numeros1[i]);// Imprime cada elemento do array
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


// Crie um array de tarefas, adicione uma nova tarefa usando push(), percorra o array para mostrar cada tarefa, altere a segunda tarefa e remova a última tarefa usando pop(). Por fim, mostre o array atualizado e seu tamanho.
let tarefas2 = ["Estudar", "Exercitar", "Ler"];

// Adicionar uma tarefa
tarefas2.push("Meditar");

// Percorrer o array e mostrar cada tarefa
for (let i = 0; i < tarefas2.length; i++) {
    console.log(tarefas2[i]);
}

// Alterar a segunda tarefa (índice 1)
tarefas2[1] = "Revisar";

// Remover a última tarefa
tarefas2.pop();

// Mostrar o array final
console.log("Tarefas atualizadas:", tarefas2);


let nomes3 = ["Miguel", "Luan", 'Janaia'];

nomes3.push("Junio", "Amanda");

for (let i = 0; i < nomes3.length; i++) {
    console.log(nomes3[i]);
}
nomes3[2] = "Jesica";

nomes3.pop();
console.log("nomes atualizados" ,nomes3);


// Crie um array de produtos, adicione dois novos produtos usando push(), 
// percorra o array para mostrar cada produto, altere o terceiro produto e remova o último produto usando pop(). 
// Por fim, mostre o array atualizado e seu tamanho.
let produtos2 = ["Arroz", "feijão", "macarrão"];

produtos2.push("farinha", "açucar");

for(let i = 0; i < produtos2.length; i++){
    console.log(produtos2[i]);
}
    produtos2[2] = "Sal";
produtos2.pop();
console.log("lista Atualizada" ,produtos2);


// Crie um array de tarefas, adicione duas novas tarefas usando push(), percorra
//  o array para mostrar cada tarefa, altere a segunda tarefa e remova a última tarefa usando pop().
//  Por fim, mostre o array atualizado e seu tamanho.
let tarefas4 = ["trabalhar", "comer", "estudar"];

tarefas4.push("exercicio", "praticar");

for (let i = 0; i < tarefas4.length; i++) {
    if (tarefas4[i] === "praticar") {
        console.log("Encontrei a tarefa:", tarefas4[i]);
    }
}
tarefas4[1] = "livro";

tarefas4.pop();

console.log("Tarefas4 concluídas", tarefas4);

// Crie um array de compras, adicione dois novos itens usando push(),
//  percorra o array para mostrar cada item, 
// altere o terceiro item e remova o último item usando pop(). 
// Por fim, mostre o array atualizado e seu tamanho.
let compras = ["Arroz", "Feijão","Macarrão"];

compras.push("carne", "Suco");
for (let i = 0; i < compras.length; i++){
if (compras[i] === "Feijão"){
   console.log("Feijão encomtrado na lista");
}
}
compras[2] = "café"
compras.pop();
console.log(compras);
console.log(`A lista possui ${compras.length} itens`);


// Crie um array de estoque, adicione dois novos produtos usando push(),
//  percorra o array para mostrar cada produto, altere o terceiro produto e remova o último produto usando pop().
//  Por fim, mostre o array atualizado e seu tamanho.
let estoque = ["Teclado", "Mouse", "Monitor"];

estoque.push("Notebook", "Webcam");

for (let i = 0; i < estoque.length; i++) {
    if (estoque[i] === "Mouse") {
        console.log("Produto encontrado no estoque!");
    }
}

estoque[2] = "Impressora";

estoque.pop();

console.log(estoque);
console.log(`A quantidade de produtos é ${estoque.length}`);


// Crie um array de roupas, adicione dois novos itens usando push(), 
// percorra o array para mostrar cada item, altere o terceiro item e remova o último item usando pop(). 
// Por fim, mostre o array atualizado e seu tamanho.
let lojaDERoupa = ["calça jeans", "vestido", "blusa"];

lojaDERoupa.push("bermuda", "camiseta", "sapato");

for(let i = 0; i <lojaDERoupa.length; i++){
    if(lojaDERoupa[i] === "bermuda"){
        console.log("roupa na loja");
        
    }
}
lojaDERoupa[3] = "calça social";

lojaDERoupa.pop();

console.log(lojaDERoupa);
console.log(`A loja tem novidade: ${lojaDERoupa.length}`);


// Crie um array de materiais, adicione dois novos itens usando push(),
//  percorra o array para mostrar cada item, altere o terceiro item e remova o último item usando pop().
//  Por fim, mostre o array atualizado e seu tamanho.
let materiais = ["Biblia", "Cadeira", "Microfone"];

materiais.push("Mesa", "Caixa de som");
for (let i = 0; i <materiais.length; i++){
    if(materiais[i] === "Microfone"){
        console.log("Material encontrado!");
    }
}
materiais[1] = "Projetor"
materiais.pop();
console.log(materiais);
console.log(`Na igreja tem ${materiais.length} matriais`);