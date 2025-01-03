//method flat(): واحد array  الى nested array  تقوم بتحويل 
const myArray = ["green","purple",[3,4],[5,6]];
const newArr = myArray.flat();
console.log("method flat: "+newArr);

//--------------------------------------------------------------------------------------------

const fruits = ["Banana", "Orange", "Apple", "Mango"];
//method pop(): array بتحذف اخر عنصر بال 
//Mango رح تحذف 
fruits.pop();
console.log("method pop: "+ fruits);

//--------------------------------------------------------------------------------------------

//method push: array بضيف عنصر داخل ال 
// Kiwi رح اضيف 
fruits.push("Kiwi");
console.log("method push: "+ fruits);

//--------------------------------------------------------------------------------------------

//method delete : array و كمان بقدر احذف كامل ال  array بقدر من خلالها احذف اي عنصر داخل ال  method هاي ال 
// Orange والي هي  index 1 هون حذفنا 
delete fruits[1];
console.log("method delete: "+ fruits);

//--------------------------------------------------------------------------------------------

// ومن ثم عرضها داخل الصفخة  size داخل المتغير  array قمنا بحفظ طول ال
//  طولها 4
let size = fruits.length;
console.log("length array: "+ size);
//--------------------------------------------------------------------------------------------

//method concat() : array ونستطيع من خلالها اضافة عنصر داخل ال  array داخل  array  تقوم بدمج 
// tasneem,rahaf,mohammad,yousef,nedal  بعد الدمج تصبح 
const girls = ["tasneem", "rahaf"];
const boys = ["mohammad","yousef","nedal"];

const names = girls.concat(boys);
const addName =  names.concat("farah");
console.log("method concat: "+ names);
console.log("merging an array with values: "+ addName);

