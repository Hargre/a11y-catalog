Os exemplos dessa página não tratam de um componente específico, mas sim de questões de usabilidade mais gerais, que ainda assim tem um impacto considerável na acessibilidade.

## Popups

O uso inadequado de popups é uma das práticas mais comuns e incômodas da internet moderna. Popups são utilizados para uma grande variedade de propósitos, mas muitas vezes acabam por irritar e distrair usuários.

Considerações gerais:

- Mostrar popups apenas em momentos que fazem sentido
- Não agrupar sequências de popups ao mesmo tempo
- Considerar alternativas menos intrusivas

Uma exceção: situações em que uma ação imediata do usuário é necessária para poder utilizar a página. Um exemplo relevante atualmente é quanto ao uso de avisos de cookies.

## Animações

Animações são utilizadas em diversos contextos na web moderna, e podem trazer benefícios de usabilidade. Se implementadas sem cuidado, no entanto, podem causar vários tipos de problemas. Usuários com distúrbios de equilíbrio podem se sentir desorientados, ter náusea e dores de cabeça com certos tipos de animações. Usuários com epilepsia e enxaquecas também são suscetíveis a crises. Pessoas com transtornos como déficit de atenção podem ter dificuldades de concentração com animações excessivas. Alguns cuidados gerais incluem:

- Evitar movimentos bruscos, rápidos ou que movimentam uma grande área da tela
- Permitir que o usuário tenha controle sobre as animações da página
- Utilizar a media query `prefers-reduced-motion` para remover ou reduzir a duração de animações.

## Captchas

O uso de Captchas é problemático por uma variedade de razões. Implementações que apresentam imagens com palavras ou textos a serem digitados são obviamente inacessíveis para usuários cegos, pois a existência de um texto alternativo seria identificada por bots, quebrando o propósito do Captcha. Além disso, as distorções aplicadas às palavras podem causar grandes dificuldades para usuários com outras deficiências visuais e usuários com deficiências cognitivas. Alternativas que utilizam áudio, por sua vez, apresentam barreiras similares para usuários com deficiências auditivas.

[Listar métodos alternativos e recaptcha3, com nota de privacidade]
