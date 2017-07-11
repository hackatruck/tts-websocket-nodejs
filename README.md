# tts-websocket-nodejs
Uma aplicação NodeJS que utiliza o serviço IBM Watson Text To Speech para sintetizar em áudio uma mensagem de texto pelo usuário utilizando um websocket

Este app apenas exibe na tela os bytes de audio gerados pelo serviço

# Instalação e configuração

## Clone e instale as dependencias
```
git clone https://github.com/hackatruck/tts-websocket-nodejs.git
cd tts-websocket-nodejs
npm install
```

## Configure as credenciais do serviço Watson Conversation

1. Acesse [bluemix.net](bluemix.net)
2. Crie uma instância do serviço Watson Text To Speech
3. Crie um token de acesso usando as credenciais do serviço (username e password) e copie o token para o arquivo config.js
  Para mais detalhes sobre como obter um token de acesso acesse [https://www.ibm.com/watson/developercloud/doc/common/getting-started-tokens.html](https://www.ibm.com/watson/developercloud/doc/common/getting-started-tokens.html)

# Execute a aplicação
Execute a aplicação com o comando

    node app.js
