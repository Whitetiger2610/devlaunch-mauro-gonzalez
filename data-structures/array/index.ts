interface Receipt {
  name: string
  amount: number
  taxes: number
  total: number
}

const receipts: Receipt[] = [
  {name: 'Restaurant item1', amount:8, taxes: 2.5, total:100},
  {name: 'Restaurant item2', amount:4, taxes: 4.5, total:120},
  {name: 'Restaurant item3', amount:5, taxes: 5, total:150},
  {name: 'item4', amount:3, taxes: 3, total:115},
  {name: 'item5', amount:1, taxes: 8, total:200},
  {name: 'item6', amount:1, taxes: 1.5, total:60}
]

const incomes: number[] = [
  3000,
  300,
  1200
]

let totalIncome = 0

for (let i = 0; i< incomes.length; i++){
  totalIncome += incomes[i]
}

console.log('Total Income',totalIncome)

let totalExpenses = 0

receipts.forEach(receipt=>{
  totalExpenses += receipt.total
})

console.log('Total Expenses', totalExpenses)

const expensiveReceipt = receipts.find(receipt => receipt.total === 200 //{
  //return receipt.total === 200
//}
)

console.log(expensiveReceipt?.name)

let totalRestaurantExpenses = 0

const restaurantReceipts = receipts
.filter(receipt => receipt.name.includes('Restaurant'))
.forEach(({total}) => totalRestaurantExpenses += total)
console.log(restaurantReceipts)
console.log(totalRestaurantExpenses)

// const totalsExpenses = receipts.map (({name, total}) => ({name,total}))

const totalsExpenses = receipts.map (receipt => ({
  ...receipt,
  percentage: parseFloat(((receipt.total / totalIncome) * 100 ).toFixed(2))
}))


console.log(totalsExpenses)

// const filterByTotal = receipts.reduce((filter, receipt) => {
//   if (receipt.total > 118) {
//     filter.push(receipt)
//   }
//   return filter
// },
//   [] as Receipt[])

const filterByTotal = receipts.reduce((total, receipt) => total + receipt.total, 0)

  console.log(filterByTotal)

