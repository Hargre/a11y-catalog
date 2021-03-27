---
title: "Modais"
description: "Modais são um tipo de componente extremamente comum em páginas na Web. Se implementadas incorretamente, no entanto, podem tornar seu site praticamente inutilizável para um grande número de usuários."
eleventyNavigation:
  key: Modais
  parent: Componentes Interativos
---

## Considerações iniciais

Para os fins desse exemplo, modais são definidas como caixas de diálogo customizadas, que se sobrepõem ao conteúdo principal da página. São utilizadas para uma variedade de fins, geralmente envolvendo uma ação imediata por parte do usuário para prosseguir com a navegação natural da página.

## Exemplo inacessível

Vamos começar apresentando um exemplo de uma [modal com problemas de acessibilidade]({{ '/examples/components/modals/modal_bad' | url }}). Acesse o link, clique no botão para abrir a modal e tente navegar pela página com o teclado. Qual a primeira coisa que você repara?

Até conseguir alcançar o primeiro botão dentro da modal, é preciso navegar por todos os links, botões e controles no conteúdo principal da página. Em uma página grande, isso pode implicar em dezenas a centenas de `Tabs` até se alcançar os controles dentro da modal, o que cria uma experiência de usuário cansativa e confusa. 

Tente navegar pela página novamente, dessa vez com um leitor de tela. A situação é ainda pior! Nesse caso, o usuário pode nem mesmo estar ciente da existência da modal.

Para componentes nesse formato, é **essencial** que o foco dos elementos da página seja tratado corretamente. Ao abrir a modal, o foco do teclado deve ser levado para algum elemento dentro da modal, geralmente o primeiro elemento focável. Quando a modal for responsável por alguma ação destrutiva (retirar todos os itens de um carrinho de compras, por exemplo), pode ser útil levar o foco para a ação de "Cancelar", para evitar que o usuário cometa um ato irreversível por engano.

Além disso, o usuário não deve poder sair acidentalmente do contexto da modal, ao navegar com `Tab`. Os únicos elementos focáveis devem pertencer à modal, enquanto a mesma estiver aberta. Deve ainda existir um botão específico que realize a ação de fechar o dialógo e retornar para o fluxo normal da página.

## Exemplo acessível

Realize os mesmos testes nessa [versão atualizada do exemplo]({{ '/examples/components/modals/modal_good' | url }}). O que mudou?

Como discutido, o foco do teclado é imediatamente alterado para o botão de "Cancelar", dentro da modal. Além disso, ao se dar `Tab` a partir do botão de confirmar, ou `Shift-Tab` a partir do botão de cancelar, o foco permanece dentro da modal, retornando ao primeiro ou último elemento. Esse tipo de lógica pode ser implementada da seguinte forma:

```js
const TAB = 9;
const primeiroControleModal = document.getElementById('modal-first-el');
const ultimoControleModal = document.getElementById('modal-last-el');

primeiroControleModal.onkeydown = (e) => {
  if (e.shiftKey && e.keyCode === TAB) {
    e.preventDefault();
    ultimoControleModal.focus();
  }
}

ultimoControleModal.onkeydown = (e) => {
  if (!e.shiftKey && e.keyCode === TAB) {
    e.preventDefault();
    primeiroControleModal.focus();
  }
}
```

Além disso, ao fechar a modal, o foco do teclado retorna ao botão que iniciou a ação. Para isso, é necessário manter o registro do controle responsável por abrir a modal:

```js
let focoAnterior;

botaoAbreModal.onclick = (e) => {
  focoAnterior = document.activeElement;
  // ...
}

botaoFechaModal.onclick = (e) => {
  // ...
  focoAnterior.focus();
}
```