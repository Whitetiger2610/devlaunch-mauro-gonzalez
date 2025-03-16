const t1 ={
  a:10,
  b:10,
  c:5
}
const t2 ={
  a:1,
  b:10,
  c:5
}

const isValidTriangle = (triangle)=>{
    // if ((triangle.a+triangle.b) > triangle.c && (triangle.b+triangle.c) > triangle.a && (triangle.a+triangle.c)> triangle.b) {
    const {a,b,c} = triangle
    // if ((a+b)>c && (b+c)>a && (a+c)>b){  
    // return console.log("It is a triangle")
    // } else{
    //   return console.log("It is not a triangle")
    // }
    return (a+b)>c && (b+c)>a && (a+c)>b
}

console.log(isValidTriangle(t1))
console.log(isValidTriangle(t2))
