function deleteInvalids(arrays) {
    let numberStore = [];
    for(const array of arrays){
        if(typeof array !== 'number' && isNaN(array)){
            continue;
        }
        else{
            numberStore.push(array);
        }
    }
   return numberStore;
}
const numberOutput = deleteInvalids([ NaN, 1,12,0 ,-1 , undefined,{pric:22} ]);
console.log(numberOutput);