/*const Livro = [{
    'Título':"",
    'Autor':"",
    'Ano':"",
    'Gênero':"",
}]*/;//1
const LivrosTeste = (titulo, autor, ano, genero)=>{
    {return {nome:titulo, autor:autor, ano:ano,genero:genero}}
}
let Catálogo = Object.freeze([]);//2

const adicionarLivro = (Catálogo, LivroNovo)=>{
    Catálogo = [...Catálogo, LivroNovo];
}
adicionarLivro({
    titulo:"Reprovando na faculdade",
    autor: "Cara dos oculos tortos",
    ano: "2024",
    genero: "Tecnologia"

})
const novoCatalogo = adicionarLivro(Catálogo, LivrosTeste("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943, "Fábula"));
console.log(novoCatalogo);/*Listagem de Livros: Crie uma função listarLivros() que percorre o catalogo e exibe os detalhes 
de cada livro (título, autor, ano e gênero) no console.*/
//const listarLivros = Catálogo.filter(Livro=>Livro.Autor==="");//dois jeitos de fazer
const ListarLivros = ()=>{
    console.log(...Catálogo)
}/*Implemente uma função buscarPorGenero(genero) que recebe um gênero 
como argumento e retorna uma lista contendo todos os livros do catálogo que pertencem ao 
gênero especificado.*/
const buscarPorGenero = (genero)=>{
    {return Catálogo.filter(Livro=>Livro.genero===genero)}
}
console.log(buscarPorGenero());  /*Crie uma função removerLivro(titulo) que recebe o título de um livro como 
argumento e remove o livro correspondente do catalogo. */
const removerLivro = (titulo, catalogo) => 
  catalogo.filter(livro => livro.titulo !== titulo);


