// // // // // // O package.json é um arquivo muito utilizado em aplicações JS modernas que guarda vários dados de nossa aplicação. O arquivo gerado para este curso tem apenas algumas informações.

// // // // // // {
// // // // // //   "name": "bytebank",
// // // // // //   "version": "1.0.0",
// // // // // //   "description": "Projeto do Bytebank para seus clientes",
// // // // // //   "main": "index.js",
// // // // // //   "scripts": {
// // // // // //     "test": "echo \"Error: no test specified\" && exit 1"
// // // // // //   },
// // // // // //   "author": "",
// // // // // //   "license": "ISC",
// // // // // //   "type": "module"
// // // // // // }COPIAR CÓDIGO
// // // // // // Algumas delas são simples de entender, como nome, versão, descrição e autor. Outras, como o campo script, já são mais difíceis de entender sem uma explicação mais detalhada.

// // // // // // Como desenvolvedores é normal queremos reaproveitar código de outras pessoas e bibliotecas que estão disponíveis para nosso time. Dessa forma, agilizamos o desenvolvimento de nossas aplicações. Mas onde podemos encontrar essas bibliotecas e código feitos pela comunidade?

// // // // // // Achamos essas bibliotecas dentro de gerenciadores de pacote – pense neles como um lugar centralizado onde toda a comunidade pode subir e compartilhar códigos para que outros desenvolvedores usem. E é justamente para organizar essa série de pacotes e bibliotecas que o package.json foi criado. Com ele é fácil de saber qual a versão do pacote, o nome dele, quem fez aquele código etc.

// // // // // // No caso do Javascript o gerenciador de pacotes mais utilizado é o NPM – Node package manager.

// // // // // // "Ok, mas e essa tag de script?"

// // // // // // Até este momento no curso não fizemos muitas operações complicadas, pois só estamos usando o terminal para chamar o interpretador do NodeJS e pedindo para ele executar o arquivo que queremos. Mas conforme nosso projeto cresce ou usamos outras bibliotecas para desenvolver a aplicação, é comum que o comando que precisamos rodar no terminal fique longo ou que ele precise de alguns parâmetros especiais. Como normalmente estamos trabalhando em equipe, não queremos que alguém na nossa equipe precise ficar perguntando o tempo todo qual o comando precisa escrever para o programa rodar. É nesse momento que usamos os scripts do package.json.

// // // // // // Podemos escrever um script com o comando que colocaríamos no terminal, por exemplo:

// // // // // // "scripts": {
// // // // // //     "start": "node index.js"
// // // // // // }COPIAR CÓDIGO
// // // // // // E ao invés de escrever esse comando podemos chamar o script com o comando npm start. Dessa forma não precisamos lembrar de todo o comando sempre que vamos executar o programa. Se você quiser saber mais, veja na documentação do NPM os tipos de scripts e os casos de uso.

// // // // // // "E por que eu preciso disso no meu programa agora?"

// // // // // // Como esse arquivo de configurações está presente em praticamente todo projeto de Javascript moderno, algumas ferramentas usam-no para colocar informações de configuração que elas precisam. No caso do NodeJS eles escolheram adicionar uma propriedade chamada "type" dentro desse arquivo e, sempre que vão executar algum código JS, eles leem essa propriedade e configuram o interpretador do JS de acordo com o valor lido.

// // // // // // Como os módulos JS são uma coisa nova e experimental, dentro desse interpretador do Node não é interessante deixá-lo configurado para tratar todo arquivo como um módulo, pois muitos projetos antigos teriam problemas ao atualizar a versão do Node que estão usando.

// // // // // // Então, esta é a opção que eles encontraram para deixar quem quisesse usar os módulos JS conseguir configurar a ferramenta para fazer os testes, e quem não quisesse não teria problemas e não precisaria mudar nenhuma configuração.

// // // // // // Se você quiser saber mais sobre as propriedades que esse arquivo suportam você pode encontrá-las nesta página da documentação.

// // // // // //Usar assessores do tipo set é uma boa prática para garantirmos que a atribuição de propriedades está sempre segura


// // // // // // Sim! Chamamos essa ideia de proteger atributos de nossas classes de encapsulamento e devemos sempre manter o máximo de encapsulamento possível.

// // // // // //Qual a sintaxe do JavaScript para herdarmos de uma classe?

// // // // // Alternativa correta
// // // // // class Carro extends Veiculo

// // // // // Exatamente! dessa forma a classe carro herda as propriedades e métodos da classe Veículo
// // // // Douglas começou a testar o que aprendeu com herança e escreveu o código abaixo:

