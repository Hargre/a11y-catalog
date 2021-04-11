---
title: "Formulários - Validações e Mensagens de Erro"
eleventyNavigation:
  key: Validações
  parent: Formulários
  order: 1
---

## Informando campos obrigatórios

Utilizando funcionalidades modernas do HTML, marcar campos como obrigatórios e realizar validação client-side de forma acessível é simples. Basta apenas marcar um campo com o atributo `required`.

<form>
<label for="email">E-mail: </label>
<input type="text" id="email" required>
<input type="submit" value="Enviar">
</form>

```html
<form>
<label for="email">E-mail: </label>
<input type="text" id="email" required>
<input type="submit" value="Enviar">
</form>
```

Ao navegar pelo campo, um usuário de leitor de tela será informado que o campo é obrigatório. Ao tentar submeter o formulário sem preenchê-lo, será informado novamente. Para usuários com visão, uma mensagem padrão do navegador também é informada automaticamente.

Atualmente esse atributo é reconhecido corretamente pela [grande maioria dos navegadores](https://caniuse.com/mdn-api_htmlinputelement_required). Ainda assim, o exemplo acima pode ser ligeiramente melhorado, para garantir compatibilidade com mais dispositivos.

<form>
<label for="email-1">E-mail (obrigatório): </label>
<input type="text" id="email-1" required aria-required="true">
<input type="submit" value="Enviar">
</form>

```html
<form>
<label for="email">E-mail (obrigatório): </label>
<input type="text" id="email" required aria-required="true">
<input type="submit" value="Enviar">
</form>
```

O atributo `aria-required=true` informa a leitores de tela que o campo é obrigatório. Ao marcar o campo com `required`, a maioria dos navegadores ativa esse atributo implicitamente. Mas utilizá-lo explicitamente pode ser útil por questões de compatibilidade.

Também se modificou a label do controle com o texto `(obrigatório)`, para informar usuários com visão. Nesses casos, um padrão mais comum é de usar um asterisco (*) para informar a necessidade do campo. Não existem maiores problemas em fazer o uso desse caracter, mas alguns cuidados podem ser tomados para não prejudicar a acessibilidade.

Alguns leitores de tela ignoram caracteres especiais por padrão, outros podem anunciar o caracter literalmente (lendo algo como "email asterisco"). Nesse caso, uma possível solução seria utilizar o atributo `aria-hidden=true`, que faz com que um elemento não seja anunciado por tecnologias assistivas, embora ainda apareça visualmente na tela.

```html
<form>
<label for="email">E-mail <span aria-hidden="true">(*)</span>: </label>
<input type="text" id="email" required aria-required="true">
<input type="submit" value="Enviar">
</form>
```

## Informando validações server-side

Independente das validações realizadas do lado do cliente, é essencial que os dados enviados em um form também sejam validados do lado do servidor. Quando isso acontece, novos erros podem ser identificados, e devem ser apresentados ao usuário.

De forma geral, existem duas técnicas principais para a apresentação de erros após o envio de um formulário: exibir todos os erros agrupados, no topo da página, ou exibir cada erro junto ao input ou controle que exige revisão. Cada uma possui vantagens e desvantagens, e sua escolha varia de acordo com o contexto.

Do ponto de vista da acessibilidade, algumas técnicas devem ser levadas em conta, independente da abordagem. As mensagens de erro devem estar relacionadas a seus respectivos inputs através do atributo `aria-describedby`. Dessa forma, ao navegar por um input, o leitor de tela informará o usuário do erro descrito, independente de sua posição real na página. Além disso, os campos podem ser marcados com o atributo `aria-invalid`.

<fieldset>
<legend>Erros</legend>
<ul>
  <li id="error-password"> Senha deve conter pelo menos um caracter especial. </li>
  <li id="error-date"> Ano de nascimento deve ser superior a 1900. </li>
</ul>
</fieldset>
<form>
<div>
  <label for="password">Senha</label>
  <input id="password" type="password" aria-describedby="error-password" invalid>
</div>
<div>
  <label for="birthday">Data de nascimento</label>
  <input id="birthday" type="date" aria-describedby="error-date" invalid>
</div>
</form>

### Erros descritos ao topo da página

Ao descrever todos os erros agrupados no topo da página, é importante que cada mensagem de erro seja um link, apontando para o input relacionado. Também é importante que ao link ser ativado, o controle associado fique sob foco. Para isso é necessário um pouco de JavaScript:

```js
const errorLink = document.querySelector('a#error');
const referencedControl = document.querySelector('#some_input');

errorLink.onclick = (event) => {
  referencedControl.focus();
  return event.preventDefault();
}
```

[Exemplo de form com erros ao topo da página]({{ '/examples/forms/errors_top' | url }})

### Erros descritos ao lado dos controles

Neste caso, as instruções gerais já são praticamente suficientes. Para que o usuário se oriente com mais facilidade, no entanto, é útil que o foco da página seja direcionado ao primeiro controle com uma mensagem de erro.

[Exemplo de form com erros ao lado dos controles]({{ '/examples/forms/errors_inline' | url }})