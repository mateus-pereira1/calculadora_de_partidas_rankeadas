const entrada = require('prompt-sync')({sigint: true});
let v;
let name;
let continua;
let d;
let s;


console.log("***** BEM-VINDO, HERÓI *****");
continua = entrada("Você deseja avaliar seu nível ? Digite 'sim' para continuar ou 'não' para sair: ");

while(continua == "sim" || continua !="sim" && continua != "não")
{

    if(continua == "sim")
    {
    name = entrada("Isto é ótimo! Me informe, por favor, seu nome: ")
    v = entrada("Certo, "+name+", por favor informe o seu número de vitórias: ")
    d = entrada("Agora, "+name+", informe o seu número de derrotas: ")

    teste();


    continua = entrada("Você deseja avaliar outro herói? Digite 'sim' para continuar ou 'não' para sair: ")
    }
    if(continua != "não" && continua != "sim")
    {
        console.log("Por favor, digite um valor válido!")
        continua = entrada("Você deseja avaliar outro herói? Digite 'sim' para continuar ou 'não' para sair: ")
    }

}

if(continua == "não")
{
    console.log("Isso é uma pena!")
}

function teste()
{

    s = v - d;

    if(s < 10)
    {
        console.log("O herói "+name+" com saldo de vitórias: "+s+", sendo nível Ferro")
    }

    if(s > 10 && s < 20)
    {
        console.log("O herói "+name+" com saldo de vitórias: "+s+", sendo nível Bronze")
    }
    if(s > 20 && s < 50)
    {
        console.log("O herói "+name+" com saldo de vitórias: "+s+", sendo nível Prata")
    }
    if(s > 50 && s < 80)
    {
        console.log("O herói "+name+" com saldo de vitórias: "+s+", sendo nível Ouro")
    }
    if(s > 80 && s < 90)
    {
        console.log("O herói "+name+" com saldo de vitórias: "+s+", sendo nível Diamante")
    }
    if(s > 90 && s < 100)
    {
        console.log("O herói "+name+" com saldo de vitórias: "+s+", sendo nível Lendário")
    }
    if(s > 100)
    {
        console.log("O herói "+name+" com saldo de vitórias: "+s+", sendo nível Imortal")
    }

}