// // // // class Funcionario{
// // // //     getBonificacao(){
// // // //         return 100;
// // // //     }
// // // // }
// // // // class Diretor extends Funcionario{
// // // //     getBonificacao(){
// // // //         return 200;
// // // //     }
// // // // }
// // // // class DiretorTI extends Diretor{

// // // // }COPIAR CÓDIGO
// // // // O problema é que quando ele instanciou um DiretorTI e chamou o método GetBonificacao ele recebeu o valor de 200 e não de 100 como ele esperava. Por que isso aconteceu?

// // // // Alternativa correta
// // // // Só acontece porque a classe DiretorTI não sobrescreveu o método getBonificacao


// // // // Sim, se ele sobrescrever esse método a classe funcionará da maneira que ele espera. Porém esse código estará sendo sobrescrito em todas as camadas da hierarquia de classes. Será que é uma boa opção?

// // // // Alternativa correta
// // // // Isso acontece porque a classe DiretorTI herda da classe Diretor e ela está sobrescrevendo o método getBonificacao da classe `Funcionário.


// // // // Isso mesmo! Com a herança podemos herdar classes que herdam de outras classes. E conforme essa cadeia cresce a complexidade do código tbm cresce. Por isso é considerada uma má prática criarmos árvores de herança muito profundas.

// // // // Orientação a objetos tem 2 pilares: polimorfismo(habilidade de tratar objetos diferentes de maneira semelhante[economiza mt código]) e duck typing()
// // // [00:00] Até agora nós vimos as propriedades e o quão poderoso é o polimorfismo, que é aquela propriedade de tratarmos objetos diferentes de maneiras similares.

// // // [00:09] Fizemos aqui com o nosso sistema de autenticação, passamos um gerente, um diretor e um cliente para esse sistema de autenticação, e com uma única função, um único método dentro do nosso sistema de autenticação, que é esse login, o nosso método para a pessoa logar dentro do nosso sistema.

// // // [00:22] Conseguimos verificar vários tipos de objetos diferentes, conseguimos fazer a autenticação de um diretor, de um gerente, de um cliente, tanto de classes que estão dentro de uma árvore de herança, onde todas elas têm o método autenticar, quanto de um objeto que não tem herança nenhuma, que é um objeto solto, que também tem o método autenticar().

// // // [00:41] Dessa maneira conseguimos ver quão poderoso é o polimorfismo, e é uma das coisas fundamentais de orientação a objetos. Orientação a objetos tem dois pilares muito importantes, polimorfismo, que é essa habilidade de tratarmos objetos diferentes de maneiras semelhantes, isso vai economizar muito código e economizar muitos if's nosso código.

// // // [00:59] Porque pense que no nosso SistemaAutenticacao, se eu tivesse que ficar verificando todos os tipos, se o autenticável for uma instância – já que já vimos o instanceof – de Cliente, eu teria que chamá-lo de um jeito. Se ele fosse uma instância de diretor, eu teria que chamá-lo de outro. Se ele fosse uma instância de Gerente, eu teria que chamá-lo de outro.

// // // [01:29] Para evitar esse monte de if's possíveis de fazer, no caso nós teríamos três if's. Eu não preciso de tudo isso porque eu estou falando: autenticavel, esse parâmetro que eu estou recebendo, não me interessa se ele é um instância de Cliente, de Gerente, de Diretor, se ele é uma instância de qualquer outra coisa.

// // // [01:48] Me interessa é que ele tem o comportamento e as propriedades específicas que eu estou utilizando, me interessa que ele tenha o método autenticar(). É isso que me interessa e é isso que vou verificar aqui. Essa é a única verificação que estamos fazendo e nós não nos importamos tanto com o tipo daquele objeto.

// // // [02:05] Inclusive, essa maneira de trabalhar tem um nome e chama duck typing, é o tipo do pato. O duck typing é muito comum em linguagens que são fracamente tipadas.

// // // [02:17] Em linguagens fortemente tipadas, onde dentro do login eu teria que definir qual é o tipo dele, eu teria que definir se ele é um diretor ou se ele é um funcionário e assim por diante, colocando aqui um tipo na frente do meu parâmetro de login, eu não teria esse problema, porque o próprio compilador estaria verificando isso para mim.

// // // [02:37] Mas em linguagens que são interpretados e fracamente tipadas, como o JavaScript, o duck typing tem essa característica muito presente.

