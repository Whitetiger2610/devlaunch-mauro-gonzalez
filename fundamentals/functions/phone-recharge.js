const prompt = require('prompt-sync')()

const MIN_RECHARGE = 20
const MAX_RECHARGE = 80
const MAX_RECHARGE_SUPERSAVER = 38
const MIN_MONTH_SUBSCRIPTION = 12
const SUPERSAVER_PROMO_MAX_DURATION = 36
const SUPERSAVER_PROMO_MULTIPPLIER = 2
const MEGA_PROMO_MIN_DURATION = 36
const MEGA_PROMO_MULTIPLIER = 3

function calculateRecharge(amount, timeSubscription){

    if (timeSubscription < MIN_MONTH_SUBSCRIPTION || amount < MIN_RECHARGE || amount > MAX_RECHARGE) return amount

    let promoMultiplier = 1

    if ( amount < MAX_RECHARGE_SUPERSAVER && timeSubscription <= SUPERSAVER_PROMO_MAX_DURATION){
        promoMultiplier = SUPERSAVER_PROMO_MULTIPPLIER
    } else if (timeSubscription > MEGA_PROMO_MIN_DURATION){
        promoMultiplier = MEGA_PROMO_MULTIPLIER
    }
    return amount * promoMultiplier          
        
    }

function main(){
    
    const name = prompt("Name: ")
    const amount = parseInt(prompt('Recharge Amount(USD): '))
    const timeSubscription = parseInt(prompt("Subscription Time (months): "))

    const recharge = calculateRecharge(amount,timeSubscription)
    const promo = recharge - amount

    console.log(
        `THANKS ${name}
        RECHARGE: ${recharge}
        PROMO: ${promo}`
    )

}

main()