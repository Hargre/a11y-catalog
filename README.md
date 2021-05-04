# Catálogo de práticas de acessibilidade - Um apoio online voltado à acessibilidade da Web

Esse repositório contém o apoio online desenvolvido como trabalho de conclusão do curso de Engenharia de Software na UnB. O apoio visa trazer materiais informativos, dicas e exemplos sobre o tópico da Acessibilidade em software, mais em específico, a Acessibilidade da Web.

## Instalação e execução

É necessário ter o Node.js instalado.

Para instalar as dependências:

`npm install`

Para rodar o projeto:

`npm start`

## Contribuindo

O apoio é livre e de código aberto, disponível para melhorias e sugestões! Todo o conteúdo textual do apoio é construído em Markdown, e os exemplos em código utilizam puramente HTML, CSS e JavaScript.
Para adicionar um novo artigo, basta criar um novo `.md` na pasta `pages` (ou em uma de suas subpastas, como `examples`) e adicionar o texto em Markdown. Links internos (para imagens ou páginas contidas dentro do apoio) podem ser adicionados pela seguinte sintaxe:

`![Descrição da Imagem]({{ '/images/<nome da imagem>' | url }})`
`[Descrição do Link]({{ '<caminho para o documento>/<nome do documento>' | url }})`

Para qualquer outro problema, sinta-se livre para abrir uma [issue](https://github.com/Hargre/a11y-catalog/issues/new)!
