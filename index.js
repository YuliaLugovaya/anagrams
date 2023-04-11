//Напиши метод isAnagrams(), который принимает два строчных аргумента
// и выводит true, если строки являются анаграммами, и false, если строки ими не являются.

function isAnagrams(str1, str2) {
  let strOne = str1.toLowerCase().split('');
  let strTwo = str2.toLowerCase().split('');

  if (strOne.length === strTwo.length) {
    let strOneSort = strOne.sort();
    let strTwoSort = strTwo.sort();

    if (strOneSort.every((el, i) => el === strTwoSort[i])) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
console.log(isAnagrams('lemon', 'MELON'));

module.exports = isAnagrams