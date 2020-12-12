<h3 align="center">
  <span>
  <img alt="GoStack" src="assets/challenge-logo.png"  width='300px'/>
  </span>
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/J-Keven/linkApi-challenge?color=blue">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">

  <a href="https://github.com/J-keven/linkApi-challenge/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/J-Keven/linkApi-challenge?style=social">
  </a>

  <a href="https://github.com/J-Keven/linkApi-challenge/network/members">
    <img alt="Stargazers" src="https://img.shields.io/github/forks/J-keven/linkApi-challenge?style=social">
  </a>
</p>


<p align="center">
  <a href="https://github.com/J-Keven/linkApi-challenge/#sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/J-Keven/linkApi-challenge/#-como-usar">Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/J-Keven/linkApi-challenge/#-como-usar">Como Usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/J-Keven/linkApi-challenge/#-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="https://github.com/J-Keven/linkApi-challenge/#-como-contribuir">Como Contribuir</a>&nbsp;&nbsp;&nbsp;
  <!-- <a href="#memo-licença">Licença</a> -->
</p>

## :fire: Sobre
A aplicação é uma Api REST desenvolvida para o desefio da [LinkApi solutions](https://www.linkapi.solutions/) que tem como objetivo a integração entre o [Pipedrive](https://www.pipedrive.com/pt), que é uma plataforma CRM criada para facilitar a gestão de vendas de uma empresa, e o [Bling](https://www.bling.com.br/home), que é um sistema de gestão(ERP) para a micro e pequena empresa. 
O desafio contém os seguintes requisitos: 
  - [x] Criar contas testes nas plataformas Pipedrive e Bling.

  - [x] Criar uma integração entre as plataformas Pipedrive e Bling. (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).

  - [x] Criar banco de dados mongo, existem serviços como MongoDB Atlas para criar de graça

  - [x] Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.

  - [x] Criar endpoint para trazer os dados consolidados da collection do MongoDB.
## Techs
Esse projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas:
<code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"></code> <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code> <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"></code> <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"></code> <code><img height="20" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png"></code>
- [Axios](https://github.com/axios/axios)
- [eslint](https://eslint.org/docs/user-guide/configuring)
- [Mongoose]()
- [prettier](https://prettier.io/docs/en/options.html)

## ⚡ Executando o Projeto

1. Faça um clone:

```sh
  $ git clone https://github.com/J-Keven/linkApi-challenge.git
```

2. Entre na pasta da aplicação:

  ```sh
    $ cd linkApi-challenge
  ```

  - Crie um arquivo ``.env`` na raiz do rojeto.
  - Copie o conteúdo do arquivo [.env.example](freelasApp-api/.env.example) e cole no seu arquivo ``.env``

3. Adicione as chaves de acesso no ``.env``:

    Para que a aplicação se conect com a Api do Pipedrive, Bling e com o mongodb, é necessário que você adicione as keys de acesso no ``.env`` que você criou.

  - ApiKey do Pipedrive e do Bling:

    Para obter a ApiKey do Pipedrive e do Bling voce deve acessar as duas plataformas e copiar a sua secretKey de ambas a plataformas e colar como valor das variáveis abientes contidas no ``.env``

  + Usando mongodb Atlas: 

    caso deseje usar o mongodb Atlas, vá ate o seu cluster, clique em connect, depois em Connect your application, em DRIVER escolha o Node.js, em VERSION escolha a 3.6 or Later e click em COPY. Cole a url na variável ambiente ``MONGO_URL_CONNECTION`` contina no seu ``.env``
    A url sera nesse formato:

      ```js
        mongodb+srv://seUsername:<password>@cluster0.vvpyt. mongodb.net/<dbname>?retryWrites=true&w=majority
      ```

    Em ``<pessword>`` coloque sua senha e em ``<dbname>`` coloque o nome que dejesa dar ao seu banco.
- Usando o mongo localmente:

  caso deseje usar um banco mongodb que esteja execultado na sua máquina a url será neste formato 
  A url sera nesse formato:
  ```js
  mongodb://localhost:<dbport>/<dbname>
  ```
  Em ``<dbport>`` coloque o número da porta que seu banco está utulizando e em ``<dbname>`` coloque o nome que dejesa dar ao seu banco.

  No fim, o seu .env deve ser pareceido com isso: 
  ```js
      PIPEDRIVE_URL=https://api.pipedrive.com/v1
      BLING_URL=https://bling.com.br/Api/v2

      PIPEDRIVE_API_KEY=MinhaBlingApiKey
      BLING_API_KEY=MinhaBlingApiKey

      MONGO_URL_CONNECTION=Url
  ```
4. Instale as depedências:
```sh
  # Instale as dependências
  $ yarn
```

5. Executando a Aplicação:
```sh
  # Inicie a API no mode de dev
  $ yarn dev:server
```

Assim que as messagens `` 🚀 server started in http://localhost:3333`` e ``database connected`` aparecerem em seu terminal, você ja pode fazer suas requisições.
## ⚡ Rotas

como a aplicação estrá executando em ambiente local, utiliza o endereço ``http://localhost:3333`` como baseUrl.

A aplicação possie uma única.
- orders
Aceita requisiçõe do tipo GET e do tipo POST
  - ``GET``/orders:
  Lista todos os pedidos que foram inseridos no Bling.
  - ``POST``/orders:
  Busca no Pipedrive todas as oportunidades com o status `ganho`(wow) e insere todos no Bling como pedido. 
  Também salva no banco as oportunidades inseridas no Bling.

## 🚀 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m '[feat]: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

- Abra um Pull Request.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
<h4 align="center">
    Feito com 💜 by <a href="https://www.linkedin.com/in/jhonnas-keven-884a97159/" target="_blank">J-keven</a>
</h4>
