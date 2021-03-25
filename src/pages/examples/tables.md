---
title: "Tabelas"
description: "."
eleventyNavigation:
  key: Tabelas
  parent: Exemplos
---

## Recomendações básicas

Como a maioria dos elementos básicos do HTML, tabelas são bastante acessíveis por padrão. Como sempre, utilizar a semântica adequada dos elementos é essencial.

### Definir cabeçalhos

Tabelas devem usar a tag `th` para marcar corretamente seus cabeçalhos. Isso vale tanto para cabeçalhos de colunas quanto de linhas. Não é incomum encontrar páginas com tabelas que não definem corretamente essas tags. Isso gera grandes problemas para usuários com leitores de tela, pois se torna muito difícil de compreender ao que um elemento de uma tabela se refere.

- [Exemplo correto de uso de tabelas]({{ '/examples/tables/correct-th' | url }})
- [Exemplo incorreto de uso de tabelas]({{ '/examples/tables/correct-th' | url }})

Também é útil adicionar aos cabeçalhos o atributo `scope`. Ele aceita dois valores, `row` ou `col`, e permite identificar se um cabeçalho se refere aos elementos naquela coluna ou naquela linha. Isso pode ajudar a evitar interpretações erradas de leitores de tela em situações ambíguas. A tabela dos exemplos anteriores poderia ser atualizada para considerar células da primeira coluna como cabeçalhos com `scope=row`. Veja no exemplo a seguir como as células são anunciadas com um leitor de tela ativado.

- [Exemplo de tabela com scope]({{ '/examples/tables/multiple-th' | url }})


## Responsividade

Sempre que possível, evitar que a tabela exija scroll horizontal, mesmo em dispositivos com telas menores. Tabelas complexas podem ser reestruturadas em novas tabelas, ou ter sua estrutura visual alterada de forma flexível.

[adicionar exemplos]