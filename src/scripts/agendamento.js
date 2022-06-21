var barbeiroDiv = document.getElementById("barbeiros-info");
var inputHorario = document.getElementById("pesquisaHorario");
var inputBarbeiro = document.getElementById("pesquisaBarbeiro");
var sectionBarbeiros = document.getElementById("section-barbeiros");
var sectionAgendamento = document.getElementById("section-agendamento");
var buttonCancelar = document.getElementById("button-cancelar");
var buttonFinalizar = document.getElementById("button-finalizar");
var agendamentosDisponiveis = new XMLHttpRequest();
var servicosPrestados = new XMLHttpRequest();

var dadosParaEnvio = {
  Servicos: [],
  Total: 0,
  Pagamento: "",
  Horario: "",
  Observacoes: "",
};

agendamentosDisponiveis.open("GET", "../../seeds/barber.json");
servicosPrestados.open("GET", "../../seeds/service.json");
servicosPrestados.send();

agendamentosDisponiveis.onload = function () {
  sectionAgendamento.classList.add("hidden");
  let barbeirosJson = JSON.parse(agendamentosDisponiveis.responseText);
  renderHTML(barbeirosJson);
  addButtonEventListeners(barbeirosJson);
};

agendamentosDisponiveis.send();

inputHorario.addEventListener("input", handlePesquisa, false);
inputBarbeiro.addEventListener("input", handlePesquisa, false);
buttonCancelar.addEventListener("click", handleClickCancelarAgendamento, false);
buttonFinalizar.addEventListener(
  "click",
  handleClickFinalizarAgendamento,
  false
);

function renderHTML(data) {
  let htmlString = "";
  for (let barbeiro of data) {
    htmlString +=
      '<div id="' +
      barbeiro.Id +
      '"class="blocoBarbeiro">' +
      obtemHorarios(barbeiro.Horarios) +
      obtemImagen(barbeiro.Imagem, barbeiro.Nome) +
      obtemInfoServico(barbeiro.Servicos, barbeiro.Unidade) +
      "</div>";
  }
  barbeiroDiv.insertAdjacentHTML("beforeend", htmlString);
}

function obtemHorarios(horarios) {
  let stringHorarios =
    '<div class="info">' + '<p class="textoInfo">Horarios Disponíveis</p>';
  for (let horario of horarios) {
    stringHorarios +=
      '<button class="botaoAgendamento">' + horario + "</button>";
  }
  stringHorarios += "</div>";
  return stringHorarios;
}

function obtemImagen(url, nome) {
  return (
    '<div class="info" style="text-align: center">' +
    '<p class="textoInfo">' +
    nome +
    "</p>" +
    ("<img src=" + url + ' class="center">') +
    "</img>" +
    "</div>"
  );
}

function obtemInfoServico(servicos, unidade) {
  let stringInfoServico =
    '<div class="info">' +
    '<p class="textoInfo">Serviços Prestados</p>' +
    "<ul>";
  for (let servico of servicos) {
    stringInfoServico += "<li>" + servico + "</li>";
  }
  stringInfoServico +=
    "</ul>" + "<p>Local:</p>" + "<p>" + unidade + "</p>" + "</div>";
  return stringInfoServico;
}

function handlePesquisa() {
  let barbeirosJson = JSON.parse(agendamentosDisponiveis.responseText);
  if (barbeirosJson.length && barbeirosJson.length > 0) {
    if (inputBarbeiro.value.length && inputBarbeiro.value.length > 0) {
      barbeirosJson = barbeirosJson.filter(
        (barbeiro) =>
          normalizarTexto(barbeiro.Nome).indexOf(
            normalizarTexto(inputBarbeiro.value)
          ) !== -1
      );
    }
    if (inputHorario.value.length && inputHorario.value.length > 0) {
      barbeirosJson = barbeirosJson.filter((barbeiro) =>
        barbeiro.Horarios.some((horario) =>
          horario.includes(inputHorario.value)
        )
      );
    }
  }
  barbeiroDiv.innerHTML = "";
  renderHTML(barbeirosJson);
  addButtonEventListeners(barbeirosJson);
}

