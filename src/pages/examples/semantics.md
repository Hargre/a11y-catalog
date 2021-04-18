---
title: "Escrevendo HTML Semântico"
description: "Um dos aspectos mais simples para a construção de páginas acessíveis, porém muitas vezes esquecido, diz respeito ao uso adequado dos elementos semânticos do HTML. Páginas que ignoram esses elementos, ou os usam de forma incorreta podem dificultar o acesso, compreensão e interação com o conteúdo para um grande número de usuários."
eleventyNavigation:
  key: Semântica
  parent: Exemplos
  order: 1
---

## Entendendo a Semântica

A maior parte das tags existentes em HTML possui sentido específico. Esse sentido pode interferir na apresentação visual de um elemento, em suas funcionalidades padrão e em como esse elemento é apresentado para tecnologias assistivas, como leitores de tela. Embora seja possível manipular elementos como `div` e `span`, que não tem um significado especial, para se comportar como outros elementos, sempre que possível é mais vantajoso fazer uso da estrutura já existente. Por exemplo, é possível criar um componente com aparência de um botão utilizando uma `span`:

```html
<span class="btn">Clique aqui</span>
```

É comum encontrar situações desse tipo em muitas páginas. Mas para esse elemento realmente se comportar como um botão, é preciso garantir que seja possível navegar até ele e ativá-lo pelo teclado. Isso exige implementar controles customizados. Além disso, o elemento não será anunciado como um botão para um usuário de leitor de tela. Por outro lado, se o mesmo componente fosse criado como:

```html
<button class="btn">Clique aqui</button>
```

Todas as funcionalidades mencionadas já existiriam por padrão, e o elemento seria claramente compreendido por um usuário de leitor de tela. O único esforço adicional de implementação em comparação ao uso da `div` seria de possivelmente redefinir o estilo padrão de um botão através de CSS. Mas os ganhos de semântica são superiores aos de apresentação.

A semântica do HTML também auxilia na navegação e compreensão da estrutura de uma página. Por exemplo, não é incomum encontrar páginas que definam os cabeçalhos de uma página através de `divs`, com classes em CSS simulando a aparência de um `h1`, `h2`, e demais níveis:

```html
<div class="heading-1">Países de Língua Portuguesa</div>
<div class="heading-2">Europa</div>
<div class="heading-3">Portugal</div>
<div class="heading-2">Américas</div>
<div class="heading-3">Brasil</div>
<div class="heading-2">África</div>
<div class="heading-3">Angola</div>
<div class="heading-3">Moçambique</div>
...
```

Visualmente, essa página pode fazer sentido. Para um leitor de tela, no entanto, os elementos destacados não serão apresentados como cabeçalhos. A relação e estrutura entre cada elemento é perdida, e um usuário pode ter dificuldades para navegar pela página.
Por outro lado, uma implementação que faça uso das tags adequadas:

```html
<h1>Países de Língua Portuguesa</h1>
<h2>Europa</h2>
<h3>Portugal</h3>
<h2>Américas</h2>
<h3>Brasil</h3>
<h2>África</h2>
<h3>Angola</h3>
<h3>Moçambique</h3>
...
```

Nesse caso, um leitor de tela informaria ao usuário os cabeçalhos, e permitiria identificar e navegar através da estrutura hierárquica da página.

## Exemplos

Os links a seguir contém a implementação dos trechos de código apresentados. Tente acessar cada página com um leitor de tela ativado e preste atenção nas diferenças. Note também como é possível alcançar o botão através do teclado em apenas um dos exemplos.

Os leitores de tela permitem agilizar a navegação com atalhos para grupos específicos de elementos. Por exemplo, apertar a tecla `H` com o NVDA ativo fará com que o próximo cabeçalho na página seja lido. De forma similar, `Ctrl H` lê o cabeçalho anterior. Confira o atalho equivalente do seu leitor de tela e veja a diferença de resultados entre os exemplos.

- [Exemplo incorreto de semântica]({{ '/examples/semantics/incorrect' | url }})
- [Exemplo correto de semântica]({{ '/examples/semantics/correct' | url }})

## Referências

- [Techniques for WCAG 2.0 - Using semantic elements to mark up structure](https://www.w3.org/TR/WCAG20-TECHS/G115.html), assim como os links apresentados na seção de [técnicas relacionadas](https://www.w3.org/TR/WCAG20-TECHS/G115.html#G115-related-techs).
- [WebAIM - Semantic Structure: Regions, Headings, and Lists](https://webaim.org/techniques/semanticstructure/)