const livros = require('./database')

livros.sort((a,b)=> a.paginas - b.paginas)

const biblioteca = require('readline-sync')

const livroPorCategoria = biblioteca.question('Deseja ver livros por categoria? (S/N)')
if(livroPorCategoria.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis')
    console.log('Espiritualidade', 'Ficção', 'Romance')
        
        const qualCategoria = biblioteca.question('Escolha categoria')

        const categorias = livros.filter(livro => livro.categoria === qualCategoria)

        console.table(categorias)

} else {
    console.table(livros)
}
const livroRecomendado = biblioteca.question('Quer recomendação de livro? (S/N)')
if(livroRecomendado.toLocaleUpperCase() === 'S'){
    
    let livrosRecomendados = livros.filter(livro => livro.recomenda === true)

    console.table(livrosRecomendados)

}else{
    console.table(livros)
}
const listaDeDesejo = biblioteca.question('Quer acessar sua lista de desejos? (S/N)')
if(listaDeDesejo.toLocaleUpperCase() === 'S'){
    let naoLeu = livros.filter(livro => livro.leu === false)
    console.table(naoLeu)
}else{
    console.table(livros)
    
}
