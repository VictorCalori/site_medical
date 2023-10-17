


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
  // Obter valores dos campos
  var nome = document.getElementById("Nome").value;
  var genero = document.getElementById("genero").value;
  var cpf = document.getElementById("CPF").value;
  var celular = document.getElementById("Celular").value;
  var cep = document.getElementById("CEP").value;
  var email = document.getElementById("Email").value;
  var senha = document.getElementById("senha").value;

  // Verificar se todos os campos obrigatórios estão preenchidos
  if (nome && genero && cpf && celular && cep && email && senha && botaoMarcado) {
    // Todos os campos estão preenchidos, redirecione para a outra página
    window.location.assign("https://github.com/TheVitin");
  } else {
    // Mostrar uma mensagem de erro se algum campo estiver faltando
    alert("Por favor, preencha todos os campos obrigatórios e concorde com os termos de uso.");
  }
}

function toggleSenhaVisibility() {
  var senhaInput = document.getElementById("senha");
  if (senhaInput.type === "password") {
    senhaInput.type = "text";
  } else {
    senhaInput.type = "password";
  }
} 