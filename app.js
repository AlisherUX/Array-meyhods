"use strict";
//ARRAY METHODS

//(1) length - arrayda qancha qiymat borligini 1dan boshlab sanaydi.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size);



//(2) toString() - 




//(3) pop() - arrayning oxirgi qiymatini olib tashlaydi.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.pop();
console.log(result);



//(4) push() - arrayning oxiriga qiymat qo'shadi.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.pop("Kiwi");
console.log(result);



//(5) shift() - arrayning birinchi qiymatini olib tashlaydi.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.pop();
console.log(result);



//(6) unshift() - arrayning boshiga qiymat qo'shadi.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.unshift();
console.log(result);



//(7) delete() - arrayning belgilangan qiymatini o'chiradi.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = delete fruits[0];
console.log(result);



//(8) splice() - arrayning belgilangan indexiga qiymat qo'shadi.Agar 0 o'rniga index yozilsa 
//    splice o'sha indexli qiymatni o'chiradi.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let result = fruits.splice(4, 0, "Lemon");
console.log(result);



//(9) slice() - arrayning belgilangan indexigacha bo'lgan qiymatlarni o'chiradi.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const result = fruits.slice(1);
console.log(result);



//(10) join() - arrayning har bir qiymatlari orasiga tayinlangan qiymatni qo'shadi.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const fruit = [">"];
const result = fruits.join(fruit);
console.log(result);



//(11) lastIndexOf() - arrayda belgilangan qiymat necha marta qatnashganini qaytaradi yani son qaytaradi.
const fruits = ["Orange","Orange","Orange","Orange","Orange","Apple", "Orange", "Apple", "Mango"];
let result = fruits.lastIndexOf("Orange");
console.log(result);



//(12) concat() - ikkita arrayni bir biriga qo'shib yangi array hosil qilish uchun ishlatiladi.
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const result = arr1.concat(arr2); 
console.log(result);