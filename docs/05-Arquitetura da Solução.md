# Arquitetura da Solução

Definições de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

O Diagrama de componentes ilustra o relacionamento dos componentes que farão parte do software. Na figura abaixo há uma diagramação geral do relacionamento da Interface, o Local Storage e a Hospedagem

![Diagrama de Componentes](https://i.gyazo.com/6e6eb5592ebd9694b9c8a4fa0fb6aac1.png)

A solução implementada conta com os seguintes módulos:
- **Navegador** - A camada de acesso mais alta do sistema, a página web só pode ser acessada por navegadores (Opera, Mozilla Firefox, Google Chrome)
  - **Web UI** - A Interface de Usuário, o conjunto de arquivos Html, CSS e JavaScript que permitem a interação ea renderização das funcionalidades do site.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Barbeiros** - Armazenamento dos objetos da classe barbeiros, incluindo, Id Barbeiro, Nome, Imagem, Horários Disponíveis, Serviços Providos, Horários Agendados e descrição.
     - **Clientes** - Armazenamento dos objetos da classe cliente, incluindo, Id Cliente, Nome, E-Mail, Data de Aniversário, Lista Id's de Agendamentos.
     - **Agendamentos** - Armazenamento dos objetos da classe agendamentos, incluindo, Id Agendamento, Id Cliente, Id Barbeiro, Serviços Escolhidos, Horário, Total à     Pagar, Forma de pagamento
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas, GitHub. 

## Tecnologias Utilizadas

> - Linguagens utilizadas para a base do desenvolvimento web do projeto: HTML, CSS e JavaScript.
> - Editor gráfico de vetor e prototipagem de projetos de design: Figma.
> - Hospedagem da documentação e arquivos do projeto: Github.
> - Ferramenta de Desenvolvimento (IDE): Visual Studio Code (VSCode) 

## Hospedagem

A hospedagem do website foi feita através da plataforma [GitHub Pages](https://pages.github.com/)

