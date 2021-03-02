---
title: "Tecnologias Assistivas e Estratégias Adaptivas"
description: "Entender as diferentes maneiras que os usuários
interagem com a Web é essencial para a construção de sites
mais acessíveis. Essa seção apresenta algumas técnicas e
ferramentas utilizadas no dia a dia de usuários com deficiências."


eleventyNavigation:
  key: Tecnologias Assistivas
  parent: Tecnologias
---

No contexto de software, tecnologias assistivas são as ferramentas de software ou hardware que facilitam ou viabilizam a interação de usuários com necessidades especiais com os produtos de software. Essas tecnologias incluem:

- Ampliadores de tela
- Alternativas a teclados e mouses tradicionais
- Software de reconhecimento de fala
- Leitores de tela

As diferentes técnicas utilizadas pelos usuários para melhorar a interação também devem ser consideradas. Essas técnicas podem envolver o uso de tecnologias assistivas ou apenas envolver customizações de uma página ou programa, como aumentar o tamanho de uma fonte ou alterar o esquema de cores de uma aplicação. O conjunto dessas técnicas é conhecido pelo W3C como estratégias adaptivas.

O uso dessas tecnologias e técnicas, por si só, não garante que usuários com deficiências consigam acessar e compreender corretamente o conteúdo das interfaces. Cabe aos desenvolvedores projetar páginas que possam ser utilizadas corretamente por essas tecnologias. Algumas considerações que devem ser levadas em conta ao pensar na acessibilidade de um sistema são introduzidas a seguir.

## Navegação pelo teclado

Um grande número de usuários interage com o computador apenas através
do teclado (ou através de alguma ferramenta que simule o comportamento de um teclado).
Garantir que o conteúdo de uma página seja completamente perceptível e interativo pelo teclado é especialmente importante para usuários com deficiências motoras e visuais, mas também beneficia pessoas que não possam utilizar um mouse temporariamente, ou apenas prefiram navegar pelo teclado.

Vários dos exemplos desse apoio estão relacionados à navegação por teclado, mas de forma geral dois aspectos podem ser destacados: permitir o foco correto dos elementos da página e prover uma ordem lógica de navegação.

## Leitores de Tela

Leitores de tela processam o conteúdo de uma interface e o convertem em voz. São utilizados em sua grande maioria por pessoas com deficiências visuais, mas também auxiliam usuários com deficiências cognitivas ou de aprendizado que possuam dificuldades para ler. Garantir que uma aplicação seja acessível para leitores de tela exige uma série de cuidados de implementação, e por isso é interessante entender como os mesmos funcionam e saber utilizá-los de forma básica.

### Considerações Gerais

Uma página da Web acessada através de um leitor de tela é percebida de uma forma consideravelmente diferente em relação ao acesso padrão em um navegador. Muitas dessas particularidades vão ser tratadas a fundo na seção de exemplos do apoio, mas desde já é importante ter três aspectos em mente:


- O conteúdo é processado linearmente, na maior parte das vezes de acordo com a ordem de declaração dos elementos no HTML. Essa característica leva a uma forma de percepção diferente daquela de um usuário com visão. Garantir que essa ordem faça sentido é essencial para a compreensão adequada do conteúdo de uma página.
- A navegação é realizada principalmente através do teclado, com atalhos variados para facilitar o acesso ao conteúdo. Para isso é importante que os elementos da página tenham sentido semântico, permitindo, por exemplo, que um usuário navegue apenas através dos cabeçalhos de uma página ao invés de ouvir a página em sua ordem linear completa até alcançar uma informação desejada.
- Os elementos visuais de uma página, como imagens e gráficos, não são transmitidos. Por isso, é importante sempre prover alternativas textuais para os elementos visuais relevantes.

### Sistemas Operacionais

Hoje em dia existem leitores de tela para os principais sistemas operacionais, tanto em Desktop como Mobile. Os exemplos presentes nesse site foram construídos e testados utilizando vários deles, sempre que possível.

#### Windows

O Windows apresenta variedade de escolhas de leitores de tela. Apesar de já possuir um leitor integrado ao sistema, o Windows Narrator, a maioria dos usuários está dividida entre outras duas ferramentas: o NVDA e o JAWS. Para a construção deste apoio, foi utilizado o NVDA, que é gratuito.

O Windows representa a maior parcela de usuários que necessitam de leitores de tela, então é importante garantir que as páginas construídas sejam acessíveis para as suas principais ferramentas.

#### macOS

Computadores Mac já possuem um leitor de tela integrado ao próprio sistema operacional, o VoiceOver. Esse é o mesmo leitor utilizado no iOS. Usuários de Mac representam uma parcela menor em comparação aos usuários de Windows, mas ainda relevante.

#### Linux

Atualmente, sistemas com Linux representam uma parcela muito pequena de usuários de leitores de tela. O leitor mais comumente visto nas diferentes distribuições é o Orca, mantido pelo GNOME.

#### Sistemas Mobile

Tanto o Android quanto o iOS possuem leitores de tela integrados aos seus sistemas: o Talkback para Android, e VoiceOver para iOS (o mesmo que no Mac). Eles apresentam algumas diferenças de uso em comparação com leitores para Desktop, considerando as particularidades de uma tela touch.

De forma geral, esses leitores são operados através de gestos na tela, como deslizar para a direita para ler o próximo elemento na tela, ou deslizar para a esquerda para ler o elemento anterior. Ações como pressionar um botão podem ser realizadas ao tocar duas vezes a tela. Essas interações não precisam ser realizadas na posição visual do elemento na tela - qualquer parte da tela pode ser tocada para ativar o botão, por exemplo.

## Outros Recursos

- As informações sobre uso de leitores de tela em cada sistema operacional foram retiradas de []().