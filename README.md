[![online](https://img.shields.io/badge/build-online-green.svg?style=for-the-badge)](https://site-dc.herokuapp.com/)
# Site do DC - UFSCar

[![node version](https://img.shields.io/badge/node-9.11.1-blue.svg?style=flat-square)](https://nodejs.org/en/blog/release/v9.11.0/) [![npm](https://img.shields.io/badge/npm-5.8.0-blue.svg?style=flat-square)](https://www.npmjs.com/package/npm5) [![Known Vulnerabilities](https://snyk.io/test/github/petbccufscar/sitedodc/badge.svg?style=flat-square)](https://snyk.io/test/github/petbccufscar/sitedodc)

O projeto do site do DC (Departamento de Computação) utiliza o framework web [Keystone JS 4.0](https://github.com/keystonejs/keystone) e é estruturado segundo suas especificações.

## Executando o projeto

### Configuração inicial

Antes de prosseguir verifique se seu ambiente possui a mesma versão do node em que o projeto foi testado (badge node no inicio desse README). Caso possua uma versão diferente, aconselhamos que você instale o [NVM (Node Version Manager)](https://github.com/creationix/nvm) na sua máquina.

Também é necessário que você tenha um servidor de banco de dados Mongo DB (local ou remoto). Caso você queira utilizar o MongoDB localmente, basta instalá-lo na sua máquina, caso contrário, basta ter o link do banco remoto (você pode utilizar o serviço [Mlab](http://mlab.com/) para desenvolvimento rápide e teste).

### Inicialização do projeto
Clone o repositório na máquina e execute o comando (dentro da pasta raíz do projeto):

``` shell
npm install
```

### Arquivos necessários
Por questão de segurança, para que o projeto possa ser executado, é necessário configurar algumas variáveis de ambiente (como o link de acesso ao banco de dados, modo de execução, ...).

Para realizar essa configuração de forma fácil e rápida basta criar um arquivo chamado **.env** na pasta raíz do projeto e configurar as sequintes variáveis (coloque os valores de cada variável logo após o sinal de igualdade):

``` shell
# Modo de operação (opcional): development ou production
NODE_ENV=development

# Link do banco (opcional): caso não seja especificada irá ser utilizado o banco de dados local (porta 27017)
MONGO_URI=

# Código de cookie (obrigatório): sequência alfanumérica aleatória para encriptar os cookies
COOKIE_SECRET=

# URL do CLOUDNARY para armazenar imagens (obrigatório): essa opção irá ser eliminada em versão futura do sistema
CLOUDINARY_URL=

# Códigos para a API de envio de emails (opcional): o sistema utiliza a API para enviar emails para os administradores
MAILGUN_API_KEY=
MAILGUN_DOMAIN=
```

### Execução
Depois que tudo estiver configurado você pode executar o projeto com o comando:

``` shell
npm run dev
```

Para mais detalhes de implementação e utilização do sistema, consulte a nossa [Wiki](https://github.com/petbccufscar/sitedodc/wiki) aqui no Github.





 