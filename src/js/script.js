//Método de limpeza e validação

const email ="   fiap@emailcom     ";
const emailLimpo= email.trim(); //remove espaços (Inicio e fim)
console.log(emailLimpo)

//Validar: Verifica se o domínio é válido

if(emailLimpo.includes("@")){
    console.log("email válido")
}else{
    console.log("email inválido")
}

//Métodos de transformação de texto (split, toLowCase,Join)

const tituloArtigo= "Aprendendo Javascript RAIZ DEV";
//DEIXA O TEXTO EM MAIUSCULO OU MINUSCULO toLowCase
const texto1 =tituloArtigo.toUpperCase();
console.log(texto1);
//tranforma um texto em array ou seja em uma lista
const texto2 = tituloArtigo.split(" ");
console.log(texto2)

//o join faz o inverso ele junta tudo em uma unica string
const texto3 = texto2.join("*");
console.log(texto3);

//metodo tofixed

const precoProduto=199.99;
const desconto= 0.15; //15%
const precoFinal = precoProduto * (1 - desconto);
console.log(precoFinal);
console.log(`R$ ${precoFinal.toFixed(2)}`)

//DOM ( DOCUMENT OBJECT MODEL) MODELO DE DOCUMENTO
//PERMITE O JAVASCRIPT CONVERSAR COM O NAVEGADOR
//PARA MANIPULAR O HTML E CSS.

const titulo = document.getElementById("titulo");
titulo.innerText ="Dom transformando o texto";
titulo.style.color="blue";


const produtos =[
    {nome:"Teclado Gamer",preco:200,emPromocao:true},
    {nome:"Mouse Gamer",preco:150,emPromocao:false},
    {nome:"Monitor",preco:1300,emPromocao:true},
    {nome:"Pad Mouse",preco:50,emPromocao:false},
];

console.log(produtos)
const container=document.getElementById("lista-produtos");

function produtosCard(lista){
    const htmlProdutos= lista.map(item => `
        <div class="card">
            <h3>${item.nome}</h3>
            <p>Preço R$ ${item.preco}</p>
            ${item.emPromocao ? '<span>Promoção</span>': ''}
        </div>
        `).join('');//transforma o array em uma unica string

        container.innerHTML=htmlProdutos;
}
produtosCard(produtos)