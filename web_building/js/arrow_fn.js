console.log("Even")
for (let i=0; i <=10; i=i+2){
  if (i%2 == 0){
    console.log(i)
  }
}
console.log("ODD:")
for(let i =1; i<=10;i=i+2) 
{
  if (i%2 !=0){
    console.log(i)
  }
}

console.log("multiple")

for (let i=1; i<=10; i++){
  console.log(i*5)
}

console.log("Sum")
let sum = 0 
let t = 5
for (let i = 1; i<=t; i++){
  sum=sum+i 
  console.log(sum)
}

console.log("adding")
let a =10, b=2;
let c = a++ + ++b + ++a + b++ + a *b
console.log(c)