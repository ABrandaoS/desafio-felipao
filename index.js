//variaveis e vetor
let nameHero = "Hercules"
let xpHero = 0
let lvHero = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

// estrutura de decisão e operadores
if (xpHero <= 1000){
    console.log("O Herói de nome " + nameHero  + " está no nível de " + lvHero[0])
} else if (xpHero >= 1001 && xpHero <= 2000){
    console.log("O Herói de nome " + nameHero  + " está no nível de " + lvHero[1])
} else if (xpHero >= 2001 && xpHero <= 6000){
    console.log("O Herói de nome " + nameHero  + " está no nível de " + lvHero[2])
} else if (xpHero >= 6001 && xpHero <= 7000){
    console.log("O Herói de nome " + nameHero  + " está no nível de " + lvHero[3])
} else if (xpHero >= 7001 && xpHero <= 8000){
    console.log("O Herói de nome " + nameHero  + " está no nível de " + lvHero[4])
} else if (xpHero >= 8001 && xpHero <= 9000){
    console.log("O Herói de nome " + nameHero  + " está no nível de " + lvHero[5])
} else if (xpHero >= 9001 && xpHero <= 10000){
    console.log("O Herói de nome " + nameHero  + " está no nível de " + lvHero[6])
} else {
    console.log("O Herói de nome " + nameHero  + " está no nível de " + lvHero[7])
}

