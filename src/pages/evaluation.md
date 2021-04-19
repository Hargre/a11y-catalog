---
title: "Métodos de Avaliação"
description: "A acessibilidade de um sistema pode ser avaliada de diversas formas. Cada uma apresenta vantagens e limitações específicas. Uma avaliação completa deve fazer uso de várias técnicas sempre que possível."
eleventyNavigation:
  key: Métodos de Avaliação
  order: 4
---

## Inspeções e testes automatizados
Inspeções de acessibilidade consistem em avaliar a conformidade de um software com um padrão definido de regras, como o WCAG. Muitas vezes, avaliações desse tipo podem ser até mesmo um requisito exigido legalmente.

Nesse contexto, existem várias ferramentas automatizadas para averiguar a acessibilidade de um sistema. Exemplos dessas ferramentas incluem o [WAVE](https://wave.webaim.org/), já apresentado, e o [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), que atribui uma nota de 0 a 100 para a acessibilidade da página.

Embora úteis para identificar rapidamente problemas corrigíveis, essas ferramentas conseguem verificar apenas um escopo reduzido de falhas de acessibilidade, e não tem capacidade de compreender o contexto necessário para avaliações mais profundas. É importante ter em mente que os resultados de testes automatizados e de inspeções de conformidade **não** são suficientes para dizer que uma página é acessível, especialmente por tratar de um domínio naturalmente subjetivo.

## Screening techniques
Screening techniques são atividades realizadas de forma interna entre a equipe de desenvolvimento, que envolvem o uso do sistema a ser testado enquanto o testador tem uma ou mais de suas habilidades físicas ou sensoriais reduzidas artificialmente. Por exemplo, um testador pode desligar o monitor ou usar uma venda e tentar utilizar o software com um leitor de tela.

Esses tipos de teste são rápidos e simples de serem executados, e permitem identificar falhas básicas ainda nos estágios iniciais do desenvolvimento. Apesar disso, o feedback obtido nesses testes não se compara ao obtido em testes com usuários reais, e screening techniques não devem ser vistas como simulações. Usuários reais vão possuir um nível de familiaridade e experiência muito maior com o uso de tecnologias assistivas.

## Testes de usabilidade
Testes com usuários são uma forma extremamente eficaz de se obter feedback sobre a usabilidade e acessibilidade de um sistema. Eles exigem maior esforço para preparação e execução em comparação às técnicas anteriores, mas permitem identificar problemas que passam despercebidos em avaliações de conformidade. Por causa disso, é interessante realizar esse tipo de teste após a aplicação de algumas das outras técnicas, já havendo garantido um nível mínimo de acesso ao sistema de forma geral. Dessa forma, as sessões com os usuários podem ser mais bem aproveitadas para investigar questões mais específicas.

A seguir são apresentadas algumas referências e guias para a condução de testes de usabilidade, tanto no contexto específico da acessibilidade quanto de forma mais geral:

- [Web Accessibility Initiative - Involving Users in Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/involving-users/)

- [Accessibility in User-Centered Design: Usability Testing](http://uiaccess.com/accessucd/ut.html)

- [Guia de Contribuição para Testes de Usabilidade](https://github.com/clarissalimab/ux/blob/main/CONTRIBUTING.md)
