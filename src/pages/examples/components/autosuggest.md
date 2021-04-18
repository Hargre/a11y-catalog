---
title: "Autocomplete"
description: "Caixas de entrada com sugestões automáticas são um padrão bastante comum para funcionalidades de busca ou preenchimento de formulários. Em comparação a outros exemplos já apresentados, sua implementação é mais complexa e aborda alguns aspectos de ARIA ainda não vistos."
eleventyNavigation:
  key: Autocomplete
  parent: Componentes Interativos
---

## Exemplo e Comentários

- [Exemplo de input com sugestões automáticas]({{ '/examples/components/autosuggest/' | url }})

Pontos de destaque da solução:

- Navegação pelo teclado - após a lista de sugestões aparecer, seus elementos podem ser navegados através das setas para cima e para baixo do teclado, bem como um elemento pode ser ativado através da tecla Enter. Nesse exemplo, ao ser ativado, o texto do elemento é preenchido no input, mas esse comportamento pode ser adaptado para outros contextos.
- Detalhes do html - esse componente faz uso mais profundo de funcionalidades do ARIA do que outros exemplos apresentados nesse apoio. Vamos ver em mais detalhes o html relevante:

```html
<div>
    <label id="input-label" for="team-input">Nome do Time</label>
</div>
<div class="input-container" id="input-container">
  <div
    class="combobox"
    role="combobox"
    aria-haspopup="listbox"
    aria-owns="suggestions"
    aria-expanded="false">
    <input
      id="team-input"
      type="text"
      aria-autocomplete="list"
      aria-controls="suggestions"
      aria-active-descendant="item-0">
  </div>
  <ul aria-labelledby="input-label" hidden id="suggestions" role="listbox">
    <li role="option" id="item-0">...</li>
    <li role="option" id="item-1">...</li>
  </ul>
</div>
```

O exemplo utiliza um padrão conhecido por [combobox](https://www.w3.org/TR/wai-aria-practices/#combobox), que consiste de um componente com uma caixa de texto e um elemento associado que auxilia usuários a definirem o valor do input. Neste caso, o elemento associado é uma lista de elementos. Para isso, foram utilizadas duas roles do ARIA: `combobox`, atribuída à div que contém o input, e `listbox`, associada ao `ul` que contém as sugestões. Além disso, cada elemento da lista de sugestões é marcado com a role `option`.

Além das roles, esses elementos contam ainda com alguns atributos do ARIA para melhorar sua acessibilidade. Eles serão detalhados a seguir.

- `aria-haspopup="listbox"` - indica que o elemento possui uma lista associada, com comportamento expandível.
- `aria-expanded="false/true"` - indica se a lista associada está expandida ou não. É alternado via JavaScript sempre que o estado da lista muda.
- `aria-active-descendant="<id>"` - permite indicar qual item da lista está visualmente sob foco do teclado, quando o usuário navega com as setas de cima/baixo. O foco real da DOM permanece na caixa de texto, mas tecnologias assistivas irão anunciar corretamente qual subitem da lista está ativo.

# Referências
- [ARIA practices - Combo box](https://www.w3.org/TR/wai-aria-practices-1.1/#combobox)