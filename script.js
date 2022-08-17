let nome = document.querySelector(".nome");
let numero = document.querySelector(".numero");
let msg = document.querySelector(".msg");
let jogador = document.querySelector("#nome_jogador");
let tentativas = 3;

// Pega a opção da dificuldade que o usuario escolher e chama a função para sortear um número
function selectOptions() {
  jogador.innerHTML = nome.value;

  let select = document.querySelector("#intervalo");
  let value = select.options[select.selectedIndex].value;
  console.log(value);
  switch (value) {
    case "option1":
      result = getRndInteger.option1();
      console.log(result);
      break;
    case "option2":
      result = getRndInteger.option2();
      console.log(result);
      break;
    case "option3":
      result = getRndInteger.option3();
      console.log(result);
      break;
    default:
      break;
  }
}

// função para gerar um número random
const getRndInteger = {
  option1: () => {
    let min = 1;
    let max = 10;
    return Math.floor(Math.random() * (max - min)) + min;
  },
  option2: () => {
    let min = 1;
    let max = 100;
    return Math.floor(Math.random() * (max - min)) + min;
  },
  option3: () => {
    let min = 1;
    let max = 200;
    return Math.floor(Math.random() * (max - min)) + min;
  },
};

// Compara o número que o usuario informou com o número random
function compare() {
  let buttonPlay = document.querySelector("#button_jogar");

  if (numero.value == result) {
    console.log("<b>Parabéns, você conseguiu adivinhar!</b>");
    msg.innerHTML = "<b>Parabéns, você conseguiu adivinhar!</b>";
    buttonPlay.style.display = "none";

    let buttonReload = (document.querySelector(".reload").style.display =
      "block");
  } else if (result < numero.value) {
    msg.innerHTML = `<b>O número é menor </b><br>Você ainda tem ${
      tentativas - 1
    } tentativas!`;
    tentativas--;
  } else if (result > numero.value) {
    msg.innerHTML = `<b>O número é maior </b><br>Você ainda tem ${
      tentativas - 1
    } tentativas!`;
    tentativas--;
  }
  if (tentativas == 0) {
    msg.innerHTML = `Você errou o número é ${result}!`;
    let buttonReload = (document.querySelector(".reload").style.display =
      "block");
    buttonPlay.style.display = "none";
    buttonReload.disabled = "false";
  }
}
//Quando o usuario clica no botão começar chama a função para identificar a opção e nome do usuario
let buttonBegin = document
  .querySelector("#button_comecar")
  .addEventListener("click", selectOptions);

// Quando o usuario clica no botão jogar ele chama a função que compara o input com o numero random
let buttonPlay = document
  .querySelector("#button_jogar")
  .addEventListener("click", compare);

//Recaga a pagina para o usuario jogar novamente
let buttonReload = document
  .querySelector(".reload")
  .addEventListener("click", function () {
    location.reload();
  });

// habilita o botão começar quando o input é preenchido
nome.addEventListener("input", function () {
  let buttonBegin = document.querySelector("#button_comecar");
  if (nome.value === "") {
    buttonBegin.disabled = true;
    buttonBegin.style.backgroundColor = "#c0c0c0";
  } else {
    buttonBegin.disabled = false;
    buttonBegin.style.backgroundColor = "#1180e6";
  }
});
