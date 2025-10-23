
let listaDeAfazeres = ["Comprar pão", "Estudar JavaScript", "Lavar louça"];


console.log("Lista de Afazeres:", listaDeAfazeres);
console.log("Primeiro item:", listaDeAfazeres[0]);
console.log("Quantidade total de afazeres:", listaDeAfazeres.length);


listaDeAfazeres.push("Fazer exercícios");
listaDeAfazeres.unshift("Agendar médico");
console.log("\nApós adições:", listaDeAfazeres);


let removidoFinal = listaDeAfazeres.pop();
console.log(`Afazer removido do final: ${removidoFinal}`);

let removidoInicio = listaDeAfazeres.shift();
console.log(`Afazer removido do início: ${removidoInicio}`);

console.log("\nApós remoções:", listaDeAfazeres);

let listaOrganizada = [...listaDeAfazeres];
listaOrganizada.sort();
console.log("\nLista organizada (ordem alfabética):", listaOrganizada);

listaOrganizada.reverse();
console.log("Lista organizada invertida:", listaOrganizada);

console.log("\nLista original intacta:", listaDeAfazeres);
