# Vale dos Dragões
O objetivo desse repositório é apresentar uma pequena aplicação Angular que exemplifique diversos elementos que a lib disponibiliza, tais como: componentes, serviços, diretivas, pipes, guards etc.

Basicamente, o projeto é um CRUD de dragões, ou seja, o usuário poderá criar, listar, editar e excluir dragões. Para tal, utilizei uma API REST chamada [Dragons API](https://dragons-api.herokuapp.com). Além da API, foi utilizado um framework CSS chamado [Bulma](https://dragons-api.herokuapp.com). Por fim, o projeto foi gerado com a ajuda do [Angular CLI](https://github.com/angular/angular-cli) versão 7.0.2.

## Rodando o projeto

Para rodar a aplicação na sua máquina, você deve ter o Node instalado e seguir os seguintes passos:
1. Clonar o projeto
2. No terminal, digitar `npm install`
3. Ainda no terminal, digitar `ng serve`

A partir do terceiro passo, abra o seguinte endereço no seu navegador: `http://localhost:4200/`.

## Coisas que você precisa saber

### Acessando o Vale

Você será redirecionado para a página de login logo que acessar a URL do projeto. Não será possível alterar as informações dos dragões sem, antes, logar no sistema. Para tal, foi criada uma autenticação _fake_, mas você ainda precisará digitar os dados corretos para ter acesso:
- E-mail: `teste@sicredi.com.br`
- Senha: `teste`
