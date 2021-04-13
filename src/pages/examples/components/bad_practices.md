---
title: "Padrões a se evitar"
description: "Os exemplos dessa página não tratam de um componente específico, mas sim de grupos de práticas mais gerais, que ainda assim tem um impacto considerável na acessibilidade e na usabilidade dos sistemas como um todo."
eleventyNavigation:
  key: Padrões a se evitar
  parent: Componentes Interativos
  order: 4
---

## Popups

O uso inadequado de popups é uma das práticas mais comuns e incômodas da internet moderna. Popups são utilizados para uma grande variedade de propósitos, mas muitas vezes acabam por irritar e distrair usuários.

A seguir são apresentadas algumas considerações gerais sobre seu uso.

### Mostrar popups apenas em momentos que fazem sentido

Na maior parte das vezes, popups não devem ser exibidos repentinamente, sem uma ação coerente que leve à sua exibição. Seu disparo deve ser relacionado à alguma interação ocorrida na interface, e não arbitrariamente ao carregar a página ou no meio da leitura de um texto, por exemplo.

Apesar disso, existe uma exceção: situações em que uma ação imediata do usuário é necessária para poder utilizar a página. Um exemplo relevante atualmente é quanto ao uso de avisos de cookies. Em vários lugares, esses avisos são considerados obrigatórios por lei, e a permissão ou não do usuário pode ser necessária para o funcionamento correto da página. Em algumas implementações, usuários de tecnologias assistivas nem mesmo ficam cientes da existência do aviso. Nesses casos, pode-se considerar exibir o aviso imediatamente como uma modal, trazendo o foco diretamente para o início da mensagem. Este apoio contém um [exemplo de implementação de uma modal acessível]({{ 'modal' | url }}).

### Considerar alternativas menos intrusivas

De forma geral, popups modais devem ser apresentados para exibir informações essenciais ou exigir algum tipo de interação necessária para a execução de uma tarefa no site ou aplicativo. Como sua presença interrompe o fluxo normal da página e retira a atenção do usuário, seu uso deve ser restrito a esse tipo de cenário. Em situações menos drásticas podem ser usados popups não-modais, que ocupem um pequeno espaço da página sem obstruir o conteúdo principal, ou simplesmente apresentar a informação no próprio conteúdo, de forma destacada.


## Animações

Animações são utilizadas em diversos contextos na web moderna, e podem trazer benefícios de usabilidade. Se implementadas sem cuidado, no entanto, podem causar vários tipos de problemas. Usuários com distúrbios de equilíbrio podem se sentir desorientados, ter náusea e dores de cabeça com certos tipos de animações. Usuários com epilepsia e enxaquecas também são suscetíveis a crises. Pessoas com transtornos como déficit de atenção podem ter dificuldades de concentração com animações excessivas. Alguns cuidados gerais incluem:

- Evitar movimentos bruscos, rápidos ou que movimentam uma grande área da tela. Movimentos de scroll no sentido horizontal são especialmente ruins.
- Permitir que o usuário tenha controle sobre as animações da página. Isso pode incluir medidas como adicionar controles de pause/stop para uma animação específica, ou configurações que reduzam ou desabilitem o uso de animações no site como um todo.
- Utilizar a media query `prefers-reduced-motion` para remover ou reduzir a duração de animações. Essa media query consulta as preferências de animação configuradas pelo usuário no sistema operacional.

## Captchas

O uso de Captchas é problemático por uma variedade de razões. Implementações que apresentam imagens com palavras ou textos a serem digitados são obviamente inacessíveis para usuários cegos, pois a existência de um texto alternativo seria identificada por bots, quebrando o propósito do Captcha. Além disso, as distorções aplicadas às palavras podem causar grandes dificuldades para usuários com outras deficiências visuais e usuários com deficiências cognitivas. Alternativas que utilizam áudio, por sua vez, apresentam barreiras similares para usuários com deficiências auditivas.

Entre as soluções existentes atualmente, o [reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3) é a menos intrusiva em termos de usabilidade. Ele analisa o comportamento do usuário no fundo, sem necessidade de interação, e atribui uma nota. Essa nota indica a probabilidade daquele usuário ser ou não um bot, e com base nesse valor o desenvolvedor pode tomar as medidas necessárias. Entretanto, vale ressaltar que essa abordagem, embora eficiente, levanta questionamentos quanto à privacidade dos usuários.
