---
title: "Menus dropdown"
description: "."
eleventyNavigation:
  key: Dropdowns
  parent: Componentes Interativos
---

## Exemplo mais complexo: Um menu "real"

O próximo exemplo adiciona algumas camadas de complexidade, demonstrando um [menu com configurações de uma aplicação](), ao invés de navegação. Alguns pontos de destaque dessa implementação são:

### Uso de roles

O exemplo utiliza três `roles` distintas do ARIA para a implementação correta do menu: `menubar`, `menu` e `menuitem`. O `menubar` corresponde à lista exterior do componente, que contém os botões responsáveis por abrir cada submenu. A role `menu` é aplicada para cada submenu, e por fim, a role `menuitem` é aplicada para os controles, tanto os botões que abrem os submenus, quanto os botões de configuração.

Essas estruturas são importantes para que os elementos sejam anunciados corretamente por tecnologias assistivas.

### Navegação

Foi utilizado JavaScript para permitir um fluxo de navegação pelo teclado que simule o de um menu nativo ao Desktop. Dessa forma, foram implementadas ações para os eventos `onkeydown` dos botões do menu, definindo o comportamento de navegação pelas setas do teclado.

Além disso, removeu-se o comportamento padrão de foco via `Tab`, utilizando o atributo `tabindex=-1` nos botões. Esse atributo remove o elemento do fluxo de navegação natural da página, e deve ser utilizado com **extremo** cuidado. Nesse caso, seu uso é justificado para evitar que um usuário precise passar por toda a lista de botões dos menus até alcançar o restante dos controles da página. Além disso, os controles ainda são navegáveis, graças à implementação que permite utilizar as setas.

Apenas o primeiro botão da lista de menus manteve seu comportamento padrão e ainda pode ser acessado via `Tab`. O próximo `Tab` já leva o usuário para o primeiro elemento focável fora do menu.