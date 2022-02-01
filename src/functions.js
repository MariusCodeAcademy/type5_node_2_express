function makeCamelCase(str) {
  // console.log(str);
  const arrFromString = str.split('');
  // pamazinti pirmos raides case
  arrFromString[0] = arrFromString[0].toLowerCase();
  return arrFromString
    .filter((element, idx, arr) => {
      if (element !== ' ') {
        return element;
      } else {
        // padaryti kita raide didziaja
        arr[idx + 1] = arr[idx + 1].toUpperCase();
      }
    })
    .join('');
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
