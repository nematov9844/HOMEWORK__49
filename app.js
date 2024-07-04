// 1. array ichidagi eng katta sonni toping
let array = [3, 4, 2, 5, 6, 7];

function firstArray(array) {
  let arraysort = array.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < arraysort.length; i++) {
    arraysort = arraysort[arraysort.length - 1];
    return arraysort;
  }
}
// console.log(firstArray(array));

// 2. array ichidagi eng kichik sonni toping

function LastArray(array) {
  let arraysort = array.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < arraysort.length; i++) {
    arraysort = arraysort[0];
    return arraysort;
  }
}
// console.log(LastArray(array));

// 3. Foydalanuvchi son kiritadi va arrey ichidagi foydalanuvchi sonidan kichik bo’lgan sonlarni ekranga chiqaring

function ArrayDefoult(arrays) {
  let array = [5, 4, 3, 2, 7, 6, 8, 9];
  for (let i = 0; i < array.length; i++) {
    if (arrays > array[i]) {
      console.log(array[i]);
    } else {
      console.log(`${arrays} sonidan katta son`);
    }
  }
}
// console.log(ArrayDefoult(4));

// 4. argument sifatida qabul qilingan sonning mukammal yoki mukammal son emasligini aniqlaydigan function yarating

const ArrayDefoult2 = (array) => {
  let res = 0;
  for (let i = 0; i < array; i++) {
    if (array % i == 0) {
      res = res + i;
      if (res == array) {
        console.log(`${array} mukammal son`);
      }
    }
  }
  if (res != array) {
    console.log(`${array} mukammal son emas`);
  }
};
// ArrayDefoult2(6)

// 5. raqamlar kiritilgan arreyni teskari qilish (for dan foydalaning)

function reverseArray(array) {
  let array2 = [];
  for (let i = array.length - 1; i >= 0; i--) {
    array2.push(array[i]);
  }
  return array2;
}
// console.log(reverseArray(array));

let res = [1,2,3,4,5,6,7,8,9,10]
res.reverse()
// console.log(res)


// 6. arrey ichidagi tub sonlar ni toping

const tubPrime = (number) => {
  for (let i = 0; i < number.length; i++) {
    if (
      number[i] % number[i] == 0 &&
      number[i] % 1 == 0 &&
      number[i] % 2 == 0
    ) {
      console.log(`${number[i]} tub son emas`);
    } else {
      console.log(`${number[i]} tub son`);
    }
  }
};
// tubPrime(array);

// 7. Ixtiyoriy function va value lari sonlardan iborat bo'lgan object yaratilsin, va object value laridan tashkil topgan arrayga function parametri ham oxiridan ham boshidan qo'shilsin


let obj = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10}
function obj_values(obj,num){
  let obj_values = Object.values(obj);
  obj_values.push(num)
  obj_values.unshift(num)
  console.log(obj_values);
}
// obj_values(obj,5)

