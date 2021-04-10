---
title: "Tecnologias de Apoio"
description: "Existem várias ferramentas que podem auxiliar com questões de acessibilidade
ao longo do ciclo de desenvolvimento. Algumas podem ser aplicadas desde o protótipo da interface,
outras permitem verificar a conformidade das páginas com as normas existentes. A seguir serão
apresentadas algumas dessas ferramentas."
eleventyNavigation:
  key: Tecnologias de Apoio
  parent: Tecnologias
  order: 0
---

## Verificadores de Contraste e Cores

A escolha adequada de cores em uma página é um fator importante para a acessibilidade. A falta de
contraste entre a cor de um texto e seu plano de fundo pode dificultar a compreensão do conteúdo
para um grande número de usuários, impactando não apenas a acessibilidade como a usabilidade geral de
uma página.

Existem várias ferramentas que auxiliam a verificar o contraste de cores em uma interface, mesmo
antes da sua implementação em código. Por exemplo, na construção do protótipo deste apoio foi utilizado [um plugin](https://www.figma.com/community/plugin/734693888346260052) na plataforma Figma que informa o contraste entre dois elementos selecionados, de acordo com os valores recomendados pelo WCAG.

![Execução do plugin de contraste no Figma]({{ '/images/contrast_plugin.png' | url }})


O uso de cores para transmitir informações, sem utilizar de outros complementos visuais,
também pode dificultar ou impossibilitar a compreensão do conteúdo por usuários com dificuldades
para distinguir certas variações de cores. Para o protótipo deste apoio também se utilizou [outro plugin](https://www.figma.com/community/plugin/733343906244951586/Color-Blind) do Figma, que permite gerar cópias do protótipo simulando vários tipos diferentes de daltonismo.

![Execução do plugin de daltonismo no Figma]({{ '/images/deute_vision.png' | url }})


A seção de exemplos do apoio contém ainda um tópico com [mais detalhes e exemplos específicos sobre o contraste e uso de cores]({{ '/pages/examples/colours' | url }}).

## Ferramentas de Avaliação

Algumas normas de acessibilidade podem ser verificadas com o auxílio de software especializado,
que analisa o conteúdo e estrutura de uma página e informam possíveis falhas.

Uma dessas ferramentas é o WAVE, que pode ser instalado como uma extensão de navegador e permite a
avaliação automática de qualquer página, de acordo com as normas do WCAG. Para cada possível falha
identificada, é apresentado um resumo da norma relevante. O plugin também permite visualizar
a estrutura hierárquica das tags da página e verificar o contraste entre as cores de texto e de fundo.

![Execução do WAVE]({{ '/images/wave_exec.png' | url }})

É importante notar, porém, que o uso dessas ferramentas não garante a acessibilidade da sua página!
Muitos problemas de acessibilidade não podem ser identificados de forma automática, pois dependem de contexto e interpretação para serem avaliados. Mais informações sobre como avaliar a acessibilidade de um site podem ser vistas em [].

## Outros recursos

- O W3C disponiliza uma relação detalhada de [ferramentas de avaliação de acessibilidade](https://www.w3.org/WAI/ER/tools/).