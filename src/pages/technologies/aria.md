---
title: "ARIA"

eleventyNavigation:
  key: ARIA
  parent: Tecnologias
  order: 2
---

## O que é ARIA?

ARIA (sigla em inglês para Aplicações de Internet Rica Acessíveis, ou Accessible Rich Internet Applications) é uma especificação do W3C para melhorar a acessibilidade de páginas da Web com conteúdo dinâmico e interfaces complexas, onde nem sempre os mecanismos existentes no HTML são suficientes para garantir o acesso através de tecnologias assistivas.

De forma geral, os elementos padrão do HTML são naturalmente acessíveis, quando utilizados com sua semântica pretentida. Mas para muitas situações na Web moderna, é necessário criar elementos customizados para um caso de uso, com funcionalidades que vão além do que o HTML básico pode proporcionar. A ARIA atua no sentido de melhorar a acessibilidade de elementos desse tipo. Exemplos de componentes comumente vistos na maior parte da Web atual, que podem ser beneficiados pelo uso de ARIA incluem: 

- Carousels
- Menus pop-up
- Seções de uma página que são atualizadas automaticamente
- Dropdowns
- Formulários com autocomplete

Alguns dos principais recursos que a ARIA proporcionam incluem:

- **Roles** (papéis, ou funções) que permitem definir semanticamente um elemento. Essa definição impacta na forma que um leitor de tela apresenta o elemento para o usuário. Por exemplo, uma span declarada como `<span role="button">` vai ser apresentada como um botão por um leitor de tela. Esses papéis podem se referir a componentes existentes em HTML (como botões e formulários), mas também permitem definir funções mais específicas, como `progressbar` ou `menu`.

- **Roles** também ajudam a demarcar áreas específicas de uma página, facilitando sua localização e melhorando a navegação através de leitores de tela. Por exemplo, marcar uma tag com a função `role=search` indica que a seção da página composta por aquela tag possui funcionalidades de busca. Existem papeis semelhantes para indicar áreas como headers, links de navegação, conteúdo principal da página, entre outros. Essas funções são conhecidas como **landmarks**.

- **Propriedades** que permitem descrever o estado atual de um componente. Por exemplo, informar se um botão está pressionado ou não, ou se o valor informado em um input é válido.

- **Propriedades** que permitem definir regiões de uma página propensas a serem atualizadas, melhorando a compatibilidade dessas regiões com o funcionamento dos leitores de tela.

## Cuidados de uso

ARIA é uma ferramenta poderosa. Mas se utilizada de forma incorreta, pode acabar criando problemas de acessibilidade ao invés de resolvê-los. Uma das recomendações do próprio W3C em relação ao seu uso é que "Zero ARIA é melhor que ARIA errado". Como ARIA permite alterar a semântica dos elementos HTML em uma página, essas mudanças podem acabar por retirar ou modificar um sentido que já era correto e não necessitava de alterações. Por exemplo:

```html
<ul role="navigation">
  <li><a href="...">Link 1</a></li>
  <li><a href="...">Link 2</a></li>
  ...
</ul>
```

Adicionar um papel de `role=navigation` faz com que o elemento seja apresentado para leitores de tela como uma região de navegação. Ao fazer isso, no entanto, a semântica existente indicando uma lista de elementos é perdida. Exemplos mais corretos seriam:

```html
<div role="navigation">
  <ul>
    <li><a href="...">Link 1</a></li>
    <li><a href="...">Link 2</a></li>
    ...
  </ul>
</div>
```

```html
<nav>
  <ul>
    <li><a href="...">Link 1</a></li>
    <li><a href="...">Link 2</a></li>
    ...
  </ul>
</nav>
```

No primeiro exemplo, a semântica de lista é mantida ao se incluir o `ul` dentro de uma div (que por padrão não possui significado) com o papel de `navigation`. O segundo exemplo faz uso da tag **nav**, que já possui a semântica adequada.

Outro engano comum quanto ao uso de ARIA é de achar que o seu uso automaticamente altera o comportamento dos elementos afetados. Por exemplo, é possível marcar um elemento qualquer como `role=button`.  Isso não faz com que o elemento passe a ter as mesmas funcionalidades de um botão, como ser focável e ativável. Isso muda apenas a **semântica** da tag, fazendo que um leitor de tela a anuncie como um botão. Garantir que o comportamento e aparência do elemento seja coerente com o que é esperado de um botão é responsabilidade do desenvolvedor, através de JavaScript e CSS.

A ARIA será utilizada pontualmente ao longo da seção de exemplos deste apoio, com suas particularidades sendo explicadas em mais detalhes.