# javascript-de-olho-no-combustivel

Repositorio para o projeto da disciplina de Framework Web da Especialização Tecnologia Java, na UTFPR

- Criar o repositório no GitHub com a estrutura do Gitflow, ou seja, branches main e develop.
- Usar componentes de algum framework CSS (Bootstrap, Materialize ou outro)
- Apresentar as telas com layout responsivo usando ou não algum framework CSS.
- Construir páginas web com o conceito de componentes.
- Criar o layout da aplicação com componentes, ou seja, o cabeçalho e rodapé precisam ser componentes.
- Usar pelo menos dois tipos de data-binding (Interpolation, Property Binding, Event Binding e Two Way Data Binding).
- Passar dados via hierarquia de componentes, ou seja, usando @Input ou @Output.
- Mapear componentes à rotas no módulo de rotas.
- Criar navegação entre páginas por meio de rotas.
- Passar dados entre componentes que representam diferentes telas via parâmetros de rotas.
- Validar campos do formulário com REGEX e apresentar os erros.
- Desabilitar o botão de submit enquanto o formulário está inválido.
- Fazer requisições a API com tratamento da resposta com Promises ou Observables.
- Cadastrar uma entidade no JSON Server.
- Apresentar uma lista de dados com a diretiva estrutural ngFor.
- Usar a diretiva ngIf
- Formatar a apresentação de dados com Pipes.
- Build e deploy da aplicação.

# Protótipo das telas do Sistema:

Projeto das interfaces gráficas foi desenvolvido na ferramenat Figma, navegável, dispnonibilizado aqui: [Prototipação da Telas](https://www.figma.com/proto/RDAtre2QIB9eHpWgnHI12H/Figma-basics?type=design&node-id=101-78&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=101%3A78&show-proto-sidebar=1)

# Execução do projeto em ambiente local

Para que o projeto seja executado localmente, algumas configurações serão necessárias. No diretório principal do projeto, temos uma pasta, denonimada backend, que tem como objetivo simular as interações com uma API JSON, através da ferramenta JSON Server. A pasta /backend, trata-se um projeto Node.js, configurado para o funcionamento do JSON Server. A seguir estão listadas as ações necessárias para este funcionamento.

1.  Acessar a pastar backend, que se encontrar em **app-de-oho-no-combustivel/backend**;
2.  Instalar a depêndencia do Json Server: `npm install json-server` na pasta **app-de-oho-no-combustivel/backend**;
3.  Inicializar o servidor do Json Server `npm start` **na pasta app-de-oho-no-combustivel/backend**;

# Deploy da Aplicação

A aplicação de encontra disponivel, com funcionamento parcial em: [Clique aqui](https://haccosta.github.io/javascript-de-olho-no-combustivel/listarRegistroAbastecimento)

# Apresentação do Projeto

O relatório de apresentação do projeto encontra-se disponível em: [Clique aqui](relatorioFinalAngular.pdf)
