O ES6 introduziu o conhecido Template String ou Template Literals,
 onde conseguimos criar cadeias de caracteres,
 utilizando outra forma de interpolação que não fosse o sinal de +.

Como faríamos uma interpolação da maneira antiga?

const palavra = ‘interpolada’;

console.log(“Minha string “ + palavra);

/* É necessário deixar um espaço no final da string, caso contrário a

palavra **string** e **interpolada** apareceriam juntas. */
As coisas tendem a ficar mais complexas quando envolvemos mais variáveis e 
expressões no nosso código, como podemos fazer atualmente ?
Usando Template Literal
Para utilizarmos uma Template Literal, é necessário utilizarmos o
 backtick (acento grave da língua portuguesa), para realizar a interpolação, 
 utilizamos a notação de ${}

const palavra = ‘interpolada’;

console.log(`Minha Template Literal ${palavra}`); 

//saída: “Minha Template Literal interpolada
O que poucas pessoas conhecem é a possibilidade de utilizarmos esse Template
junto de uma função criada para trabalhar no contexto desse Template.
Definição
Uma Tagged Template é uma chamada de função onde os argumentos são derivados 
de uma Template Literal. Os valores desses argumentos incluem um 
Template Object (que nada mais é do que o objeto representativo das 
	Template Literals) e os valores produzidos após avaliação das expressões
	 embutidos em uma Template Literals (${})

Essa possibilidade acaba sendo ignorada pela maioria dos desenvolvedores.

Mas o que é essa Tag que é mencionada no nome? O que essa definição acima
 quer dizer?

Vamos por partes…
Tag
A tag nada mais é do que a própria função que será chamada através da utilização da Template Literals. Vamos ao exemplo para ficar mais claro.

Estamos mais acostumados a ver chamadas de funções dessa forma:

minhaFunction = (texto) =>{
    console.log(texto);
}

minhaFunction( ‘texto como parâmetro’ );

// A saída é a string ‘texto como parâmetro’
Porém, utilizando Tagged Template Literals, nossa chamada para a função seria executada da seguinte maneira:

minhaFunction`texto como parâmetro`;
Naturalmente pensamos que as duas chamadas são equivalentes, porém isso NÃO é verdade.

O que ocorre é que quando utilizamos Template Literals para realizar a chamada de uma função, o parâmetro pode ser passado de duas formas.

Quando nossa Template Literals é composta apenas de uma string, sem a necessidade de se avaliar valores de variáveis interpoladas, nosso parâmetro é um array, veja abaixo:

//As duas chamadas abaixo são equivalentes!

minhaFunction([‘texto como parâmetro’]);
minhaFunction`texto como parâmetro`;
Repare que recebemos o parâmetro sendo um array, de fato, isso não é algo trivial, mas calma!

Tem explicação!

Lembra lá em cima no começo do texto quando relembramos Template Literals (Template Strings)?

Uma dos poderes desse Template Literals é a capacidade de interpolar os valores de variáveis e é justamente por isso que recebemos um array como parâmetro.

Vamos ao exemplo, reescrevendo nossa função:

minhaFunction = (arrayDeStrings, palavra) =>{
    console.log(`${arrayDeStrings[0]}${palavra}${arrayDeStrings[1]}`);
}

const palavra = 'alura';

minhaFunction`Eu estudo na ${palavra} todos os dias`;
Quando utilizamos a notação ${} no meio de uma sentença, nossa string é quebrada ao meio, vamos ver como seria uma função semelhante utilizando a notação que conhecemos.

minhaFunction = (arrayDeStrings, palavra) =>{
    console.log(`${arrayDeStrings[0]}${palavra}${arrayDeStrings[1]}`);
}

const palavra = 'alura';

minhaFunction(['Eu estudo na ', ' todos os dias'], palavra);
Veja agora que na verdade, temos um Array de cadeias de caracteres e essas cadeias são determinadas pelo posicionamento da nossa interpolação!

Analogamente, todos os valores interpolados são passados um a um após o Array, respeitando a ordem em que aparecem na Template Literals, veja o exemplo abaixo:

minhaFunction = (arrayDeStrings, palavra, periodo) =>{
    console.log(`${arrayDeStrings[0]}${palavra}${arrayDeStrings[1]}${periodo}`);
}

const palavra = 'alura';
const periodo = 'semana';

// As duas chamadas são equivalentes!

minhaFunction`Eu estudo na ${palavra} todos os dias da ${periodo}`;

minhaFunction([‘Eu estudo na ' ,' todos os dias da '' ], palavra, periodo);
Pegou a ideia?

Mas agora vem a pergunta que não quer calar…

Onde posso utilizar Template Literals? Vamos ver alguns usos bacanas!
Colocando a mão na massa
Vamos criar um método que irá destacar uma frase em negrito (tag strong) tudo que for passado através de ${}

function negrito(arrayStrings, ...valores) {

     return arrayStrings.reduce((acumulador, string, i) => {
      return `${acumulador}${string}${valores[i] ? `<strong>${valores[i]}</strong>` : ''}`;
    }, '');
}

const nome = 'Paulo Scalercio';
const redeSocial = '@PauloScalercio';

console.log(negrito`${nome} trabalha na Caelum/Alura como desenvolvedor e instrutor e você pode encontrá-lo nas redes sociais procurando por ${redeSocial}`);
Nosso método utiliza spread operator para receber um número variável de valores interpolados e uma lógica utilizando reduce, onde acumulador é o valor retornado no último callback, string é o valor atual e i é o índice do elemento que está sendo processado.

No nosso caso, o reduce retornará uma string com os valores que foram interpolados, envolvidos pela tag strong do HTML. Repare que o retorno do nosso método é justamente os valores interpolados envolvidos por uma tag strong! Sensacional! Esse foi apenas um pequeno exemplo do que podemos fazer com Tagged Template Literals.

No mundo React, vemos bastante Tagged Template Literals quando utilizamos styled-components em nosso projeto.
Conclusão
Apesar de não ser amplamente utilizado entre os desenvolvedores, é importante termos grande parte das ferramentas da linguagem em nosso cinto de utilidades, já que nunca sabemos quando poderemos precisar.

Definir se Tagged Literals será algo popular cabe a nós desenvolvedores, portanto, deve partir de cada um optar por usar ou não essa funcionalidade.

Se ficou interessado em como o Javascript funciona e como você pode utilizá-lo melhor, aqui na Alura temos uma formação engenheiro front-end. Nela, você verá como programar em Javascript, e conhecer algumas novidades do ES6.
