// Grupo de avisos antes de começar a digitar os valores.
alert("Bem vindo a nossa calculadora!");
alert("Você podera dgitar 2 valores e obter o resultado entre eles. \n Sendo: (addção, subitração, multiplicação e divisão).");
confirm("Gostaria de digitar os valores agora?");

// Coleta dos valores digitados 
const primeiroValor = prompt("Digite o primeiro valor:");
const segundoValor = prompt("Digite o segundo valor:");

// tratando os dados coletados
const num1 = parseFloat(primeiroValor);
const num2 = parseFloat(segundoValor);
const add = num1 + num2
const sub = num1 - num2
const mul = num1 * num2
const div = num1 / num2

// Exibindo os dados coletados ao usuário
alert(`A soma entre ${num1} + ${num2} = ${add}\n A subtração entre ${num1} - ${num2} = ${sub}\n A multiplicação entre ${num1} * ${num2} = ${mul}\n A divisão entre ${num1} / ${num2} = ${div}`);