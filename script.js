var numeroSecreto = 3;

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    console.log("Acertou");
  } else if (chute > 10 || chute < 0) {
    console.log("Você deve digitar um número de 0 a 10");
  } else {
    console.log("Errou");
  }
}
