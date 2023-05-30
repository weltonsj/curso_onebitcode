/* ## Conversor de Medidas

Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso) */

const metragem = prompt("Qual a metragem deseja converter?");
const medidas = prompt(`Converter ${metragem} metros para qual médida?
1) - Milímetro (mm) 
2) - Centímetro (cm)
3) - Decímetro (dm) 
4) - Decâmetro (dam) 
5) - Hectômetro (hm) 
6) - Quilômetro (km)`
);

switch (medidas) {
  case "mm":
    alert(`Resultado ${metragem} metros = ${metragem * 1000}mm`);
    break

  case "cm":
    alert(`Resultado ${metragem} metros = ${metragem * 100}cm`);
    break

  case "dm":
    alert(`Resultado ${metragem} metros = ${metragem * 10}dm`);
    break

  case "dam":
    alert(`Resultado ${metragem} metros = ${metragem * 0.1}dam`);
    break

  case "hm":
    alert(`Resultado ${metragem} metros = ${metragem * 0.01}hm`);
    break

  case "km":
    alert(`Resultado ${metragem} metros = ${metragem * 0.001}km`);
    break

  default:
    alert("Opção inválida");
};
