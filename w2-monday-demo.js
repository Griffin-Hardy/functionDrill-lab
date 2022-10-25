

let pikachuHealth = 100

//let stringHealth = String(pikachuHealth)
//let stringHealth = Boolean(pikachuHealth)

//console.log(pikachuHealth)
//console.log(stringHealth)

let result = "spearow won the fight!"

let realResult = result.replace("spearow", "pikachu")

//console.log(result)
//console.log(realResult)

if (realResult.includes("pikachu")){
    console.log("replaced successfully")
}

let realCaps = realResult.toUpperCase()
//console.log(realCaps)

let realArr = realCaps.split(' ')
//console.log(realArr)

let finalResult = realArr.join('-')
//console.log(finalResult)

function checkConscious(){
    if (pikachuHealth > 0){
        console.log('pikachu is still in the fight!')
    } else {
        console.log('pikachu fainted!')
    }
}

checkConscious()

function sneakAttack(damage){
    pikachuHealth -= damage
    console.log(pikachuHealth)
    checkConscious()
}

sneakAttack(30)
sneakAttack(10)
sneakAttack(12)
sneakAttack(9)