// Avisos antes da coleta dos dados
alert("Bem vindo ao Cadastro de Recruta!");
confirm("Podemos começar?");
alert("Insisra as informações solicitadas a seguir.")

// Bloco da coleta de dados para cadastro
const primeiroNome = prompt("Primeiro Nome:");
const sobreNome = prompt("Sobrenome:");
const campoEstudo = prompt("Campo de Estudo:");
const anoDeNascimento = parseInt(prompt("Ano de Nascimento:"));
const idade = 2023 - anoDeNascimento;

// Formatação dos dados coletados para serem exibidos ao usuário
const dados = `Bem vindo recruta \n Você se chama ${primeiroNome} ${sobreNome}, \n tem ${idade} e está estudadndo ${campoEstudo} correto?`;
alert(dados);

// Aviso final referente ao sucesso do cadastro
alert("Parabéns dados do recruta salvo com sucesso!")