function normalizarTexto(text) {
  return String(text)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function handleAgendamento(horario, servicos) {
  sectionBarbeiros.classList.add("hidden");

  dadosParaEnvio.Horario = horario;

  let htmlString = "";
  let servicosPrestadosJson = JSON.parse(servicosPrestados.responseText);
  for (let servico of servicos) {
    let servicoJson = servicosPrestadosJson.find(
      (object) => object.Nome === servico
    );
    htmlString +=
      "<div><img class='imagem-servico' id='" +
      servicoJson.Nome +
      "'src=" +
      servicoJson.Imagem +
      "></img><p>" +
      servicoJson.Nome +
      "</p></div>";
  }
  document
    .getElementById("botoes-servicos")
    .insertAdjacentHTML("beforeend", htmlString);

  for (let servico of servicos) {
    document
      .getElementById(servico)
      .addEventListener(
        "click",
        () =>
          handleClickServico(
            servico,
            servicos.length,
            servicosPrestadosJson.find((object) => object.Nome === servico)
              .Preco
          ),
        false
      );
  }

  document.getElementById("contador-selecao").textContent =
    "0/" + servicos.length;
  document.getElementById("total-a-pagar").textContent = "R$ 0,00";
  sectionAgendamento.classList.remove("hidden");
}

function handleClickServico(servico, total, preco) {
  dadosParaEnvio.Servicos.push(servico);
  dadosParaEnvio.Total += preco;
  let checkmarkString =
    "<img id='checkmark-" +
    servico +
    "' class='checkmark' src='../../assets/icons/overlay-servico.png'></img>";
  document
    .getElementById(servico)
    .insertAdjacentHTML("beforebegin", checkmarkString);
  document.getElementById("contador-selecao").textContent =
    dadosParaEnvio.Servicos.length + "/" + total;

  document.getElementById("total-a-pagar").textContent =
    "R$" + dadosParaEnvio.Total.toFixed(2);

  document.getElementById("checkmark-" + servico).addEventListener(
    "click",
    () => {
      dadosParaEnvio.Servicos.splice(dadosParaEnvio.Servicos.indexOf(servico), 1);
      dadosParaEnvio.Total -= preco;
      document.getElementById("checkmark-" + servico).remove();
      document.getElementById("contador-selecao").textContent =
        dadosParaEnvio.Servicos.length + "/" + total;
      document.getElementById("total-a-pagar").textContent =
        "R$ " + dadosParaEnvio.Total.toFixed(2);
    },
    false
  );
}

function handleClickCancelarAgendamento() {
  sectionAgendamento.classList.add("hidden");
  document.getElementById("botoes-servicos").innerHTML = "";
  dadosParaEnvio = { Servicos: [], Total: 0, Pagamento: "", Horario: "" };
  sectionBarbeiros.classList.remove("hidden");
}

function handleClickFinalizarAgendamento() {
  sectionAgendamento.classList.add("hidden");
  document.getElementById("botoes-servicos").innerHTML = "";
  dadosParaEnvio.Observacoes =
  document.getElementById("texto-observacoes").value;
  dadosParaEnvio.Pagamento = document.getElementById("select-pagamento").value;
  sectionBarbeiros.classList.remove("hidden");
}

function addButtonEventListeners(barbeiros) {
  for (let barbeiro of barbeiros) {
    const wrapper = document.getElementById(barbeiro.Id);
    
    wrapper.addEventListener("click", (event) => {
      const isButton = event.target.nodeName === "BUTTON";
      if (!isButton) {
        return;
      } else if (window.localStorage.getItem("User") != null){
        handleAgendamento(event.target.textContent, barbeiro.Servicos);
      } else {
        alert('Para efetuar um agendamento é necessário fazer o login!');
      }
    });
  } 
}
 
//else {
  //
//}