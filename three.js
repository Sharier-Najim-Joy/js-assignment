function deleteInvalids(arrays) {
    if(!Array.isArray(arrays)){
        return 'Invalid Array';
    }
    let numberStore = [];
    for(const array of arrays){
        if(typeof array === 'number' && !isNaN(array)){
            numberStore.push(array);
        }
    }
   return numberStore;
}
const numberOutput = deleteInvalids([1 ,{na:'122'},true, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]);
console.log(numberOutput);