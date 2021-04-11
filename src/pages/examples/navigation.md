---
title: "Navegação"
description: "Permitir que usuários consigam navegar corretamente pelos elementos de uma página é algo básico para qualquer website. Essa seção mostra alguns cuidados para garantir que usuários com deficiências consigam localizar e interagir com mais facilidade pelos elementos da interface."
eleventyNavigation:
  key: Navegação
  parent: Exemplos
  order: 2
---

## Headings

Uma estrutura adequada de cabeçalhos permite que usuários de leitores de tela consigam obter um resumo rápido de uma página, ou navegar com mais facilidade para um tópico específico. Para que essa estrutura seja de fato acessível, alguns pontos importantes devem ser mencionados.

### Como cabeçalhos são descritos por leitores de tela

Leitores de tela possuem funcionalidades específicas para a estrutura de cabeçalhos de uma página, permitindo gerar uma tabela de tópicos. Além disso, existem atalhos específicos para navegar diretamente pelos cabeçalhos. Por exemplo, no NVDA, apertar H navega para o próximo cabeçalho, e Shift H para o cabeçalho anterior. Apertar as teclas de 1 até 6 navega para o próximo cabeçalho daquele nível. Essas funcionalidades permitem aos usuários obter rapidamente as informações relevantes de uma página sem precisar navegar por todo o conteúdo.

![Lista de cabeçalhos no NVDA]({{ '/images/nvda_headings.png' | url }})

### Utilizar as tags adequadas

Como já mencionado no [artigo sobre semântica no HTML]({{ '../semantics' | url }}), é essencial utilizar as tags com o sentido apropriado para cabeçalhos. Nesse caso, essas tags correspondem ao conjunto de `h1` até `h6`.

### Criar uma estrutura lógica de tópicos

As tags de cabeçalhos devem ser utilizadas com a intenção de descrever os blocos de conteúdo seguintes, de forma a gerar uma espécie de resumo do conteúdo da página. Essa característica também deve ser utilizada para a apresentação de hierarquia entre tópicos. Por isso, é importante que as tags sejam utilizadas respeitando essa hierarquia, sem pular níveis. Uma forma de visualizar essa estrutura e identificar possíveis erros é através do WAVE.

![Estrutura de cabeçalhos no WAVE]({{ '/images/heading-structure.png' | url }})

## Links

Links são outra forma muito comum de se facilitar a navegação através de uma página. Da mesma forma que com cabeçalhos, leitores de tela permitem passar rapidamente apenas pela sequência de links do documento. Algumas considerações para garantir que os links de uma página são acessíveis incluem:

### Controle de foco
Por padrão, links criados com a tag `a` vão possuir controle de foco adequado. Isto é, é possível alcançar um link através da tecla `Tab` e ativá-lo através da tecla `Enter`. No entanto, pode ser interessante modificar ligeiramente o estilo padrão de links em foco, de forma a melhorar sua visibilidade. Isso pode ser feito definindo um `outline` para o elemento em foco, via CSS. Por exemplo, os links da barra de navegação desse apoio possuem a seguinte folha de estilo:

```css
a:focus {
  outline: 2px dashed #004a40;
}
```

### Não usar links vazios
Um padrão muito comum é de utilizar links vazios, como `<a href="#">`, para ativar ações via JavaScript, como abrir um menu ou dropdown. Esse tipo de construção prejudica usuários de teclado e leitores de tela. Em situações desse tipo seria mais apropriado o uso de um `button`.

### Identificar a finalidade do link
Sempre que possível, o texto de um link deve conter contexto o suficiente por si só. Isso melhora a experiência de usuários de leitores de tela que estejam passando rapidamente pela relação de links da página, sem ler todo o conteúdo que precede o link. Na prática, isso quer dizer que links genéricos como "Clique aqui" ou "Mais" devem ser evitados.

## Pular blocos de conteúdo

É comum que sites possuam seções de conteúdo repetido, muitas vezes antes do conteúdo principal da página. Para usuários com visão e que não dependam do teclado para navegar, isso não é um problema. As seções menos relevantes são facilmente ignoradas e a atenção visual é quase imediatamente concentrada no bloco principal de conteúdo.

No entanto, isso pode ser um grande inconveniente para outros usuários. Usuários de leitores de tela podem precisar ouvir uma longa sequência de elementos até alcançar o assunto principal. Usuários com deficiências motoras podem precisar pressionar repetidamente botões ou teclas dezenas ou centenas de vezes até atingir o ponto desejado na página.

Uma forma simples de lidar com esse problema é criar um link no início da página, antes da seção de conteúdo repetido, que permita direcionar o usuário diretamente ao início do conteúdo principal. Isso pode ser visto em prática nesse próprio website! Recarregue a página e aperte `Tab`. Um link de "pular para o conteúdo" deve aparecer no canto superior esquerdo da tela. Ele foi implementado de forma a não aparecer por padrão, sendo visível apenas quando tiver foco do teclado e sendo anunciado por leitores de tela.
