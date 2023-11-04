 function encontrarDuplicados(num) {
    const cant = {};
    const dup = [];

    for (let n of num) {
        if(cant[n]) {
            if(cant[n] === 1){
                dup.push(n);
            }
            cant[n] += 1;
        }else {
            cant[n] = 1;
        }
    }
    return dup;
 }

 const num = [1, 2, 3, 4, 5, 2, 4, 6, 7, 3];
 const resul = encontrarDuplicados(num);
 console.log(resul);