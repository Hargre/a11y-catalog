---
title: "Cores e Contraste"
description: "."
eleventyNavigation:
  key: Cores e Contraste
  parent: Exemplos
---

## Contraste

O contraste de cores é um dos fatores essenciais para a percepção adequada dos elementos em uma interface. Uma página que utilize uma cor de fundo muito próxima à cor do texto dificulta a leitura para qualquer usuário que esteja consumindo o conteúdo visualmente. Considerações parecidas se aplicam a outros componentes de uma página, como links, formulários e outros elementos de interação. Garantir o contraste suficiente é algo tão importante para a acessibilidade e a usabilidade de uma forma mais geral que o WCAG define valores mínimos de conformidade para vários componentes de uma página da Web.

Caso você ainda não tenha visto, a seção de [Tecnologias de Apoio](../../technologies/support) contém dicas de ferramentas para avaliar o contraste entre elementos em uma página da Web.

### Texto

Para a apresentação de texto em uma página, o WCAG considera que a relação de contraste deve ser de no mínimo 4.5:1 entre cores adjacentes. Para texto considerado grande (a partir de 24 pixels, ou 18.5 pixels em negrito) esse valor é reduzido para 3:1, por se considerar que texto grande é mais facilmente percebido. A imagem a seguir mostra três trechos de texto em uma página da web. No primeiro parágrafo, o contraste entre texto e plano de fundo é inferior ao valor mínimo recomendado. No segundo o contraste está exatamente na proporção de 4.5:1, e no terceiro, de 7:1, que representa o nível mínimo de contraste para a conformidade AAA.

![Comparação de contraste entre texto e plano de fundo]({{ '/images/contrast-text.png' | url }})

A proporção máxima de contraste possível é de 21:1, e corresponde ao contraste entre preto (`#000`) e branco (`#fff`).

### Componentes da Interface

Para os demais componentes, se define que a relação de contraste deve ser de 3:1.

## Alternativas ao Uso de Cores

Outra consideração importante é de não utilizar a cor de um elemento como a única forma visual de transmitir uma informação. Dessa forma, usuários que tenham dificuldade para distinguir entre certas cores não são prejudicados. Como exemplo, considere uma página que exibe uma lista de tarefas. Cada tarefa possui ainda um indicador visual, que informa se a tarefa foi realizada ou não com sucesso. Em tarefa bem sucedida o indicador é verde, em caso de falha, vermelho. Essa lista poderia inicialmente ser projetada como na imagem a seguir:

![Lista com indicativos de cores]({{ '/images/alt_color_base.png' | url }})

Agora, considere como essa mesma tela seria visualizada por três usuários com tipos diferentes de daltonismo. O primeiro possui protanopia, onde há dificuldade em distinguir cores vermelhas. O segundo possui deuteranopia, onde há dificuldade em distinguir cores verdes. Por fim, o último usuário possui acromatopsia, uma forma mais rara de daltonismo onde não é possível perceber cores.

![Lista com indicativos de cores, simulação de daltonismo]({{ '/images/colorblind_view.png' | url }})

Uma solução simples seria adicionar ao indicador um ícone, ou até mesmo texto para cada status, permitindo identificar se uma tarefa foi ou não concluída sem depender unicamente da cor da tarefa.

Esse mesmo tipo de pensamento se aplica a elementos gráficos mais complexos, como gráficos, por exemplo.