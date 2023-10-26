

<img src="https://4maos.com.br/wp-content/uploads/2022/06/dplnews_claro_mc100222.jpeg"  alt="Thumbnail">

## Documentação do projeto

> O teste técnico prevê a criação de um formulário de pedido para uma loja de bolos, de acordo com o <b>layout fornecido</b>. Você pode conferir os detalhes documentados neste arquivo antes de avaliar o código.

<br>

##  Download e Teste

-  Instalar o [Git](https://git-scm.com/), [NodeJS](https://nodejs.org/pt-br/download/) + [npm](https://www.npmjs.com/get-npm):

```bash
# Versões mínimas ou superiores.
 node -v
v16.18.0

 npm -v
8.19.2
```

```bash
# Clonar o repositório
git clone https://github.com/Calebe-Fernandes/teste-tecnico-claro.git

#Entrar no diretório
 cd teste-tecnico-claro

#Instalar as dependências
 npm install

#Iniciar o local host
 npm start
```

- Por ultimo abra seu navegador e digite:

```
localhost:3000
```

---

<br>

## 💻 Tecnologias e aplicações
<h3>React.Js - SASS - Bootstrap </h3>

* Para construção da aplicação, o ReactJs foi determinado como pré-requisito, possibilitando a alteração e manipulação do DOM sem ocasionar recarregamentos, sendo mais performático neste sentido. O Bootstrap foi utilizado para a responsividade dos elementos agrupadores (como elementos de div) e o pré processador SASS foi utilizado para estilização específica de elementos, sendo uma de suas principais vantagens a possibilidade de hierarquizar e agrupar os estilos, melhorando também a manuteção do código.

<h3>Arquitetura</h3>

* A arquitetura de pastas se baseia em componentes, onde cada componente tem sua própria pasta que contém seu arquivo index.tsx e seu arquivo styles.scss, de modo
a separar os conteúdos. O arquivo index.ts exporta os componentes de forma modular, proporcionando uma importação mais organizada e legível.

* Os textos da aplicação foram separados em um arquivo eng.ts, afim de concentrar as variáveis de texto e facilitar a manutenção do código. Em projetos maiores,
é uma boa prática manter os textos como variáveis para caso mudem,não seja necessário navegar por toda a aplicação para alterá-lo em diferentes pontos.

* As variáveis de cores se encontram no arquivo colors.scss, e foram separadas também para manter o código de fácil manutenção e alteração

<h3>React Form Hooks</h3>

* O React Form Hooks foi utilizado para lidar com os campos do formulário, melhorando a eficiência e manutenção de código, onde não é necessário gerenciar o estado
de todos os campos do formulário para acessar seus valores via useState ou similares.

<h3>React Toastify</h3>

* O React Toastify foi utiizado para notificar o usuário com mensagens estilo "notificações" de sucessos e erros durante sua interação na aplicação

<br>


## 🚀 Features

### Responsividade
* Layout responsivo para mobile e web

### Dupla verificação nos campos obrigatórios
* O usuário não conseguirá enviar o formulário mesmo alterando propriedades de um elemento (como "required" de um input), pois além dos atributos semânticos do html, os mesmos são validados via
JavaScript, o que garante uma maior integridade de dados na comunicação com a api.

### Relação de Data e Hora 
* Não é possível agendar uma entrega para um horário anterior ao atual, caso a data de entrega seja para o dia atual.
(Por exemplo, ao realizar um pedido 12h do dia 26/10, não é possível enviar o formulário com o horário para as 11h do dia 26/10)

###  Integridade nas regras de negócio
* Consideraram-se os campos de enderço e data de entrega como obrigatórios, pois sem essas informações não seria possível realizar a entrega do produto (em termos de regra de negócio).

### Integridade de Data e Hora
* Foram mantidos a ordem "DD/MM/AAAA" e "HH/MM" para lidar com datas, pois apesar do layout estar em um padrão americano (MM/DD/AAAA), o acesso é feito pelo navegador localizado para o Brasil,
e o navegador interpreta o input no formato local. Como foram usadas funções que lidam com datas no JavaScript (new Date();), manipular estes formatos poderia cauar uma inconsistência
nos dados na hora da comunicação com uma api em um cenário real, portanto optou-se por manter a ordem original provinda do navegador.

* Documentação de referência: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date


### Integração com API de países
* O Campo select "Country" é populado dinamicamente com dados originados de uma api

### Modal de revisão de pedido
* Modal concentrando as informações referentes ao pedido do bolo realizado

### Integração com WhatsApp
* Botão de suporte no modal de revisão de pedido, onde é possível enviar uma mensagem via whatsapp

<br>

## Preview do projeto 👀

* Modal de revisão de pedido
  
  <img src="https://github.com/Calebe-Fernandes/assets/blob/main/Captura%20de%20tela%202023-10-26%20000813.png?raw=true" alt="Thumbnail">
  

* Notificações de sucesso e erro

  <img src="https://github.com/Calebe-Fernandes/assets/blob/main/Captura%20de%20tela%202023-10-25%20120457.png?raw=true" alt="Thumbnail">
  <img src="https://github.com/Calebe-Fernandes/assets/blob/main/Captura%20de%20tela%202023-10-25%20120531.png?raw=true" alt="Thumbnail">

* Responsividade para dispositivos móveis

  <img src="https://github.com/Calebe-Fernandes/assets/blob/main/Captura%20de%20tela%202023-10-25%20120659.png?raw=true" alt="Thumbnail">
  <img src="https://github.com/Calebe-Fernandes/assets/blob/main/Captura%20de%20tela%202023-10-25%20120727.png?raw=true" alt="Thumbnail">
  
  

