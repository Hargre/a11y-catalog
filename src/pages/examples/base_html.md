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

[Talvez mostrar clips de áudio com o idioma errado?]

## Ajustar a tag de viewport do documento

A tag de viewport é importante para definir a escala de apresentação da interface em diferentes telas. Ao utilizar `width=device-width`, o conteúdo é ajustado para a largura real do dispositivo, evitando situações como uma interface aparecendo reduzida em telas de celular, por exemplo. Além disso, é importante permitir que o usuário consiga dar zoom na tela, evitando utilizar o atributo `user-scalable=no`.
