function password(objs) {
    if(Object.keys(objs).length <3 || objs.birthYear < 1000 || objs.birthYear >= 10000)  {
        return 'invalid';
    }
    let objValues = Object.values(objs)
    let firstIndex = objValues[0];
    objValues[0] = objValues[2];
    objValues[2] = firstIndex;
    let valueStore = objValues[0]+'#'+objValues[2]+'@'+objValues[1];
    let result = valueStore.charAt(0).toUpperCase()+valueStore.slice(1);
  return result;
}
const output = password({ name: 'kolimuddin' , birthYear: 999 , siteName:'google' })
console.log(output);