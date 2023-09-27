//variaveis
let nameHero = "Akiles"
let xpHero = 10001
let lvHero 

//estrutura de decisão if else if, e operadores
if (xpHero <= 1000){
    lvHero = "Ferro"
} else if (xpHero >= 1001 && xpHero <= 2000){
    lvHero = "Bronze"
} else if (xpHero >= 2001 && xpHero <= 5000){
    lvHero = "Prata"
} else if (xpHero >= 6001 && xpHero <= 7000){
    lvHero = "Ouro"
} else if (xpHero >= 7001 && xpHero <= 8000){
    lvHero = "Platina"
} else if (xpHero >= 8001 && xpHero <= 9000){
    lvHero = "Ascendente"
} else if (xpHero >= 9001 && xpHero <= 10000){
    lvHero = "Imortal"
} else {
    lvHero = "Radiante"
}

// saída com estrutura de repetição for
for (let i = 0; i < 1; i++){
    console.log("O Herói de nome " + nameHero + " está no nível de " + lvHero)
}