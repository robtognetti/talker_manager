Talker Registration Application
Este projeto consiste em uma aplicação de cadastro de palestrantes (talkers), onde é possível realizar as operações de criação, leitura, atualização e exclusão (CRUD) de informações, além de realizar pesquisas.

A aplicação foi desenvolvida em Node.js utilizando uma API para o CRUD de palestrantes e endpoints que leem e escrevem informações em um arquivo utilizando o módulo fs.

Funcionalidades
A aplicação conta com as seguintes funcionalidades:

Criação de palestrantes: é possível cadastrar um novo palestrante informando seu nome, idade, tipo (internacional ou nacional) e a palestra que irá apresentar.
Visualização de palestrantes: é possível visualizar uma lista com todos os palestrantes cadastrados, exibindo seu nome, idade, tipo e palestra.
Pesquisa de palestrantes: é possível pesquisar um palestrante por nome e visualizar suas informações.
Edição de palestrantes: é possível editar as informações de um palestrante, como seu nome, idade, tipo e palestra.
Exclusão de palestrantes: é possível excluir um palestrante cadastrado.
API
A API para o CRUD de palestrantes conta com os seguintes endpoints:

GET /talkers: retorna uma lista com todos os palestrantes cadastrados.
GET /talkers/id retorna as informações de um palestrante específico, identificado pelo seu ID.
POST /talkers: cria um novo palestrante.
PUT /talkers/id atualiza as informações de um palestrante específico, identificado pelo seu ID.
DELETE /talkers/id exclui um palestrante específico, identificado pelo seu ID.
Endpoints para leitura e escrita em arquivo
Os seguintes endpoints foram desenvolvidos para ler e escrever informações em um arquivo utilizando o módulo fs:

GET /talker/:name: pesquisa um palestrante pelo nome e retorna suas informações.
POST /login: recebe um usuário e senha e verifica se as informações são válidas. Se sim, retorna um token de acesso que deve ser utilizado nos demais endpoints.
GET /logout: invalida o token de acesso do usuário logado.
GET /checkToken: verifica se o token de acesso é válido.
Como executar o projeto
Para executar o projeto, siga os seguintes passos:

Clone o repositório para sua máquina local.
Instale as dependências do projeto utilizando o comando npm install.
Execute o comando npm start para iniciar a aplicação.
Utilize as rotas da API ou dos endpoints para realizar as operações desejadas.
Considerações finais
Este projeto foi desenvolvido como um exercício para aplicar conhecimentos em Node.js e APIs RESTful. Sinta-se à vontade para utilizá-lo como referência ou como base para o desenvolvimento de projetos similares. Em caso de dúvidas ou sugestões, entre em contato.
