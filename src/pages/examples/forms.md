---
title: "Formulários"
description: "Os exemplos das seções anteriores se preocupavam principalmente em garantir a percepção correta do conteúdo de um site, bem como de seus mecanismos de navegação. Essa seção tem por foco principal questões de interação com a interface."
eleventyNavigation:
  key: Formulários
  parent: Exemplos
---

## Considerações Básicas

Os elementos de entrada básicos do HTML são acessíveis por padrão, se utilizados corretamente. Isto é, elementos como caixas de texto, checkboxes, radio buttons e selects são naturalmente anunciados por leitores de tela, bem como são focáveis e navegáveis via teclado. Ainda assim, alguns pontos devem ser destacados para garantir sua implementação correta.

### Rotular Corretamente os Campos

A imagem a seguir mostra dois formulários visualmente idênticos, lado a lado. Apesar disso, os dois possuem diferenças importantes de implementação.

[imagem de exemplo]

No primeiro formulário, os rótulos para cada campo foram criados utilizando tags `div`. Já o segundo foi implementado utilizando tags `label`. No primeiro caso, um leitor de tela informaria os rótulos e a existência dos campos do formulário, mas não apresentaria nenhuma relação entre eles. Dependendo da forma com que cada elemento é declarado no HTML, pode ser muito difícil identificar corretamente qual campo corresponde a que descrição. Ao utilizar `label` esse problema não existe. Acesse a página de exemplo com um leitor de tela ligado e confira a diferença em cada caso.

Para rotular corretamente os campos, é importante ainda utilizar o atributo `for`, indicando para o id do respectivo controle. Um exemplo correto seria:

```html
<label for="nome">Nome</label>
<input id="nome" type="text">
```

Enquanto um exemplo incorreto seria:

```html
<label>Nome</label>
<input id="nome" type="text">
```

Sem esse atributo, tem-se o mesmo problema do formulário inicial, com os campos não sendo anunciados associados a suas descrições.

### Placeholders não são suficientes

É comum encontrar páginas que utilizam apenas o atributo `placeholder` para descrever um campo. Essa prática não é recomendada, tanto por questões de acessibilidade quanto de usabilidade geral. Como já mencionado no exemplo acima, é essencial utilizar de tags `label` para descrever apropriadamente o propósito de cada controle no formulário. 