# Aula 4: Lógica Aplicada - Arrays, Objetos e Métodos

Na aula tivemos acesso a um novo conteúdo, complementando tudo o que vimos até agora, é como se cada passo até aqui esteja completamente interligado e dependessem um do outro. Nesse momento, foram apresentados **Arrays, objetos e métodos.** Além disso, fomos apresentados ao JSON, para acessar novas ferramentas: Nodemon e Readline. 

## Arrays 
Com função de enumerar, gerar listas, serva para armazenar um conjunto de dados, que podem ser utilizadas nas varíaveis. É indicada pelo uso dos colchetes [] e cada informação é separada por vírgulas. Ex: [João, Maria, Irene, Teresa, Joaquim]

## Objetos 
São tipos de dados que contém uma coleção de informações, muito utilizadas como base de dados. São utilizadas dentro das chaves {} e dentro separamos a informação desejada e a resposta pelo uso de dois pontos :. ex: {Nome: Héllyda, Idade: 33, Local: PE}

## Métodos de Iteração
São possibilidades organizacionais do nosso código, permite que através deles você possa filtrar informações, ordenar, criar cópias, trazer informações das nossas arrays, um mundo de possibilidades. 

- **filter** retorna um novo array com os elementos filtrados.
- **find** retorna o primeiro elemento que achar igual ao elemento passado por parâmetro.
- **indexOf** retorna a posição do item passado por parâmetro ou -1 caso não tenha encontrado.
- **length** retorna um número que representa o tamanho do array.
- **map** retorna um novo array sem alterar o array original, criando uma cópia com as alterações que desejamos.
- **pop** remove e retorn o último item do array.
- **push** adiciona um item na última posição do array.
- **shift** remove e retorna o primeiro item do array.
- **slice** copia o array para outra variável.
- **splice** remove o item da posição passada por parâmetro
- **unshift** adiciona um item na primeira posição do array.

## Nodemon e Readline
O nodemon permite que o nosso código rode no terminal automaticamente. Qualquer alteração realizada já atualiza o sistema.

Passo 1: npm init -y
Passo 2: npm i --save readline-sync
Passo 3: npm i --save-dev nodemon
Passo 4: crie o script de start no package.json -  "start": "nodemon app.js"
Passo 5: criar .gitignore (incluir node_modules)
Passo 6: criar a database um array de objetos, não esquecer de exportar (module.exports = livros)
Passo 7: criar o arquivo .js
Passo 8: Rodar projeto **npm run start**

O readline permite que seja imputada uma pergunta no código e através dela 
inicializar opções para execução do código. Para funcionar tem que requerer através de uma variável (const biblioteca = require('readline-sync')) 

## Atividade 

A atividade parecia um bicho de 90 cabeças, a aula tivemos várias carinhas preocupadas que não ia rolar. 
Fui acompanhando a aula e no final minha cabeça já não processava as informações. Maaaas, aproveitei para rever com calma o exercício exemplo, e ir aplicando dentro do VS Code. 
Tentativa, erro e muita ajuda das coleguinhas, o código foi nascendo. O meu node rodou, mas depois não quis rodar direito, ficava empacado, não entendi porquê, e estava dificultando a verificação do código. Quando parei de usar, consegui verificar e corrigir pequenos detalhes. Fiquei bem contente de ter concluído, então fui adicionando mais dados no meu database para ter mais resultados rodando. :) :) :) 


![done](https://media.giphy.com/media/UtEUhkfriklonVdweC/giphy.gif)




