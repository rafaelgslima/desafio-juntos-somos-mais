# Desafio Juntos Somos Mais
Desafio proposto pela Juntos Somos Mais para oportunidade de Front-End

Regras de negócio do desafio: https://github.com/juntossomosmais/frontend-challenge

O desafio pode ser acessado aqui: https://desafio-justos-somos-mais.netlify.app

## Considerações

> A aplicação foi baseado em vue-cli
 
> Foi utilizado vuex para controlar o estado global da aplicação. Pela simplicidade das regras de negócio, o ideal seria não ter usado, mas optei por usar apenas para demonstrar meu conhecimento, acredito que pode ajudar a alinhar as expectativas.

> Foi utilizado vue-router para controlar as rotas da aplicação. Pela simplicidade das regras de negócio, o ideal seria não ter usado, mas optei por usar apenas para demonstrar meu conhecimento, acredito que pode ajudar a alinhar as expectativas.

> Optei por não usar sass, uma vez que estou utilizando css escopado.
 
> O endpoint estava com o CORS bloqueado, então optei por subir o objeto no https://gist.github.com/ e fazer a request pra lá apenas para facilitar na request.

> Crei uma página 404 para exibir páginas que não existem

> Na paginação optei por usar a lib https://github.com/cornflourblue/jw-vue-pagination
 
> Optei por desenvolver o projeto todo localmente e subir em um único commit no final, apenas para agilizar no desenvolvimento. Mas normalmente eu trabalho com branchs e procuro padronizar os commits, como por exemplo: "feature/[num-task]: [comentário do que foi feito]"

> Utilei o lint https://eslint.vuejs.org/

> No endpoint, no usuários não contém id, então para facilitar na identificação única do usuário e a navegação entre "Página dos usuários" > "Página de detalhes do usuário clicado" eu utilizei a lib https://github.com/darkskyapp/string-hash para gerar os Ids

## Instalação
``` bash
# Faça um clone ou download deste repositório
# Entre no seu diretório local e instale as dependências utilizando o comando:

npm install
```

### Comando para executar a aplicação localmente
``` bash
# A aplicação será executado na porta http://localhost:8080/

npm run serve
```

### Comando para executar o deploy
``` bash
# Será criado uma pasta /dist na raiz da aplicação com os arquivos minificados
# A pasta está pronta para subir no servidor

npm run build
```