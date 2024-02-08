function monthlySavings(arrs, livingCost) {
    if(!Array.isArray(arrs)){
        return 'please input an array'
    }
    else if(typeof livingCost !== 'number'){
        return 'Please enter a number'
    }
    let totalSalarys = 0;
    for(const totalSalary of arrs){
        totalSalarys+=totalSalary
    }
    let totalTaxValue = 0;
    for (const arr of arrs) {
        if (arr >= 3000) {
            const element = arr * 0.2;
            totalTaxValue += element;
        }
    }
   const substract= (totalSalarys - totalTaxValue)-livingCost;
   if(substract<0){
    return 'earn more'
   }
   return substract;
}
const savingOutput = monthlySavings([5000,2000, 3000 ], 9400);
console.log(savingOutput);