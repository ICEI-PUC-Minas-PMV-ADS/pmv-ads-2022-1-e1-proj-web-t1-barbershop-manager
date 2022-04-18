
# Projeto de Interface

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

## User Flow

![image](https://user-images.githubusercontent.com/103009155/163887889-a89e618f-3f06-4b2c-8e87-cde18c294f08.png)


Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor mapear todo fluxo de telas do site ou app. Essa técnica funciona para alinhar os caminhos e as possíveis ações que o usuário pode fazer junto com os membros de sua equipe.

> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)


## Wireframes
 À partir dos fluxos de usuário apresentados no tópico de 'User Flow', apresenta-se em detalhe as principais telas que o compõem.
### Tela Login 

A tela de login é a página inicial ante a abertura do site, nela é apresentado os campos de e-mail e senha, uma vez completos com dados previamente cadastrados a interação com o botão 'Entrar' leva o usuário a Tela de Início. A interação com o botão 'Criar Conta' leva o usuário à 'Tela de Cadastro'.

![image](https://user-images.githubusercontent.com/103009155/163888213-dc7e0083-333a-46e0-ad7e-88dc19d26102.png)

### Tela de Cadastro

A tela de cadastro é acessada através do botão 'Criar Conta' na tela de login. Por meio dela um cliente poderá preencher os campos necessários para o cadastro e
com dados preenchidos criar uma conta no site. Uma vez que o cliente interaja com quaisquer dos botões (Cancelar, Criar Conta), será feito o retorno à 'Tela de Login'.  

![image](https://user-images.githubusercontent.com/103009155/163888322-f0685778-fc09-4e31-9a64-d3e5921e43a3.png)

### Tela de Início

A tela de início é a primeira à ser vista após um cliente entrar com sua conta. Com o objetivo de ser um ambiente mais lúdico, a tela de início apresenta informações básicas sobre o estabelecimento, o dono, os funcionários do estabelecimento e as funcionalidades do site. Nessa tela e nas outras à seguir existe o componente de cabeçalho, usado para navegação entre telas ou logout.

![image](https://user-images.githubusercontent.com/103009155/163888523-1b8c99e1-a1ad-4247-8c38-ab121501e608.png)

### Tela de Unidades

A tela de unidades é destinada à demonstrar os estabelecimentos que oferecem serviços através do site. Além de conter o endereço e uma imagem do local, cada barbearia possui detalhamentos sobre suas instalações e os tipos de serviços que são oferecidos em cada.

![image](https://user-images.githubusercontent.com/103009155/163888658-1057fde6-454a-4f06-8929-58cadbc4bcc5.png)

### Tela de Agendamento

A tela de agendamento mostra, em blocos separados, cada barbeiro que presta serviço através do site. Os 'blocos de barbeiro', possuem informações padronizadas, o nome do barbeiro, uma imagem da pessoa, os horários disponíveis para atendimento, os serviços que o barbeiro é capacitado para oferecer e a unidade onde está trabalhando no momento. Os horários disponíveis para agendamento são botões, que, quando clicados transportam o usuário para a 'Tela de Fluxo de Agendamento Iniciado' para que possa dar continuidade no agendamento. Os campos de pesquisa na parte superior do modal, são utilizados para esconder os barbeiros que não atendem os parâmetros escritos.

![image](https://user-images.githubusercontent.com/103009155/163888948-184d1865-d41f-42cf-9b9b-a3cfd576109c.png)

### Tela de Fluxo de Agendamento Iniciado

A tela de fluxo de agendamento iniciado é acessada após um cliente clicar em um dos botões de horário na 'Tela de Agendamento'. Nela, o serviço à ser agendado é especificado através do tipo (corte, barba, hidratação, etc), a forma de pagamento e observações escritas feitas pelo usuário. À qualquer momento da interação o cliente pode cancelá-la , seja por uma interação no cabeça-lho, seja pelo botão de cancelar que retorna à 'Tela de Agendamento'.

![image](https://user-images.githubusercontent.com/103009155/163888826-45031a83-c2af-4de7-825a-f83b9efc5f1a.png)

### Tela de Horários

A tela de horários apresenta em pequenos cards, os horários que o cliente logado agendou. Cada um dos cards todas as informações sobre o serviço agendado e a possibilidade de cancelá-lo através de um botão.

![image](https://user-images.githubusercontent.com/103009155/163889047-13b40773-81dd-4f70-9361-c55ea7bae3ed.png)
