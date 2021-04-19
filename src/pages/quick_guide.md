---
title: "Guia Rápido"
description: Essa é uma versão resumida das práticas descritas detalhadamente na seção de Exemplos, e pode ser usada para verificar rapidamente alguns pontos essenciais para a acessibilidade de uma página.
eleventyNavigation:
  key: Guia Rápido
  order: 2
---

## Definições básicas de HTML

### Definir o idioma do documento
- Utilizar o atributo `lang` na tag raiz do documento HTML.

```html
<html lang='pt'>
...
</html>
```

### Ajustar a tag de viewport

- Utilizar o atributo `width=device-width` na tag de viewport.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
- Permitir que o usuário altere o zoom da página, NÃO utilizando o atributo `user-scalable=no`.

## Navegação

### Headings

- Utilizar as tags adequadas para definir cabeçalhos, de `h1` até `h6`

```html
# Correto
<h1>...</h1>

# Incorreto
<div class="h1">...</div>
```

- Utilizar os cabeçalhos para criar uma estrutura lógica dos tópicos de uma página

- Não pular níveis de cabeçalhos

```html
# Correto
<h1>...</h1>
  <h2>...</h2>
    <h3>...</h3>
  <h2>...</h2>
  <h2>...</h2>
    <h3>...</h3>
      <h4>...</h4>

# Incorreto
<h2>...</h2>
<h1>...</h1>
  <h2>...</h2>
    <h4>...</h4>
  <h3>...</h3>
  <h2>...</h2>
    <h5>...</h5>
```

### Links

- Garantir que links sob foco sejam identificados com facilidade

```css
a:focus {
  outline: 2px dashed #004a40;
}
```

- Evitar o uso de links vazios (com `href='#'`, por exemplo). Preferir o uso de tags como `button` para casos desse tipo.

- Evitar o uso de links com descrições genéricas como "Mais" ou "Clique aqui".

### Pular blocos de conteúdo

- Utilizar [`skip links`]({{ '/pages/examples/navigation#pular-blocos-de-conte%C3%BAdo' | url }}) para permitir que usuários passem diretamente ao conteúdo principal da página, evitando navegação por blocos repetidos.


## Texto

- Garantir que o texto possa ser aumentado em até 200% sem que exista perda de conteúdo ou funcionalidade

- Utilizar um espaçamento entre linhas de no mínimo 1.5 (através do atributo `line-height` em CSS )

- Evitar o uso de alinhamento justificado para textos

## Texto alternativo

- **Sempre** utilizar o atributo `alt` ao declarar imagens.
- Utilizar `alt=''` em imagens que não necessitem de texto alternativo. Situações em que isso pode ocorrer:
  - A imagem já é descrita em algum componente próximo (por exemplo, com uma legenda logo abaixo).
  - A imagem tem propósito puramente decorativo, não existindo conteúdo ou funcionalidade a ser descrita. Nesse caso, considerar declarar a imagem via CSS, ao invés de HTML.
- Adaptar a descrição da imagem ao propósito que a mesma representa na página. Uma mesma imagem pode ter descrições completamente diferentes dependendo do contexto em que está inserida.
- Não utilizar termos como "Imagem de..." no texto alternativo.

## Cores e contraste

### Uso de cor

- Não utilizar cor como a forma única de transmitir uma determinada informação

### Contraste

- Para texto até 24px: Ter uma relação de contraste mínima de 4.5:1 entre a cor do texto e seu plano de fundo.
- Para texto acima de 24px: Ter uma relação de contraste mínima de 3:1 entre a cor do texto e seu plano de fundo.
- Para outros elementos da interface: Ter uma relação de contraste mínima de 3:1 entre o elemento e seu plano de fundo.

![Comparação de contraste entre texto e plano de fundo]({{ '/images/contrast-text.png' | url }})

## Formulários

- Rotular corretamente os campos de entrada, utilizando a tag `label` e referenciando o id do input

```html
# Correto
<label for="nome">Nome</label>
<input id="nome" type="text"/>

# Incorreto
<div>Nome</div>
<input id="nome" type="text"/>

# Incorreto
<label>Nome</label>
<input id="nome" type="text"/>
```

- Não utilizar apenas placeholders para descrever o propósito de um input

- Agrupar controles relacionados (como grupos de checkboxes ou radio buttons) com a tag `fieldset`. Rotular fieldsets com a tag `legend`.

```html
<fieldset>
<legend>Idiomas</legend>
<div>
  <label for="english">Inglês</label>
  <input type="checkbox" id="english">
</div>
<div>
  <label for="portuguese">Português</label>
  <input type="checkbox" id="portuguese">
</div>
<div>
  <label for="spanish">Espanhol</label>
  <input type="checkbox" id="spanish">
</div>
</fieldset>
```

- Informar campos obrigatórios com os atributos `required` e `aria-required=true`.
- Associar mensagens de erro aos seus respectivos inputs, através do atributo `aria-describedby`.

```html
<fieldset>
<legend>Erros</legend>
<ul>
  <li id="error-password"> Senha deve conter pelo menos um caracter especial. </li>
</ul>
</fieldset>
<form>
<div>
  <label for="password">Senha</label>
  <input id="password" type="password" aria-describedby="error-password" invalid>
</div>
</form>
```

## Tabelas
- Atribuir corretamente a tag `th` aos cabeçalhos da tabela, para linhas e colunas
- Definir a orientação de uma `th` através do atributo `scope`.

## Animações
- Evitar animações que movimentem grandes partes da tela, ou realizem movimentos muito bruscos ou rápidos
- Utilizar a media query `prefers-reduced-motion` para reduzir ou interromper animações de acordo com as preferências de sistema do usuário

## Modais e popups
- Não exibir popups em momentos inesperados, sem serem disparados por consequência de uma ação do usuário
- Considerar abordagens menos intrusivas para transmitir informações não-críticas
- Mover o foco do teclado para dentro da modal, em popups que se sobrepõem completamente ao conteúdo principal
  - Manter o foco do teclado apenas dentro da modal, enquanto a mesma não for fechada
  - Garantir que uma ação responsável por fechar a modal existe e é facilmente perceptível (como um botão de cancelar, ou um ícone de fechar)
  - Ao fechar a modal, retornar o foco do teclado para o último elemento sob foco antes de sua abertura

## Captchas
- Evitar o uso de captchas de forma geral. Não utilizar captchas que não forneçam alternativas de interação.
