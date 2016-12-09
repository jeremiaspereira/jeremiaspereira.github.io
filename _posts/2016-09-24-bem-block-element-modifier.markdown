---
layout: post
title: "BEM – Block Element Modifier"
date:  2016-09-24 16:00
description: "Vamos falar um pouco de BEM – Block Element Modifier, uma maneira de nomear as classes, facilitando o intendimento de um bloco HTML e criar menos códigos CSS."
categories: dev
---

Fazer CSS não é difícil, já deixar ele organizadinho ... É muito fácil criar regras repetidas ou subscrever regras e até forçar a barra com o !important(de vez em quando pode!).

Muitas vezes caímos na armadilha de deixar para organizar CSS depois, quando chega esse depois já tem muito estilo criado e não da mais para voltar  a trás, você vai entregar o CSS zuado e de difícil manutenção.

Um bom CSS é um CSS modularizado, assim facilita sua manutenção e o reaproveitamento de códigos.

Se você já usou o bootstrap deve ter percebido que sempre há uma classe que da identidade ao objeto e classes modificadoras.

Por exemplo um botão:

*Classe: .btn*
*Classes modificadoras: .btn-default, .btn-success, .btn-danger,.btn-primary, .btn-lg, .btn-sm, .btn-xs*

Isso é algo muito legal, a classe .btn é quem dá forma ao botão e quando se aplica uma ou mais classes modificadoras você muda a "cara" do botão. Isso é ótimo para futuras mudanças, imagine que agora nosso botão não terá mais bordas arredondadas, basta editar as regras da classe .btn ou criar um novo modificador.

Você precisa colocar em prática o DRY, códigos repetidos deixam seu site pesado e de difícil manutenção.

## BEM – Block Element Modifier

O [BEM](http://getbem.com/){:target="_blank"} não é um framework ou um punhado de códigos para usar, é uma metodologia para ajudar na reutilização de códigos de maneira modular, fácil e flexível.

Basicamente uma página web é composta de **blocos**, dentro destes temos **elementos**, os **modificadores** alteram as características desses blocos e/ou elementos.

Devemos identificar os blocos, elementos e modificadores com classes, seguindo a nomenclatura do BEM.

*.bloco__elemento--modificador*

Elementos são delimitados com dois underscores (__), e Modificadores são delimitados por dois hifens  (--).

Vamos a um exemplo simples.

<div class="codepen">
    <p data-height="265" data-theme-id="dark" data-slug-hash="NRbaym" data-default-tab="css,result" data-user="jeremiaspereira" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/jeremiaspereira/pen/NRbaym/">BEM </a> by Jeremias Pereira (<a href="http://codepen.io/jeremiaspereira">@jeremiaspereira</a>) on <a href="http://codepen.io">CodePen</a>.</p>
    <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</div>

*bloco: .list*
*elementos: .list__header, .list__item*
*modificadores: .list--blue, .list--teal*

Nesse exemplo eu usei [SASS](http://sass-lang.com/){:target="_blank"}, um pré-processador que ajuda e muito a escrever menos regras CSS entre tantas outras vantagens. Veja que crie um mixin que recebe uma cor por parâmetro e cria o CSS para o novo modelo de lista, foi apenas uma abordagem que escolhi.

Você também pode criar um mixin para criar elementos e modificadores assim:

<pre><code>
    // mixin
    @mixin element($element) {
      &__#{$element} {  @content; }
    }

    @mixin modifier($element) {
      &--#{$element} { @content; }
    }

    // exemple

    .article {
          @include element(image) {
            width:100%;

            @include modifier(fixed-w){ width:100px; }
          }
    }
</code></pre>

Ou sem usar mixin:

<pre><code>
    .block {
        $__element {

        }

        &--modifier {

        }
    }
</code></pre>

Dei uma ideia básica do BEM, fica a gosto usar ou não, quando de se trata de CSS e boas práticas o assunto é muito amplo e divergente, cada um tem sua visão, você vai ter que achar a sua no dia a dia de trabalho.

Vale como dever de casa se ainda não usa o SASS começar estudar e testar alguns códigos usando o
[sassmeister](http://www.sassmeister.com/){:target="_blank"} ou o [codepen](http://codepen.io/){:target="_blank"}, a vantagem de começar por eles é que você não precisa instalar nada para converter seu SASS para o CSS.

Quando falamos de modularização de CSS vale a pena ler um pouco sobre
[smacss](https://smacss.com/){:target="_blank"}.

Um bom guia de código é [esse](http://diegoeis.github.io/code-guide/){:target="_blank"} criado pelo [@diegoeis](https://twitter.com/diegoeis).

Fica de assim, e DRY.
