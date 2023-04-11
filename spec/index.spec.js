const isAnagrams = require('../index')

describe("isAnagrams()", () => {
  test('Функция должна возвращать true, если строки являются анаграммами', () => {
    let str1 = 'lemon';
    let str2 = 'melon';
    expect(isAnagrams(str1, str2)).toBeTruthy();
    expect(isAnagrams(str1, str2)).not.toBeFalsy();
  })
  test('Функция должна возвращать false, если строки не являются анаграммами', () => {
    let str1 = 'lemon';
    let str2 = 'melmon';
    expect(isAnagrams(str1, str2)).not.toBeTruthy();
    expect(isAnagrams(str1, str2)).toBeFalsy();
  })
  test('Функция должна учитывать регистр', () => {
    expect(isAnagrams('lemon', 'MELON')).toBeTruthy();
    expect(isAnagrams('lemon', 'MeLoN')).not.toBeFalsy();
  })
})