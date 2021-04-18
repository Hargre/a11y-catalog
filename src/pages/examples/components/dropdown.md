---
title: "Menus dropdown"
description: "Menus dropdown são componentes utilizados em vários contextos, seja como mecanismo de navegação ou contendo controles de configuração de uma aplicação. Independente de seu propósito, alguns cuidados devem ser tomados para serem de fato acessíveis."
eleventyNavigation:
  key: Dropdowns
  parent: Componentes Interativos
---

## Menus de navegação

Menus com dropdown são comumente utilizados para implementar seções de navegação em websites. O exemplo apresentado aqui é simples, mas acessível. Alguns pontos importantes serão destacados a seguir.

[Exemplo de menu de navegação]({{ '/examples/components/dropdowns/nav_dropdown' | url }})

### Semântica padrão

Mais uma vez, o uso semântico adequado dos elementos do HTML facilita o desenvolvimento de uma solução acessível. Foram utilizadas listas tanto para os botões do menu, quanto para cada submenu de links. Os botões foram implementados utilizando o elemento `button` e apenas os links de fato foram definidos com tags `a`. 

### Alternando visibilidade

Dois atributos importantes foram utilizados para esconder ou exibir corretamente cada submenu. O primeiro é o atributo `hidden`, que esconde o elemento tanto visualmente quanto para usuários de tecnologias assistivas. Dessa forma, os links do submenu não serão anunciados por leitores de tela nem navegáveis por teclado enquanto o menu estiver oculto. Além disso, utiliza o atributo ARIA `aria-expanded`, que informa para tecnologias assistivas se o conteúdo controlado por aquele botão está visível ou não. O valor desses atributos é alterado via JavaScript, de acordo com a visibilidade do menu.

```js
toggleButton.onclick = (e) => {
  const links = toggleButton.parentElement.querySelector('.sublinks');
  if (buttonWasActive(toggleButton)) {
    toggleButton.setAttribute('aria-expanded', 'false');
    links.setAttribute('hidden', 'hidden');
  } else {
    links.removeAttribute('hidden');
    toggleButton.setAttribute('aria-expanded', 'true');
  }
  toggleButtonsState[i] = !toggleButtonsState[i];
}
```

### Outras observações

- Nesse exemplo, manteve-se a navegação padrão dos links através da tecla `Tab`. Em menus com muitos elementos isso pode gerar um problema sério de usabilidade, exigindo que o usuário navegue desnecessariamente por uma quantidade grande de elementos até alcançar outra seção da página. O próximo exemplo mostra outra forma de tratar a navegação dentro de menus dropdown.

## Exemplo mais complexo: Um menu "real"

O próximo exemplo adiciona algumas camadas de complexidade, demonstrando um [menu com configurações de uma aplicação]({{ '/examples/components/dropdowns/menu_dropdown' | url }}), ao invés de navegação. Alguns pontos de destaque dessa implementação são detalhados a seguir.

### Uso de roles

O exemplo utiliza três `roles` distintas do ARIA para a implementação correta do menu: `menubar`, `menu` e `menuitem`. O `menubar` corresponde à lista exterior do componente, que contém os botões responsáveis por abrir cada submenu. A role `menu` é aplicada para cada submenu, e por fim, a role `menuitem` é aplicada para os controles, tanto os botões que abrem os submenus, quanto os botões de configuração.

Essas estruturas são importantes para que os elementos sejam anunciados corretamente por tecnologias assistivas.

### Navegação

Foi utilizado JavaScript para permitir um fluxo de navegação pelo teclado que simule o de um menu nativo ao Desktop. Dessa forma, foram implementadas ações para os eventos `onkeydown` dos botões do menu, definindo o comportamento de navegação pelas setas do teclado.

Além disso, removeu-se o comportamento padrão de foco via `Tab`, utilizando o atributo `tabindex=-1` nos botões. Esse atributo remove o elemento do fluxo de navegação natural da página, e deve ser utilizado com **extremo** cuidado. Nesse caso, seu uso é justificado para evitar que um usuário precise passar por toda a lista de botões dos menus até alcançar o restante dos controles da página. Além disso, os controles ainda são navegáveis, graças à implementação que permite utilizar as setas.

Apenas o primeiro botão da lista de menus manteve seu comportamento padrão e ainda pode ser acessado via `Tab`. O próximo `Tab` já leva o usuário para o primeiro elemento focável fora do menu.

# Referências
- [ARIA practices - Menu or Menu bar](https://www.w3.org/TR/wai-aria-practices-1.1/#menu)
- [ARIA practices - Menu Button](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton)