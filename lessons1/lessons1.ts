function words() {
   const a: string = 'Banana';
   const b: string = 'Orange';
   const c: string = 'Apple';
   console.log(`${a}\n${b}\n${c}`)
}
// words()

function chechSumSign() {
    let a: number = 5
    let b: number = -10
    if(a+b>0){
        console.log(a+b)
    } else {
        console.log('Я долбаеб')
    }  
}
// chechSumSign()

function printColor(){
    let a: number = -50
    if(a<0){
        console.log('red')
    } else if(0<=a && a<100){
        console.log('yellow')
    } else {
        console.log('green')
    }
}
// printColor()

function compareNumbers(){
    const a: number = 6
    const b: number = 6
    if(a>b){
        console.log('error')
    } else {
        console.log('sexes')
    }
}
// compareNumbers()

function summury(a:number, b: number){
    let sum: number = a+b
    if(10<=sum && sum<=20){
        console.log('true')
    } else {
        console.log('false')
    }
}
// summury(11,10)

function isPositive(a: number) {
    if(a>=0){
        console.log('positive')
    } else {
        console.log('negative')
    }
  }
//   isPositive(0)

function isNegative(a: number) {
    if(a>=0){
        console.log(a>0)
    } else {
        console.log(a<0)
    }
  }
// isNegative(0)

function several(a: number, b: string){
    for(let i=1; i<=a; i++){
        console.log(b)
    }
}
// several(5, 'AsyA')

function visokosGod(god: number){
    if(god % 4 == 0 && god % 400 == 0){
        console.log("god - visokos")
    } else if(god % 100 == 0){
        console.log('god - nevisokos')
    } else {
        console.log('god - nevisokos')
    }
}
// visokosGod(500)

function massive(){
    const a: Array<number> = [0,1,1,0,1,0,0]
    for(let i = 0; i<a.length; i++){
        if(a[i] == 0){
            a[i] = 1
        } else {
            a[i] = 0
        }
    }
    console.log(a)
}
// massive()

function emptyMassive(){
    const a: Array<number> = [100]
    for(let i = 0; i<100; i++){
        a.push(i+1)
    }
    console.log(a)
}
// emptyMassive()

function cyrcleMassive(){
    const a: Array<number> = [1,5,3,2,11,4,5,2,4,8,9,1]
    for(let i = 0; i<a.length; i++){
        if(a[i]<6)
            a[i] = a[i]*2
    }
    console.log(a)
}
// cyrcleMassive()

function doubleMassive(){
    const a = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        for (let i = 0; i < a.length; i++)
            for (let j = 0; j < a.length; j++) {
              if (i == j){
                a[i][j] = 1;
              } 
              a[i][a.length-1-i]=1;
    }
    console.log(a)
}
// doubleMassive()