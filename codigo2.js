// for (let index = 0; index < 31; index++) {



//     if (index % 3 === 0 && index % 5 === 0) {
//         console.log(index, 'bozzfiz')
//     } else {
//         if (index % 3 === 0) { console.log(index, 'fizz') }


//         if (index % 5 === 0) { console.log(index, 'bozz') }
//     }



// }




let numeritos =[]
for(let letritas =30; letritas > 0; letritas--){

    if(letritas % 3 ===0) {
        numeritos.unshift(letritas *2)
        
    }
    


}
 console.log(numeritos)



