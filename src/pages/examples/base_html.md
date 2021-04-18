---
title: "Definições básicas de HTML"
description: "Mesmo antes de começar a implementar o conteúdo de um site, algumas definições da estrutura básica do HTML influenciam em questões de acessibilidade importantes."
eleventyNavigation:
  key: HTML Básico
  parent: Exemplos
  order: 0
---

```html
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <header>...</header>
  <nav>...</nav>
  <main>...</main>
  <footer>...</footer>
</body>
</html>
```

## Definir o idioma do documento

O atributo `lang` da tag html define o idioma padrão para todo o documento. Isso é importante para que leitores de tela e outras tecnologias possam processar corretamente o documento, com a pronúncia adequada do texto.

Os dois trechos de áudio a seguir demonstram o funcionamento do leitor de tela NVDA, lendo os cabeçalhos desta página. Em ambos os exemplos, o leitor de tela está configurado em inglês. No primeiro trecho, a página estava com `lang=pt`. Note como o áudio alterna entre duas vozes: uma em português, anunciando o conteúdo do texto, e a voz padrão em inglês anunciando o nível dos cabeçalhos.

Já no segundo exemplo, a página estava com `lang=en`. Nesse caso, apenas a voz em inglês é utilizada, e a compreensão do conteúdo é prejudicada.

<audio src="{{ '/audio/correct-lang.mp3' | url }}" controls></audio>
<audio src="{{ '/audio/incorrect-lang.mp3' | url }}" controls></audio>

## Ajustar a tag de viewport do documento

A tag de viewport é importante para definir a escala de apresentação da interface em diferentes telas. Ao utilizar `width=device-width`, o conteúdo é ajustado para a largura real do dispositivo, evitando situações como uma interface aparecendo reduzida em telas de celular, por exemplo. Além disso, é importante permitir que o usuário consiga dar zoom na tela, evitando utilizar o atributo `user-scalable=no`. Como referência, veja como esta página seria apresentada em uma tela de celular, removendo a tag de viewport.

![Página sem definição de viewport]({{ '/images/no_viewport.jpg' | url }})


## Referências

- [WAI - HTML page has lang attribute](https://www.w3.org/WAI/standards-guidelines/act/rules/html-page-lang-b5c3f8/)

- [WAI - meta viewport allows for zoom](https://www.w3.org/WAI/standards-guidelines/act/rules/meta-viewport-b4f0c3/)