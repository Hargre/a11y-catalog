---
title: "Tabelas"
description: "."
eleventyNavigation:
  key: Tabelas
  parent: Exemplos
  order: 5
---

## Recomendações básicas

Como a maioria dos elementos básicos do HTML, tabelas são bastante acessíveis por padrão. Como sempre, utilizar a semântica adequada dos elementos é essencial.

### Definir cabeçalhos

Tabelas devem usar a tag `th` para marcar corretamente seus cabeçalhos. Isso vale tanto para cabeçalhos de colunas quanto de linhas. Não é incomum encontrar páginas com tabelas que não definem corretamente essas tags. Isso gera grandes problemas para usuários com leitores de tela, pois se torna muito difícil de compreender ao que um elemento de uma tabela se refere.

- [Exemplo correto de uso de tabelas]({{ '/examples/tables/correct-th' | url }})
- [Exemplo incorreto de uso de tabelas]({{ '/examples/tables/correct-th' | url }})

Também é útil adicionar aos cabeçalhos o atributo `scope`. Ele aceita dois valores, `row` ou `col`, e permite identificar se um cabeçalho se refere aos elementos naquela coluna ou naquela linha. Isso pode ajudar a evitar interpretações erradas de leitores de tela em situações ambíguas. A tabela dos exemplos anteriores poderia ser atualizada para considerar células da primeira coluna como cabeçalhos com `scope=row`. Veja no exemplo a seguir como as células são anunciadas com um leitor de tela ativado.

- [Exemplo de tabela com scope]({{ '/examples/tables/multiple-th' | url }})

## Referências

- [Techniques for WCAG 2.0 - Using table markup to present tabular information](https://www.w3.org/TR/WCAG20-TECHS/H51.html)
- [Techniques for WCAG 2.0 - Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/TR/WCAG20-TECHS/H43.html)
- [Techniques for WCAG 2.0 - Using the scope attribute to associate header cells and data cells in data tables](https://www.w3.org/TR/WCAG20-TECHS/H63.html)