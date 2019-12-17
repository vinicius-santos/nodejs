# Teste para NodeJS Developer

[![Lyncas Logo](https://img-dev.feedback.house/TCo5z9DrSyX0EQoakV8sJkx1mSg=/fit-in/300x300/smart/https://s3.amazonaws.com/feedbackhouse-media-development/modules%2Fcore%2Fcompany%2F5c9e1b01c5f3d0003c5fa53b%2Flogo%2F5c9ec4f869d1cb003cb7996d)](https://www.lyncas.net)

### Requisitos

- Yarn (https://yarnpkg.com/en/)
- ExpressJS (https://expressjs.com/pt-br/)
- Material Design (https://material.io/guidelines/)
- Database NoSQL (Firebase, MongoDB, etc)

### Diferencial

- Testes unitários
- Arquitetura do projeto
- Backend e frontend em microserviços distintos

### Como participar?

1. Faça um clone deste repositório.
2. Quando estiver finalizado a prova, compartilhe seu código no seu Git de preferência e nos envie para o e-mail que consta ao final desse documento.
3. Faremos nossa análise e te daremos um retorno.

### Detalhes da prova

- A prova consiste em desenvolver um App em NodeJS, backend e frontend (simples), onde o usuário possa criar modelos de provas, modelos de questões para as provas, e executar as provas.
- Seu projeto deve também conter um arquivo README com a explicação das tecnologias utilizadas e as instruções para rodar.
- Descrever suas dificuldades e facilidades, bem como o número de horas de desenvolvimento.

### Funcionalidades

A App deve conter as seguintes funcionalidades:

- A parte administrativa do sistema deve possuir autenticação Basic com usuário (admin) e senha (teste@123) (não necessita tela de login, pode ser utilizado o navegador para autenticação)
- Menus: provas (adm), questões (adm), provas realizadas (adm), executar prova (anonimo)(listagem de provas ativas)
- As questões devem ter um título e 4 opções obrigatoriamente. Somente 1 resposta deve ser válida (o administrador define).
- Permitir editar as questões.
- Devo poder associar questões a uma prova.
- Duran te aassociação das questões à prova o administrador deve informar um peso para a questão. O peso vai de 0 a 100. Uma prova não pode ultrapassar o peso total de 100. Ou seja pode colocar duas questões onde cada uma tem peso 50 (somando 100), ou uma com peso 20 e outra com peso 80.
- Não permitir salvar a prova se o peso não fechar 100.
- No menu executar prova, deve ser exibido uma listagem com todas as provas disponíveis e um botão para simular a prova. A prova deve ser exibida questão abaixo de questão.
- Ao lado de cada prova na listagem, deve possuir um botão para gerar um link de acesso anônimo. Antes de realizar a prova é obrigatório informar um Nome. No ato de "submeter" o teste, guardar o Nome junto com as respostas e informar com uma mensagem: "Fulano, sua nota na prova foi X".
- No menu provas realizadas, exbir todas as provas realizadas com a nota na listagem. Deve possuir uma visão detalhada da prova com as questões corretas e erradas bem como a nota da prova.

### Especificações técnicas

* Recomendamos para sua facilidade a utilização do [Firebase](https://firebase.google.com).

### Dúvidas? Envio da prova?
`testes@lyncas.net`

### Desde já obrigado pelo seu interesse e boa prova!