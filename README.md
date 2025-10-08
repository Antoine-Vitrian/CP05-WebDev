# Mini Catálogo de Filmes com API

Este é um projeto didático desenvolvido como parte do Checkpoint 5 de React Intermediário. A aplicação consome a OMDb API para exibir uma lista de filmes, permitindo que o usuário busque por títulos em tempo real.

## Funcionalidades

- Exibição de uma lista de filmes em formato de cards.
- Busca dinâmica por título.
- Design responsivo que se adapta a telas de desktop e mobile.
- Header fixo com a barra de busca para fácil acesso.

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface de usuário.
- **Vite**: Ferramenta de build para um desenvolvimento rápido.
- **Tailwind CSS**: Framework CSS para estilização rápida e responsiva.
- **JavaScript (ES6+)**: Linguagem de programação principal.
- **Fetch API**: Para realizar as chamadas HTTP para a API de filmes.

## Como Executar Localmente

Siga os passos abaixo para rodar o projeto na sua máquina.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    cd seu-repositorio
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure a chave da API:**
    - Obtenha uma chave de API gratuita no site [OMDb API](http://www.omdbapi.com/apikey.aspx ).
    - Abra o arquivo `src/App.jsx`.
    - Substitua o valor da constante `API_KEY` pela sua chave:
      ```javascript
      const API_KEY = 'SUA_CHAVE_AQUI';
      ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra seu navegador e acesse `http://localhost:5173`.

## Fonte da API

- **OMDb API**: The Open Movie Database
- **URL**: `https://www.omdbapi.com/`


