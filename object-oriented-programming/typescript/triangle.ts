
interface Triangle{
  a:number
  b:number
  c:number
}

const t1 : Triangle ={
  a:10,
  b:10,
  c:5
}
const t2: Triangle ={
  a:1,
  b:10,
  c:5
}

const isValidTriangle = ({a,b,c}: Triangle): boolean=>{  
    return (a+b)>c && (b+c)>a && (a+c)>b
}

console.log(isValidTriangle(t1))
console.log(isValidTriangle(t2))
