


var botaoMarcado = false;

function marcarBotao() {
  var botao = document.getElementById("botao");
  if (botao.classList.contains("botao-marcado")) {
    botao.classList.remove("botao-marcado");
    botaoMarcado = false;
  } else {
    botao.classList.add("botao-marcado");
    botaoMarcado = true;
  }
}


  function validarForm() {
    if (!botaoMarcado==false) {
      alert("Sucesso");
      window.location.assign("https://github.com/TheVitin")}

    else{
    alert("Preencha os termos de uso")}
  }


function inicio(){
  window.location.assign("inicio.html")

}
