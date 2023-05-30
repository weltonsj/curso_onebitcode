// Padrão
const nomePlayer1Padrao = 'Atacante';
const ataquePlayer1Padrao = 50;
const nomePlayer2Padrao = 'Defensor';
const vidaPlayer2Padrao = 100;
const defesaPlayer2Padrao = 45;
const escudoPlayer2Padrao = 'Não'.toLocaleUpperCase();

// Player 1 = Inserir o nome e o poder de ataque de um personagem
let nomePlayer1 = prompt("Qual nome do personagem atacante?");
if (nomePlayer1 === '') {
  alert('Você não deu nome ao personagem de ataque, ele terá o nome padrão Atacante.');
  nomePlayer1 = nomePlayer1Padrao;
};

let ataquePlayer1 = prompt("Qual seu poder de ataque?");
if (ataquePlayer1 === '') {
  alert(`Você não definiu os pontos de ataque, o personagem terá ataque padrão de 50 pontos`);
  ataquePlayer1 = ataquePlayer1Padrao;
};

// Player 2 = Depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo
let nomePlayer2 = prompt("Qual nome do personagem defensor?");
if (nomePlayer2 === '') {
  alert('Você não deu nome ao personagem de defesa, ele terá o nome padrão Defensor.');
  nomePlayer2 = nomePlayer2Padrao;
};

let vidaPlayer2 = prompt("Quantos pomtos de vida ele possui?");
if (vidaPlayer2 === '') {
  alert(`Você não definiu os pontos de vida, o personagem terá vida padrão de 100 pontos`);
  vidaPlayer2 = vidaPlayer2Padrao;
};

let defesaPlayer2 = prompt("Quanto de defesa ele tem?");
if (defesaPlayer2 === '') {
  alert(`Você não definiu os pontos de vida, o personagem terá vida padrão de 45 pontos`);
  defesaPlayer2 = defesaPlayer2Padrao;
};

let escudoPlayer2 = prompt("Ele tem um escudo? [S]IM/[N]ÃO").toUpperCase();
if (escudoPlayer2 === '') {
  alert(`Você não informou se tem ou não ume escudo, o personagem não terá escudo por padrão.`);
  escudoPlayer2 = escudoPlayer2Padrao;
};

let vidaFinal = vidaPlayer2;
let danoCausado = 0;

/* Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa. Ex: Ataque 500 - Defesa 300 = 200 então a vida 400 - 200 = 200. */
if (ataquePlayer1 > defesaPlayer2 && escudoPlayer2 === "NÃO" || escudoPlayer2 === "N") {
  danoCausado = ataquePlayer1 - defesaPlayer2;
  escudoPlayer2 = "Não";

  /* Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa. Ex: Ataque 500 - Defesa 300 = 200 então 200 / 2 = 100 a vida 400 - 100 = 300. */
} else if (ataquePlayer1 > defesaPlayer2 && escudoPlayer2 === "SIM" || escudoPlayer2 === "S") {
  danoCausado = (ataquePlayer1 - defesaPlayer2) / 2;
  escudoPlayer2 = "Sim";
};

vidaFinal -= danoCausado;

/* Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens. */
alert(`${nomePlayer1} causou ${danoCausado} pontos de dano em ${nomePlayer2}\n
${nomePlayer1}\nPoder de ataque: ${ataquePlayer1}\n
${nomePlayer2}\nPontos de vida: ${vidaFinal}
Poder de defesa: ${defesaPlayer2}
Possui escudo: ${escudoPlayer2}`);