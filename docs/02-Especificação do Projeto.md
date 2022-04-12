# ESPECIFICAÇÃO DO PROJETO
A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feito pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.
## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas na Figuras que se seguem.

|Sandro Barbalho Montese| |
|-----------------------|-|
<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.prefeitura.sp.gov.br%2Fcidade%2Fsecretarias%2Fsaude%2Fvigilancia_em_saude%2Fcontrole_de_zoonoses%2Fanimais_sinantropicos%2Findex.php%3Fp%3D289901&psig=AOvVaw0WB4Lkc7EMrHZnJ69gAa_1&ust=1649890270487000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCPjH3a7Oj_cCFQAAAAAdAAAAABAD" alt=""/>
|Idade:|61|           
|Ocupação:|  Empreendedor, Dono de barbearia |
|Aplicativos:|	WhatsApp,	Facebook|
|Motivações |	Ter uma barbearia organizada e moderna;	Atrair mais clientes para sua barbearia; |
|Frustrações |	Não consegue organizar os horários dos barbeiros. |	Não sabe quais os produtos cosméticos que os clientes querem |
|Hobbies |	Sommelier de vinhos,	Campeão de sinuca |


|Josias Olaio Palmeira| |
|-----------------------|-|
|Idade:|45|
|Ocupação:|  Supervisor Financeiro de Concessionária, Cliente de Barbearia|
|Aplicativos:| Instagram, Twitter, WhatsApp, LinkedIn|
|Motivações: |	Prefere que um profissional mantenha a sua barba; Esconder a calvice;
|Frustrações: | Espera muito pelo atendimento; Não sabe quando o barbeiro favorito está na loja
|Hobbies: | Colecionador de carros antigos, Crossfit|


|Mateus Avelar Assunção| |
|-----------------------|-|
|Idade: |33|
|Ocupação:|  Barbeiro|
|Aplicativos:|	WhatsApp,	LinkedIn,	Instagram,	Spotify|
| Motivações: |	Ter clientes fiéis;	Ter um bom relacionamento com o dono da barbearia;|
|Frustrações: | Não consegue atender todos os clientes que chegam; Não sabe quando os clientes vão chegar;|
|Hobbies:|	Ir a shows de stand-up;	Assistir à séries e filmes|

## Histórias de usuários
A partir da compreensão do dia a dia das personas identificadas em uma barbearia, foram registradas as seguintes histórias de usuários.

|Eu como …  [PERSONA] |	… quero/desejo … [O QUE] |	… para .... [POR QUE] |
|---------------------|--------------------------|-----------------------|
| Sandro Barbalho Montese |	Montar o agendamento de funcionários diariamente |	Tomar ciência de quais funcionários irão atender os clientes na barbearia, deixando a escolha do cliente de qual o barbeiro optar pelo atendimento. |
| Mateus Avelar Assunção |	Atribuir uma disponibilidade diária e horários dentro da barbearia |	Para tornar passível as escalas de cada colaborador na montagem do quadro de funcionários, a fim de ser administrado pelo dono da barbearia. |
| Josias Olaio Palmeira |	Cadastrar os dados pessoais dos clientes. | 	Consolidar uma conta, com a finalidade de, promover um histórico de informações importantes de cada cliente da barbearia, para caso necessitar fazer um contato ou atualizar os dados constantemente dos clientes. |
| Josias Olaio Palmeira |	Agendamento de horários pelo site |	Priorizar atendimento no horário estabelecido do(s) serviço(s) prestado(s) aos clientes. |
| Josias Olaio Palmeira |	Visualização da lista dos serviços prestados na barbearia |	Com o detalhamento de todos os serviços que a barbearia oferece, fica fácil do cliente escolher o serviço de sua preferência e o barbeiro saber o que será solicitado pelo cliente. |
| Josias Olaio Palmeira |	Quais serão as formas de pagamento |	Identificar no site quais são os tipos de pagamento oferecidos na barbearia, sendo que ao chegar no estabelecimento possa estar ciente de como pagar o serviço prestado. |
| Josias Olaio Palmeira |	Ter acesso ao telefone e endereço  da barbearia |	Caso o cliente necessite de qualquer suporte, ocorre um imprevisto ou até mesmo ser mais um meio facilitador da comunicação. É necessário que tenha o contato da barbearia, para quaisquer esclarecimentos. |

# Requisitos do Projeto
O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

## Requisitos Funcionais
A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID|Descrição|Prioridade|
|--------|-------------------------------------------------------------------------------------------------------------------|----|
|RF-01|	O site deve apresentar uma lista dos barbeiros que trabalham na barbearia	|Alta|
|RF-02|	O site deve apresentar os horários que cada barbeiro possui disponível para agendamento	|Alta|
|RF-03|	O site deve permitir que o dono da barbearia seja capaz de alterar os horários disponíveis para agendamento.	|Alta|
|RF-04|	O site deve apresentar, à todos os momentos, o telefone de contato da barbearia.	|Alta|
|RF-05|	O site deve apresentar, a todos os momentos, ícones representando as formas de pagamento disponíveis.	|Média|
|RF-06|	O site deve mostrar uma caixa de texto indicando o que cada ícone de forma de pagamento significa.	|Média|
|RF-07|	O site deve abrir um menu durante o agendamento para especificar os serviços disponíveis.	|Alta|
|RF-08|	O site deve permitir cancelar um agendamento a qualquer momento desse fluxo.	|Alta|
|RF-09|	O site deve permitir que o cliente especifique suas observações a respeito o serviço	selecionado. |Alta|
|RF-10|	O site deve permitir que o cliente faça mais de um agendamento.	|Baixa|
|RF-11| O site deve apresentar, à todos os momentos, o endereço da barbearia.	|Alta|
|RF-12|	O site deve ter uma funcionalidade de login para seus usuários (Donos de barbearias, barbeiros e clientes)	|Alta|
|RNF-13|	A administração do site ficará por responsabilidade do dono da Barbearia;	|Alta|

## Requisitos não funcionais
A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID|	Descrição|	Prioridade|
|-------|----------------------------------------------------------------------------------------------|----|
|RNF-01|	O sistema deve funcionar na maioria dos navegadores (Google Chrome, Firefox, Microsoft Edge)	|Alta|
|RNF-02|	O site deverá ser responsivo permitindo a visualização em um celular de forma adequada	|Alta|
|RNF-03|	O site deve ter bom nível de contraste entre os elementos da tela em conformidade 	|Média|
|RNF-04|	O site deve ser publicado em um ambiente acessível publicamente na Internet (GitHub Pages);	|Alta|

## Restrições
As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.
 
|ID|	Descrição|
|-------|----------------------------------------------------------------------------------------------|
|RE-01|	O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 26/06/2022.| 
|RE-02|	O aplicativo deve se restringir às tecnologias básicas da Web no Front-End|
|RE-03|	A equipe não pode subcontratar o desenvolvimento do trabalho.|

