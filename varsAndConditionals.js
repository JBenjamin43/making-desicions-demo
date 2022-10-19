/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between obiwan kenobi and
    anakin skywalker.
*/ 

//if (CONDITION){
//     CODE BLOCK(RUN IF CONDOTION IS TRUE)
//}


let kenobiAttack = 25
let skywalkerAttack = 35
if(kenobiAttack > skywalkerAttack){
    console.log('obiwan has a better attack')
} else if (kenobiAttack < skywalkerAttack) {
    console.log('Anakin has a better attack')
} else {
    console.log('Obiwan and Anakin have the same attack')
}

let kenobihealth = 100
let kenobiDefense = 0

if(skywalkerAttack >= kenobihealth) {
    console.log('obiwan was slain')
} else {
    kenobihealth = kenobihealth - skywalkerAttack
    console.log("obiwan's health is now " + kenobihealth)
} 

kenobiDefense += 30

if ((kenobihealth + 50) >= 100){
    kenobihealth = 100
} else {
    kenobihealth += 50
}

for(let i = 0; i < 5; i++){
    kenobihealth -= (skywalkerAttack - kenobiDefense)
    console.log(`obiwan's health is now ${kenobihealth}`)
}

while(kenobihealth > 0) {
    kenobihealth -= (skywalkerAttack - kenobiDefense)
    console.log(kenobihealth)
    if(kenobihealth <= 0){
        console.log('obiwan has been slayin')
    }
}