// Intermediário 7- Uma loja tem tem uma política de descontos de acordo com o valor 
// da compra do cliente. Os descontos começam acima dos R$500. A cada 100 reais 
// acima dos R$500,00 o cliente ganha 1% de desconto cumulativo até 25%. 

//  Por exemplo: R$500 = 1% || R$600,00 = 2% … etc…

//  Faça um programa que exiba essa tabela de descontos no seguinte formato:  

//  Valordacompra – porcentagem de desconto – valor final

let apartirDe = 500;

for(let i = 1; i <= 25; i++){
    console.log(`Valor da Compra ${apartirDe += 100} - Porcentagem de desconto ${i}% - ${ (i/100) * apartirDe }`)
}
