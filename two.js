function checkName(names) {
    if(typeof names !== 'string'){
        return 'invalid';
    }
    const convartLowerCase = names.toLowerCase();
let lastWords = ['a', 'y', 'i' , 'e' , 'o' , 'u', 'w']
let nameSlice = convartLowerCase.slice(-1)
if(lastWords.includes(nameSlice)){
    return 'Good Name'
}
else{
    return 'Bad Name'
}
}
const result = checkName('JOk');
console.log(result);


