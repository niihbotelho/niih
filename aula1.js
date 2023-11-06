let num1 = 10;
let num2 = 20;

if (num1 > num2) {
  console.log(num1 + " é maior que " + num2);
} else if (num2 > num1) {
  console.log(num2 + " é maior que " + num1);
} else {
  console.log("Os números são iguais");
}
function main()
{
 var num = parseInt(document.getElementById("num").value);
 var resp = document.getElementById("resposta");
 
 if(document.getElementById("CtoF").checked==true)
  resp.innerHTML = ctof(num);
 if(document.getElementById("FtoC").checked==true)
  resp.innerHTML = ftoc(num);
}
function ctof(x)
{
 return (1.8*x + 32);
}

function ftoc(x)
{

 return ( (x-32)*5/9 );
}
function calcularArea(comprimento, altura) {
    var area = comprimento * altura;
    console.log(area);
}

calcularArea(10, 6); // chamando a função com valores como argumentos

var comprimento_retangulo = 10;
var altura_retangulo = 6; 
var idade = 15;
if (idade >= 18) {
console.log("Você é maior de idade.");
} else {
console.log("Você é menor de idade.");
}