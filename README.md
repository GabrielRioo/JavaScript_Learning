## Conceitos JavaScript
`<varName>.addEventListener('click', <functionName>);` - Ao clicar. <br>
`<varName>.textContent = 'Jogador 1: ' + <varName>;` - Muda o texto <br>
`ment.createElement('p')` - Cria um novo paragrafo. <br>
`.textContent = ' ' ` - Escreve um texto <br>
`<script src="script.js" defer></script>` - defer - renderiza o HTML sempre que o JS for atingido <br>
O _"defer"_, funciona com **scripts externos** <br>
O _"DOMContentLoaded_ funciona com **scripts internos** - Significa que todo o HTML ja foi carregado
<br>
<br>
`<script src="script.js" defer>` - Executados na ordem de colocação. Inicializados depois de baixar o HTML. Se seus scripts dependem de outros scripts ou do DOM completamente disponível em tela
`<script src="script.js" async>` - Executados de formas aleatorias. Precisar de scripts q sejam inicializados antes. Se os seus scripts precisam rodar imediatamente, sem que dependam de outros para serem executados

#### Eventos:
`<varName>.addEventListener('click', <callFunction>)` - Ouve o clique do mouse <br>

Quando o codigo HTML tiver pronto, tudo q estiver dentro desse metodo, é executado. <br>

```
document.addEventListener("DOMContentLoaded", function() {
  ...
});
```


#### Funções - metodos:
`.toLowerCase()` - poe as letras em minusculo <br>
`.toUpperCase()` - poe as letras em maiuculo <br>
`.replace('G', 'C')` - substitui a primeira letra G por C <br>
`.toFixed(2)` - Mostra um float com 2 casas decimais. <br>
`Math.round(Math.random() * 10)`- Numeros aleatorio entre 0 e 10 <br>
`alert()` - mensagem pop up (apenas ok) <br>
`confirm()` - mensagem pop up (confirmar ou cancelar) <br>
`console.log()` <br>
`console.error()` <br>
`console.warm()` <br>
`console.info()` <br>
```
function multNumbers(x, y) {
  let result = x * y;
  return result
}
multNumbers(7, 5);
```

```
let mult = function(x,y){
  let result = x * y;
  return result
}
mult(2,5);
```

```
let objMult = {
  func: function(x,y);
    let result = x * y;
    return result
}
objMult.func(4,2);
```
**Função aninhada:** tudo da função externa, a interna tem acesso.
```
function myName(val){
  let name = 'Gabriel';
  
  function setName() {
    console.log(name);
  }
  setName();
}
myName(1);
```

**Arrow Functions**
```
let sumArrow = (x,y) => {
  return x + y;
}
sumArrow(3,4)
```

```
let sumArrow = (x,y) => x + y {
}
sumArrow(3,4)
```
