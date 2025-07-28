
export function words() {
   const a: string = 'Banana';
   const b: string = 'Orange';
   const c: string = 'Apple';
   console.log(`${a}\n${b}\n${c}`)
}

export function chechSumSign() {
    let a: number = 10
    let b: number = -20
    if(a+b>0){
        return a+b
    } else {
        return Error
    }  
}

export function printColor(a: number){
    if(a<0){
        return 'red'
    } else if(0<=a && a<100){
        return 'yellow'
    } else {
        return 'green'
    }
}

export function compareNumbers(){
    const a: number = 5
    const b: number = 6
    if(a>b){
        return true
    } else {
        return false
    }
}

export function summury(a:number, b: number){
    let sum: number = a+b
    if(10<=sum && sum<=20){
        return true
    } else {
        return false
    }
}

export function isPositive(a: number) {
    if(a>=0){
        return 'positive'
    } else {
        return 'negative'
    }
  }

export function isNegative(a: number) {
    if(a>=0){
        return true
    } else {
        return false
    }
  }

export function several(a: number, b: string){
    for(let i=1; i<=a; i++){
        console.log(b)
    }
}

export function visokosGod(god: number){
    if(god % 4 == 0 && god % 400 == 0){
        return 'visokos'
    } else if(god % 100 == 0){
        return 'nevisokos'
    } else {
        return 'nevisokos'
    }
}

export function massive(){
    const a: Array<number> = [0,1,1,0,1,0,0]
    for(let i = 0; i<a.length; i++){
        if(a[i] == 0){
            a[i] = 1
        } else {
            a[i] = 0
        }
    }
    return a
}

export function emptyMassive(){
    const a: Array<number> = [100]
    for(let i = 0; i<100; i++){
        a.push(i+1)
    }
    console.log(a)
}

export function cyrcleMassive(){
    const a: Array<number> = [1,5,3,2,11,4,5,2,4,8,9,1]
    for(let i = 0; i<a.length; i++){
        if(a[i]<6)
            a[i] = a[i]*2
    }
    return a
}

export function doubleMassive(){
    const a = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
        for (let i = 0; i < a.length; i++)
            for (let j = 0; j < a.length; j++) {
              if (i == j){
                a[i][j] = 1;
              } 
              a[i][a.length-1-i]=1;
    }
    return a
}