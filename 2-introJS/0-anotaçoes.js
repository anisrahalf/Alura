Substituindo palavras com String replace
Se queremos pegar os números brutos do usuário e converter para a versão com a formatação, ou mascara de campo.
Uma solução ultra direta para resolver o problema, pode ser pegarmos o valor que queremos modificar e aplicar a função .replace das strings em cima dele.

const CPFSemFormatacao = 'cpf é 25684677037'

  const CPFFormatado = CPFSemFormatacao.replace('25684677037', '256.846.770-37') 

  console.log(CPFFormatado) 
  // O retorno será 'cpf é 256.846.770-37'

  A função .replace recebe como parâmetros o padrão que estamos procurando e como segundo parâmetro o que queremos colocar no lugar


  const frase = 'Frase com uma palavra-feia'

  frase.replace('palavra-feia', '********') 

  console.log(frase) // O retorno seria 'Frase com uma ********')
  Substituindo todas as ocorrências com o apoio das Regex
A ideia anterior de excluir palavras de um texto funciona super bem, mas se a palavra aparecer duas vezes no texto, começaremos a ter problemas:

  const frase = 'Frase com uma palavra-feia e tem outra palavra-feia no final'

  const fraseAtualizada = frase.replace('palavra-feia', '********') 
  console.log(fraseAtualizada) // O retorno seria "Frase com uma ******** e tem outra palavra-feia no final"
Repare que na segunda ocorrência da palavra que queremos remover da frase a função replace não fez nada. Isso ocorre porque quando o primeiro parâmetro da função replace é uma string, ela sempre busca a primeira ocorrência no texto base para o valor buscado. Para ter algo mais dinâmico vamos precisar recorrer ao poder das Expressões Regulares, que em resumo nos ajudam a encontrar padrões em texto de uma forma muito mais completa.

Para resolver nosso problema anterior, basta trocarmos o primeiro parâmetro passado para o replace de 'palavra-feia' para /palavra-feia/g. O g no final da regex indica que queremos buscar de forma global no texto base.

  const frase = 'Frase que começa com um palavra-feia e tem outra palavra-feia no final'

  const fraseAtualizada = frase.replace(/palavra-feia/, '********') 
  console.log(fraseAtualizada) // "Frase que começa com um ******** e tem outra ******** no final"
  Regex: expressões regulares
Muitos desenvolvedores, quando precisam trabalhar com Regex (regular expressions), costumam pensar "Eu sempre aprendo quando vou usar e esqueço logo em seguida". No dia a dia realmente na maioria dos casos nós não usamos Regex e se formos utilizar talvez valha mais a pena uma lib de validação como a Yup ou Joi. De todo caso, vamos dar uma relembrada que irá ser essencial para conseguirmos lidar com o caso do CPF aqui do post:

As Regex procuram padrões, a forma mais direta é escrever a própria palavra que você deseja encontrar:

/palavra/

o mesmo funciona para números:

/12345679810/

Porém, se você quiser algo mais abrangente com caracteres especiais e tudo mais, onde a ordem não importe, será necessário definir um range de caracteres:

[A-Z0-9!-]

E ainda no exemplo anterior, para pegar mais de um caracter é necessário declarar quantas ocorrências você procura:

[A-Z0-9!-]{3}

Também é possível simplificar, para capturar somente caracteres alfa numéricos você pode usar:

\w

Já para capturar caracteres referentes a digitos você pode usar:

\d

E caso você queira capturar grupos dentro de um match de regex para poder trabalhar melhor como veremos nos próximos exemplos, podemos utilizar os parenteses:

(\d{4})-(\d{4})

Existem outros casos como utilizar a "?" para alguma parte da regex ser opcional, os marcadores de começo "^" e fim "$", mas isso tudo renderia uma série de posts ou mesmo um curso.
Resgatando group matches com a função replace
Agora que relembramos um pouco mais sobre as expressões regulares, podemos usar a ideia de procurar padrões encaixando em grupos e usar no segundo parâmetro do .replace o "$" seguido do número correspondente ao grupo na ordem em que a Regex foi escrita:

  const cpf = '12345679810'

  const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, "$1.$2.$3-$4")

  console.log(cpfFormatado) // O retorno seria 256.846.770-37
  Caso você queira fazer algo mais complexo e somente passar uma string resgatando os grupos não seja o suficiente, você também pode passar uma função no lugar da string no segundo parâmetro:

  const cpf = '12345679810'

  const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, function(matchDaRegex, grupo1, grupo2, grupo3, grupo4) {
    console.log(arguments) // é uma forma de visualizar todos os parâmetros que essa função está recebendo, o numero de grupos pode variar e assim fica fácil de debugar.
    return `${grupo1}.${grupo2}.${grupo3}-${grupo4}`;
  })

  console.log(cpfFormatado) // O retorno seria 256.846.770-37
  Métodos de String
Há muitos métodos essenciais na String, alguns outros interessantes:

split: É ultra útil quando você quer quebrar uma string em uma ou mais partes agrupadas em um array.
trim: É muito usada ao receber um input do usuário para remover espaços em branco antes do começo da string e após o último caracter que não seja um espaço em branco.
includes: Essa é minha função favorita das strings, ela retorna true ou false se houver ou não, respectivamente, na string base o valor que você passa como argumento para o .includes().
https://regex101.com/