// // // [02:45] Porque se formos ver formalmente, vim aqui no verbete da Wikipedia para duck typing, acessível neste link, em programação é a aplicação do teste do pato, como eles estão falando aqui. Se ele anda como um pato, se ele faz "quack" como um pato, ele deve ser um pato, no sentido de que não me interessa se ele é de verdade um pato, me interessa que ele anda como um pato e que ele faz "quack" como um pato. Se ele é um pato de verdade ou não, tanto faz.

// // // [03:10] Traduzindo isso para programação, não me interessa o tipo dele, me interessa o que aquele objeto consegue fazer. Se ele tem a presença de ter determinados métodos e propriedades. Dessa maneira que nós trabalhamos com o JavaScript, usando duck typing.

// // // [03:24] Não me interessa se ele é do tipo Cliente, do tipo Funcionario, do tipo ContaCorrente, me interessa se ele tem o método e a propriedade que eu quero utilizar, se ele tem aquilo, eu vou utilizar independentemente do tipo. Por isso nós falamos que é o duck typing, ele passa o teste do pato. Se ele tem a propriedade que eu quero usar, então eu vou usá-lo dessa maneira.

// // // [03:41] E o polimorfismo é essa ferramenta superimportante para orientação a objetos, para o nosso sistema, para conseguirmos tratar objetos diferentes economizando e reutilizando código de uma maneira bem legal.

// // // [03:54] Outro pilar muito importante da orientação a objetos é o encapsulamento, que vimos bastante no curso anterior, onde queremos proteger o máximo possível as propriedades e os atributos que são sensíveis à nossa classe. Vimos muito isso na nossa conta, no geral.

// // // [04:11] Numa conta eu quero proteger o cliente, eu quero proteger o saldo e eu tenho maneiras de fazer isso. Eu terei os meus assessores, como o get e o set, eu vou ter um método que está na linguagem do negócio e que faz o manuseio dessas propriedades internas no meu objeto, sem precisarmos expor isso para outras classes. Então encapsular o comportamento é outra coisa superimportante da orientação a objetos.

// // // [04:35] Só queria deixar bem claro esses dois pontos, orientação a objetos tem herança, tem propriedades, tem métodos, tem uma série de coisas, mas duas coisas superimportantes são polimorfismo e encapsulamento. Se você sair desse curso com essas duas coisas na cabeça, eu já estou feliz.
// // Encapsulation (computer programming)
// // From Wikipedia, the free encyclopedia
// //   (Redirected from Encapsulation (object-oriented programming))
// // Jump to navigationJump to search
// // In object-oriented programming (OOP), encapsulation refers to the bundling of data with the methods that operate on that data, or the restricting of direct access to some of an object's components.[1] Encapsulation is used to hide the values or state of a structured data object inside a class, preventing direct access to them by clients in a way that could expose hidden implementation details or violate state invariance maintained by the methods.

// // Publicly accessible methods are generally provided in the class to access or modify the state more abstractly. In practice sometimes methods (so-called "getters" and "setters") are provided to access the values indirectly, but, although not necessarily a violation of abstract encapsulation, they are often considered a sign-post of potentially poor object-oriented programming (OOP) design practice [2] (an Anti-pattern).

// // This mechanism is not unique to OOP. Implementations of abstract data types, e.g., modules, offer a similar form of encapsulation. The similarity has been explained by programming language theorists in terms of existential types.[3]
// Meaning
// In object-oriented programming languages, and other related fields, encapsulation refers to one of two related but distinct notions, and sometimes to the combination thereof:[4][5]

// A language mechanism for restricting direct access to some of the object's components.[6][7]
// A language construct that facilitates the bundling of data with the methods (or other functions) operating on that data.[1][8]
// Some programming language researchers and academics use the first meaning alone or in combination with the second as a distinguishing feature of object-oriented programming, while some programming languages that provide lexical closures view encapsulation as a feature of the language orthogonal to object orientation.

// The second definition is motivated by the fact that in many object-oriented languages, and other related fields, the components are not hidden automatically and this can be overridden; thus, information hiding is defined as a separate notion by those who prefer the second definition.

// The features of encapsulation are supported using classes in most object-oriented languages, although other alternatives also exist.

// Encapsulation and inheritance
// The authors of Design Patterns discuss the tension between inheritance and encapsulation at length and state that in their experience, designers overuse inheritance. They claim that inheritance often breaks encapsulation, given that inheritance exposes a subclass to the details of its parent's implementation.[9] As described by the yo-yo problem, overuse of inheritance and therefore encapsulation, can become too complicated and hard to debug.