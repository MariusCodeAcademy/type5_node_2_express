function makeCamelCase(str) {
  // console.log(str);
  const arrFromString = str.split('');
  // console.log('arrFromString ===', arrFromString);
  const arrayAfterProccess = [];
  arrFromString.forEach((element, idx, arr) => {
    if (element !== ' ') {
      arrayAfterProccess.push(element);
    } else {
      // padaryti kita raide didziaja
      arr[idx + 1] = arr[idx + 1].toUpperCase();
    }
  });
  // pamazinti pirmos raides case
  arrayAfterProccess[0] = arrayAfterProccess[0].toLowerCase();
  const stringFromArr = arrayAfterProccess.join('');
  // console.log('stringFromArr ===', stringFromArr);
  return stringFromArr;
}

// makeCamelCase('Ar veikia kupranunario case?');

module.exports = {
  makeCamelCase,
};
// "Vienas du trys"
// ['V','i', ' ',enas du trys]
// "vienasDuTrys"

// 1. sukam cikla
// 2. jei el yra === ' ' tai salinam ta el
// 3. kitas po juo einantis el diziaja raide
