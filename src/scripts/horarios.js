var meusHorarios = JSON.parse(window.localStorage.getItem("Horarios"));
var sectionTela = document.getElementById("sectionHorarios");
var seedBarbeiros = new XMLHttpRequest();

seedBarbeiros.open("GET", "../../seeds/barber.json");

console.log(seedBarbeiros.responseText);

seedBarbeiros.onload = function () {
if (!meusHorarios || !meusHorarios.length || meusHorarios.length <= 0) {
  document.getElementById("dadosInexistentes").classList.remove("hidden");
} else {
  renderHorarios();
}}

seedBarbeiros.send()

function renderHorarios() {
  let htmlString = "";
  for (let horario of meusHorarios) {
    let barbeirosJson = JSON.parse(seedBarbeiros.responseText);
    let dadosBarbeiro = barbeirosJson.find(
      (barbeiro) => barbeiro.Id === horario.IdBarbeiro
    );
    htmlString +=
      '<article class="gridItem">' +
      '<div class="gridContent">' +
      '  <div class="topo-card">' +
      "    <strong>Agendamento</strong>" +
      '    <img src="../../assets/icons/scissors.svg" alt="tesoura" />' +
      "    <strong>" +
      dadosBarbeiro.Nome +
      "</strong>" +
      "  </div>" +
      '  <div class="linha-card">' +
      "    <strong>Horário:</strong>" +
      "    <strong>" +
      horario.Horario +
      "</strong>" +
      "  </div>" +
      '  <div class="linha-card">' +
      "    <div>" +
      "      <ul>" +
      "        Serviços:" +
      "      </ul>" +
      obtemServicos(horario.Servicos) +
      "    </div>" +
      "    <div>" +
      "      <ul>" +
      "        Forma de pagamento:" +
      "      </ul>" +
      "      <li>" +
      horario.Pagamento +
      "</li>" +
      "    </div>" +
      "  </div>" +
      '  <div class="linha-card">' +
      "    <div>" +
      "      <ul>" +
      "        Observações:" +
      "      </ul>" +
      "      <li>" +
      obtemObservacoes(horario.Observacoes) +
      "</li>" +
      "    </div>" +
      "  </div>" +
      "</div>" +
      '<div class="fotobarbeiro">' +
      "  <img" +
      '    width="100%"' +
      '    height="100%"' +
      "    src=" +
      dadosBarbeiro.Imagem +
      '    alt="foto-barbeiro"' +
      "  />" +
      "</div>" +
      "</article>";
  }
  console.log(htmlString)
  sectionTela.insertAdjacentHTML("beforeend", htmlString);
}

function obtemObservacoes(Observacoes) {
  return /[a-zA-Z]/.test(Observacoes) ? Observacoes : "Nenhuma";
}

function obtemServicos(Servicos) {
  let stringServicos = "";
  for (let servico of Servicos) {
    stringServicos += "<li>" + servico + "</li>";
  }
  return stringServicos;
}
