// #1
for (let i = 1; i <= 10; i += 1) {
        console.log(i);
     }

    //  #2

    const num = 2;
    const num2 = 20

    for (let i = num ; i <= num2 ; i += 1){
        if ( i % 2 !== 0){
            console.log(i);
            continue;
        }   
    }

    // 3#
    const number = 7;
    let total = 0;
    for (let i = total ; i <= 10 ; i += 1){
        console.log(`7 * ${i} = ${7 * i}`)
    }   
//  !!!!!!!!!!!!!!!!!!!

// #4

const min = 1;
const max = 10;
for (let i = 1; i <= 10; i += 1) {
    if (i === 7) {
      break;
    }
    console.log(i);
  }

// 5#
const n = 20;
let totals = 0;

for (let i = totals ; i < 20; i +=1){
    console.log(i)
    if (i > 20){
        break;   
    }
}

// 6#

const a = 20;
let all = 0;

for ( let i = all ; i <= 20; i += 1){

if (i % 3 === 0){
    continue;
}
console.log(i)  
}