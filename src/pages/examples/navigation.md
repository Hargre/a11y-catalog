---
title: "Navegação"
description: "Permitir que usuários consigam navegar corretamente pelos elementos de uma página é algo básico para qualquer website. Essa seção mostra alguns cuidados para garantir que usuários com deficiências consigam localizar e interagir com mais facilidade pelos elementos da interface."
eleventyNavigation:
  key: Navegação
  parent: Exemplos
---

## Headings

Uma estrutura adequada de cabeçalhos permite que usuários de leitores de tela consigam obter um resumo rápido de uma página, ou navegar com mais facilidade para um tópico específico. Para que essa estrutura seja de fato acessível, alguns pontos importantes devem ser mencionados.

### Como cabeçalhos são descritos por leitores de tela

Leitores de tela possuem funcionalidades específicas para a estrutura de cabeçalhos de uma página, permitindo gerar uma tabela de tópicos. [Mostrar tela do NVDA].

### Utilizar as tags adequadas

Como já mencionado no [artigo sobre semântica no HTML]({{ '../semantics' | url }}), é essencial utilizar as tags com o sentido apropriado para cabeçalhos. Nesse caso, essas tags correspondem ao conjunto de `h1` até `h6`. 

### Criar uma estrutura lógica de tópicos

As tags de cabeçalhos devem ser utilizadas com a intenção de descrever os blocos de conteúdo seguintes, de forma a gerar uma espécie de resumo do conteúdo da página. Uma forma de pensar é de associar eles com o table of contents de um documento de texto. Essa característica também deve ser utilizada para a apresentação de hierarquia entre tópicos. Por isso, é importante que as tags sejam utilizadas respeitando essa hierarquia, sem pular níveis. Uma forma de visualizar isso é através do WAVE. [adicionar exemplo do WAVE].

Pensar nessa estrutura é mais simples para páginas que apresentem conteúdo principalmente textual, mas pode ser adaptada para qualquer tipo de site. Por exemplo, [adicionar exemplo menos óbvio].

## Links

- garantir foco
- não usar links vazios
- rótulos com contexto

## Pular blocos de conteúdo

É comum que sites possuam seções de conteúdo repetido, muitas vezes antes do conteúdo principal da página. Para usuários com visão e que não dependam do teclado para navegar, isso não é um problema. As seções menos relevantes são facilmente ignoradas e a atenção visual é quase imediatamente concentrada no bloco principal de conteúdo.

No entanto, isso pode ser um grande inconveniente para outros usuários. Usuários de leitores de tela podem precisar ouvir uma longa sequência de elementos até alcançar o assunto principal. Usuários com deficiências motoras podem precisar pressionar repetidamente botões ou teclas dezenas ou centenas de vezes até atingir o ponto desejado na página.

Uma forma simples de lidar com esse problema é criar um link no início da página, antes da seção de conteúdo repetido, que permita direcionar o usuário diretamente ao início do conteúdo principal. Isso pode ser visto em prática nesse próprio website! Recarregue a página e aperte `Tab`. Um link de "pular para o conteúdo" deve aparecer no canto superior esquerdo da tela. Ele foi implementado de forma a não aparecer por padrão, sendo visível apenas quando tiver foco do teclado e sendo anunciado por leitores de tela.

[adicionar exemplos]

