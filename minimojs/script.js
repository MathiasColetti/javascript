function gritar() {
  alert("AAAAAAAAAAAAA");
}
function formulario() {
  let nome = prompt("Qual o seu nome?");
  alert("Olá" + nome);
}
function mudar_text() {
  var h1 = document.getElementsByTagName("h1");
  h1[0].innerText = "Aprendendo JavasCript";
}
function aumenta() {
  var numeroElemento = document.getElementById("number"); // Obtém o elemento
  var numero = Number(numeroElemento.innerText); // Converte o texto para número
  let aumenta = numero + 1; // Soma 1
  numeroElemento.innerText = aumenta; // Atualiza o texto do elemento
}
function diminoi() {
  var numeroElemento = document.getElementById("number"); // Obtém o elemento
  console.log(numeroElemento);
  var numero = Number(numeroElemento.innerText); // Converte o texto para número
  let aumenta = numero - 1; // Soma 1
  numeroElemento.innerText = aumenta; // Atualiza o texto do elemento
}
