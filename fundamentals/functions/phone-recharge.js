const prompt = require('prompt-sync')()

const MIN_RECHARGE = 20
const MAX_RECHARGE = 80
const MAX_RECHARGE_SUPERSAVER = 38
const MIN_YEAR_SUBSCRIPTION = 1
const YEAR_SUBSCRIPTION_PROMOS = 3

function validatePromo(name, recharge, timeSubscription){
const typePromo =''
const promoRecharge = 0

    if (recharge < MIN_RECHARGE && recharge > MAX_RECHARGE && timeSubscription >=1) return false

    if (recharge > 38 && timeSubscription <= YEAR_SUBSCRIPTION_PROMOS) {
            typePromo = "SuperSaver"
            promoRecharge = 2
        } else if (timeSubscription > YEAR_SUBSCRIPTION_PROMOS){
            typePromo = "MegaRechargable"
            promoRecharge = 3
        }
    }

function main(){
    
    const name = prompt("Name: ")
    const recharge = parseFloat(prompt('Recharge Amount(USD): '))
    const timeSubscription = parseFloat(prompt("Subscription Time: "))



    console.log(name,recharge)
}

main()