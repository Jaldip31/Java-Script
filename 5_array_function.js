// length
// console.log(fruits.length)        //4


//1     .at(index+-)                                                                                    => element or undefined
// let fruits=["apple","banana","kiwi","chicoo","df"]
// console.log(fruits.at())                                                                              //apple
// console.log(fruits.at(2))                                                                             //kiwi
// console.log(fruits.at(-2))                                                                            //chicoo
// console.log(fruits.at(99))                                                                            //undefined

//2     .indexOf(searchElement, fromIndex)                                                               =>index or -1 or 0
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison','duck', 'bison',"ant"];
// console.log(beasts.indexOf('bison'));                                                                //1
// console.log(beasts.indexOf('giraffe'));                                                              //-1
// console.log(beasts.indexOf('bison', 2));                                                             //4
// console.log(beasts.indexOf('bison', 5));                                                             //4

// var indices = [];
// var array = ['a', 'b', 'a', 'c', 'a', 'd'];
// var element = 'a';
// var idx = array.indexOf(element);
// while (idx != -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);                                                                                 // [0, 2, 4]

//3     .lastIndexOf(searchElement, fromIndex)                                                          =>last index or -1 or 0
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison','duck', 'bison','ant'];
// console.log(beasts.lastIndexOf('bison'));                                                            //6
// console.log(beasts.lastIndexOf('giraffe'));                                                          //-1
// console.log(beasts.lastIndexOf('bison', 2));                                                         //4
// console.log(beasts.lastIndexOf('bison', 3));                                                         //4

//4     array1.concat(array2, ... , arrayN)                                                             =>merge two or more arrays
// const a1=["a","b","c"]
// const a2=["d","e","f"]
// console.log(a1.concat(a2))         //[ 'a', 'b', 'c', 'd', 'e', 'f' ]

// 5    .entries()                                                                                      => pair(index and value)
// var a = ['a', 'b', 'c'];
// for (const [index, element] of a.entries())
//   console.log(index, element);                                                                       // 0 'a'
//                                                                                                      // 1 'b'
//                                                                                                      // 2 'c'
// var a = ['a', 'b', 'c']; 
// var iterator = a.entries();  
// for (let e of iterator) {    
//   console.log(e);                                                                                    // [0, 'a']
// }                                                                                                    // [1, 'b']
//                                                                                                      // [2, 'c']

// 6   .every((element, index, array) => {                                                             => boolean at least one false,return false
// const num=[1,2,3,4,5]
// var check = (hi)=>hi%2==0                                       //arrow
// console.log(num.every(check))                                   // callback                          //false

// console.log(num.every((hi)=>hi%2==0))                           //call back by arrow                 //false
// // --------------------------------------------------------------------------------------------------------------------------------------
// var check = function (hi){return hi%2==0}                       //anonymous
// console.log(num.every(check))                                   // callback                          //false

// console.log(num.every(function(hi){return hi%2==0}))            //call back by anonymous             //false

// function isBigEnough(element, index, array) {                //simple function
//     return element >= 10;
//   }
//   console.log([12, 52, 41, 130, 44].every(isBigEnough));                                             // true

// function isSubset(array1, array2) {
//     return array2.every(function (element) {
//         console.log(element)
//       return array1.includes(element);                  //return true or false
//     });
//   }
//   console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]));                                           // true
//   console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7]));                                           // false

// 7   .some((element, index, array) => {                                                              => boolean at least one true,return true
// const num=[1,2,3,4,5]
// var check = (hi)=>hi%2==0                                    //arrow
// console.log(num.some(check))                                 // callback                             //true

// console.log(num.some((hi)=>hi%2==0))                         //call back by arrow                    //true
// // // --------------------------------------------------------------------------------------------------------------------------------------
// var check = function (hi){return hi%2==0}                    //anonymous
// console.log(num.some(check))                                 // callback                             //true

// console.log(num.some(function(hi){return hi%2==0}))          //call back by anonymous                //true

// function isBigEnough(element, index, array) {                //simple function
//     return element >= 10;
//   }
//   console.log([12, 52, 4, 130, 44].some(isBigEnough));                                               // true

// const fruit = ['apple', 'banana', 'mango', 'guava'];
// function checkAvailability(arr, val) {
//   return arr.some(function(ele) {
//       console.log(ele)
//     return val === ele;                                      //return true or false
//   });
// }
// console.log(checkAvailability(fruit, 'kela'));   // false
// console.log(checkAvailability(fruit, 'banana')); // true


// 8    .fill(value, start+-, end+-)        //(main array change)                                       =>filled with value.
// const num=[1,2,3,4,5]
// console.log(num.fill(0, 2, 4));                                                                      //[ 1, 2, 0, 0, 5 ]
// [1, 2, 3].fill(4)                                                                                    // [4, 4, 4]
// [1, 2, 3].fill(4, 1)                                                                                 // [1, 4, 4]
// [1, 2, 3].fill(4, 1, 2)                                                                              // [1, 4, 3]
// [1, 2, 3].fill(4, 1, 1)                                                                              // [1, 2, 3]
// [1, 2, 3].fill(4, 3, 3)                                                                              // [1, 2, 3]
// [1, 2, 3].fill(4, -3, -2)                                                                            // [4, 2, 3]


//9     .flat(depth)                                                                                    =>sub-array concatenated
// const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2.flat(2));                                                                           //[ 0, 1, 2, [ 3, 4 ] ]

//10    .flatmap()

//11    .includes(searchElement, fromIndex+-)                                                           =>boolean
// [1, 2, 3].includes(2)                                                                               // true
// [1, 2, 3].includes(4)                                                                               // false
// [1, 2, 3].includes(3, 3)                                                                            // false
// [1, 2, 3].includes(3, -1)                                                                           // true
// [1, 2, NaN].includes(NaN)                                                                           // true
// ["1", "2", "3"].includes(3)                                                                         // false

// 12.     Array.isArray(value)                                                                         =>boolean
// Array.isArray([1, 2, 3]);                                                                            // true
// Array.isArray({foo: 123});                                                                           // false
// Array.isArray('foobar');                                                                             // false
// Array.isArray(undefined);                                                                            // false

// 13   .join(separator)                                                                                =>string
// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());                                                                         //Fire,Air,Water
// console.log(elements.join(''));                                                                       //FireAirWater
// console.log(elements.join(' '));                                                                      //Fire Air Water
// console.log(elements.join('+'));                                                                      //Fire+Air+Water
// console.log(elements)                                                                                 //[ 'Fire', 'Air', 'Water' ]

//14    .push(element0, element1, ... , elementN)                                                       =>add element in last  (main array change)
// let fruits=["apple","banana","kiwi","chicoo","df"]
// let add=fruits.push("mango")
// console.log(add)                                             //=>return lenggth                      // 6        
// console.log(fruits)                                                                                  //[ 'apple', 'banana', 'kiwi', 'chicoo', 'df', 'mango' ]

// let vegetables = ['parsnip', 'potato']
// let moreVegs = ['celery', 'beetroot']
// let addd=vegetables.push(...moreVegs);                       //Merging two arrays
// console.log(addd)                                                                                    //4
// console.log(vegetables)                                                                              // ['parsnip', 'potato', 'celery', 'beetroot']

//15    .pop()                                                                                          =>remove element in last or undefined (main array change)
// let fruits=["apple","banana","kiwi","chicoo","df"]
// let remove=fruits.pop()
// console.log(remove)                                          //=>return remove ele                   // df      
// console.log(fruits)                                                                                  //[ 'apple', 'banana', 'kiwi', 'chicoo' ]

// let arr=[]
// console.log(arr.pop())                                                                               // undefined
// console.log(arr)                                                                                     //[]


// 16   .unshift(element0, element1, ... , elementN)                                                    =>add element in first  (main array change)
// let fruits=["apple","banana","kiwi","chicoo","df"]
// let add=fruits.unshift("mango")
// console.log(add)                                             //=>return length                       // 6        
// console.log(fruits)                                                                                  // [ 'mango', 'apple', 'banana', 'kiwi', 'chicoo', 'df' ]

// let vegetables = ['parsnip', 'potato']
// let moreVegs = ['celery', 'beetroot']
// let addd=vegetables.unshift(...moreVegs);                    //Merging two arrays
// console.log(addd)                                                                                    // 4
// console.log(vegetables)                                                                              // [ 'celery', 'beetroot', 'parsnip', 'potato' ]


//17    .shift()                                                                                         =>remove ele in first or undefined  (main array change)
// let fruits=["apple","banana","kiwi","chicoo","df"]
// let remove=fruits.shift()
// console.log(remove)                                          //=>return remove ele                   // apple      
// console.log(fruits)                                                                                  //[ 'banana', 'kiwi', 'chicoo', 'df' ]

// let arr=[]
// console.log(arr.shift())                                                                             // undefined
// console.log(arr)                                                                                     //[]


//18    .key()                                                                                          =>index
// const array1 = ['a', 'b', 'c'];
// const iterator = array1.keys();

// for (const key of iterator) {
//   console.log(key);                                                                                  //0,1,2
// }

//19    .reverse()                                                                                      =>reverse array (main array change)
// const num = ['one', 'two', 'three'];
// console.log(num.reverse())                                                                           //[ 'three', 'two', 'one' ]
// console.log(num)                                                                                     //[ 'three', 'two', 'one' ]

//20    .sort(function compareFn(firstEl, secondEl)=> {                                                 =>sorting
// const months = ['March', 'Jan', 'Feb', 'Dec'];
// console.log(months.sort());                                                                           //["Dec", "Feb", "Jan", "March"]

// const array1 = [1, 30, 4, 21, 100000];
// console.log(array1.sort());                                                                           //[ 1, 100000, 21, 30, 4 ]

// var numbers = [1, 30, 4, 21, 100000];
// numbers.sort(function(a, b) {                    //call back by anonymous 
//   return a - b;
// });
// console.log(numbers);                                                                                 //[ 1, 4, 21, 30, 100000 ]

// var numbers = [1, 30, 4, 21, 100000];
// numbers.sort((a, b)=> a - b);                    //call back by arrow
// console.log(numbers);                                                                                 //[ 1, 4, 21, 30, 100000 ]

// var items = [{ name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Zeros', value: 37 }];
  
//   // sort by value
//   console.log(items.sort(function (a, b) {
//     return a.value - b.value;                   //[{ name: 'The', value: -12 },{ name: 'Magnetic', value: 13 },{ name: 'Edward', value: 21 },{ name: 'Sharpe', value: 37 },{ name: 'Zeros', value: 37 },{ name: 'And', value: 45 }]
//   }));
//   // sort by name
//   console.log(items.sort(function(a, b) {
//     var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
  
//     // names must be equal
//     return 0;
//   }));

//21.   slice(start, end)                                                                                     =>section of an array.
// let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// console.log(fruits.slice(1,3))                                                                             //[ 'Orange', 'Lemon' ]
// console.log(fruits)                                                                                        //[ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]


//22.splice(start+-, deleteCount, item1, item2, itemN)                                                        =>section of an array.(main array change)
// console.log(fruits.splice(2,3))        //[ 'Lemon', 'Apple', 'Mango' ]
// console.log(fruits)                    //[ 'Banana', 'Orange' ]

// let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
// var removed = myFish.splice(2)
// console.log(myFish)                                                                                        //[ 'angel', 'clown' ]
// var removed = myFish.splice(-1)
// console.log(myFish)                                                                                        //[ 'angel', 'clown', 'mandarin' ]
// var removed = myFish.splice(-2,1)
// console.log(myFish)                                                                                        //[ 'angel', 'clown', 'sturgeon' ]
// var removed = myFish.splice(2, 0, 'drum')
// console.log(myFish)                                                                                        //[ 'angel', 'clown', 'drum', 'mandarin', 'sturgeon' ]
// var removed = myFish.splice(2, 1, 'drum')
// console.log(myFish)                                                                                        //[ 'angel', 'clown', 'drum', 'sturgeon' ]
// var removed = myFish.splice(2, 1, 'drum')
// console.log(myFish)                                                                                        //[ 'angel', 'clown', 'drum', 'sturgeon' ]


// 23 .find((element, index, array) => {                                                                      =>satisfies first element or undefined
// const array1 = [5, 12, 8, 130, 44];
// console.log(array1.find(element => element > 1000))                                                        //undefined
// console.log(array1.find(element => element > 10))                                                          //12
// console.log(array1.filter(element => element > 10))                                                        //[ 12, 130, 44 ]
// console.log(array1.map(element => element > 10))                                                           // [ false, true, false, true, true ]
// console.log(array1.map(element =>{ if(element > 10) return element}))                                      // [ false, true, false, true, true ]



// function isPrime(element, index, array) {
//   let start = 2;
//   while (start <= Math.sqrt(element)) {
//     if (element % start++ < 1) {
//       return false;
//     }
//   }
//   return element > 1;
// }
// console.log([4, 5, 7, 12].find(isPrime));                                                                  // 5
// console.log([4, 5, 7, 12].filter(isPrime));                                                                // [ 5, 7 ]



//24.forEach((element, index, array) => {                                                                     =>for loop or undefined    can’t changes ele
// const items = ['item1', 'item2', 'item3'];

// // before
// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);                                                                                   //item1,item2,item3
// }

// // after
// items.forEach((item) => {
//   console.log(item);                                                                                       //item1,item2,item3
// });

// const flatten = (arr) => {
//     const result = [];
//     arr.forEach((i) => {
//       if (Array.isArray(i)) {
//         result.push(...flatten(i));
//       } else {
//         result.push(i);
//       }
//     });
//     return result;
//   }
//   const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
//   console.log(flatten(nested));                                                                            // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 25  .filter((element, index, array) => {                                                                    =>satisfies new array  or empty array []  can’t changes ele
// Ex : 1
// let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

// function filterItems(arr, query) {
//   return arr.filter(function(el) {
//     return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
//   })
// }

// console.log(filterItems(fruits, 'ap'))                                                                     // ['apple', 'grapes']
// console.log(filterItems(fruits, 'an'))                                                                     // ['banana', 'mango', 'orange']

// Ex : 2
// let army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoin(ele) {
//         console.log(ele);
//       return ele.age >= this.minAge && ele.age < this.maxAge;
//     }
//   };
  
//   let users = [
//     {age: 16},
//     {age: 20},
//     {age: 23},
//     {age: 30}
//   ];
  
//   // find users, for who army.canJoin returns true
//   let soldiers = users.filter(army.canJoin, army);
  
//   console.log(soldiers.length); // 2
//   console.log(soldiers[0].age); // 20
//   console.log(soldiers[1].age); // 23

// console.log(filterItems(fruits, 'ap'))                                                                     // ['apple', 'grapes']
// console.log(filterItems(fruits, 'an'))                                                                     // ['banana', 'mango', 'orange']

//26    .map((element, index, array) => {                                                                     => satisfies new changes ele array or undefined in new array
//Ex : 1
// const numbers = [1, 4, 9];
// const roots = numbers.map((num) => Math.sqrt(num))                                                         //[1, 2, 3]
// console.log(numbers)                                                                                       //[ 1, 4, 9 ]
// console.log(num.map((x=>x*2)))                                                                             //x=element //[ 2, 4, 6, 8, 10 ]

//Ex : 2
// const numbers = [1, 2, 3, 4];
// const filteredNumbers = numbers.map((num, index) => {
//   if (num < 3) {
//     return num;
//   }
// });
// console.log(filteredNumbers)                                                                               //[ 1, 2, undefined, undefined ]

// const filteredNumbers = numbers.map((num, index) => {
//     if (num < 3) {
//       return num+10;
//     }
//     else{
//         return num
//     }
//   });
//   console.log(filteredNumbers)                                                                                // [ 11, 12, 3, 4 ]

//Ex : 3
// const kvArray = [{ key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 }];
// const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));
// console.log(reformattedArray);                                                                              // [ { '1': 10 }, { '2': 20 }, { '3': 30 } ]

//Ex : 4
// const arr =['1', '2', '3']
// const a = arr.map(ele=>{
//     return parseInt(ele)
//     // return Number(ele)
// })
// console.log(arr);                                                                                               // ['1', '2', '3']
// console.log(a);                                                                                                 // [ 1, 2, 3 ]


// 27  reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)               =>The value that results from running the "reducer"
// Ex : 1
// var x=[10,20,30,40]
// var test = (p,c)=>p+c
// console.log(x.reduce(test))                                                                                //100
// console.log(x.reduce(test,50))                                                                             //150

// var t1 = (a,b,c,d) =>{                                                                                     // (previousValue, currentValue, currentIndex, array) 
//     console.log(a,b,c,d)
//     console.log(`previous: ${a}, current: ${b}, index: ${c}, returns: ${d}`);
//     return a+b                                                                                             //previous: 10, current: 20, index: 1, returns: 10,20,30,40
//                                                                                                            //previous: 30, current: 30, index: 2, returns: 10,20,30,40
//                                                                                                            //previous: 60, current: 40, index: 3, returns: 10,20,30,40
// }
// console.log(x.reduce(t1))                                                                                  //100

// Ex : 2
// let deposite=[200,440,7000,680]
// const max=deposite.reduce((a,b)=>{
//     if(a>b)return a
//     else return b
// })
//deposite[0])
// console.log(max)                                                                                           //7000

// Ex : 3
// const getMax = (a, b) => {
//     console.log("a",a);
//     console.log("b",b);
//     console.log("max",Math.max(a, b))
//     return Math.max(a, b)
// };
// callback is invoked for each element in the array starting at index 0
// console.log([12, 100,23,5,88].reduce(getMax)); // 100
// console.log([    50].reduce(getMax, 10)); // 50
// const a =[1, 100,23,5,88]
// console.log(Math.max(...a));

// Ex : 4
// let initialValue = 0
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue) {
//     return previousValue + currentValue.x
// }, initialValue)
// console.log(sum)                                                                                             // 6

// Ex : 5
// let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
//     function(previousValue, currentValue) {
//       return previousValue.concat(currentValue)
//     },
//   )
//   console.log(flattened);                                                                                    // [ 0, 1, 2, 3, 4, 5 ]

// Ex : 6
// const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
// let countedNames = names.reduce(function (allNames, name) {
//     console.log("allNames",allNames);
//     console.log("name",name);

//   if (name in allNames) {
//     allNames[name]++
//     console.log("iffff");
//   }
//   else {
//     console.log("elssss");
//     allNames[name] = 1
//   }
//   return allNames
// }, {})
// console.log(countedNames);                                                                               // { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }

// Ex : 7
// const people = [
//     { name: 'Alice', age: 21 },
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ];
  
//   function groupBy(objectArray, property) {
//     return objectArray.reduce(function (acc, obj) {
//       let key = obj[property]
//       if (!acc[key]) {
//         acc[key] = []
//       }
//       acc[key].push(obj)
//       return acc
//     }, {})
//   }
  
//   let groupedPeople = groupBy(people, 'age')
// console.log(groupedPeople);                                                                               //{
                                                                                                             //   '20': [ { name: 'Max', age: 20 }, { name: 'Jane', age: 20 } ],
                                                                                                             //   '21': [ { name: 'Alice', age: 21 } ]
                                                                                                             // }

// Ex : 8                                                                                                            
// const friends = [{
//     name: 'Anna',
//     books: ['Bible', 'Harry Potter'],
//     age: 21
//   }, {
//     name: 'Bob',
//     books: ['War and peace', 'Romeo and Juliet'],
//     age: 26
//   }, {
//     name: 'Alice',
//     books: ['The Lord of the Rings', 'The Shining'],
//     age: 18
//   }]
  
//   let allbooks = friends.reduce(function(previousValue, currentValue) {
//       console.log([...previousValue, ...currentValue.books]);
//     return [...previousValue, ...currentValue.books]
//   }, ['Alphabet'])
// console.log(allbooks);                                          // [ 'Alphabet', 'Bible', 'Harry Potter', 'War and peace','Romeo and Juliet', 'The Lord of the Rings','The Shining']

//Ex : 9
// const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
// let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
//   if (previousValue.indexOf(currentValue) === -1) {
//     previousValue.push(currentValue)
//   }
//   return previousValue
// }, [])
// console.log(myArrayWithNoDuplicates)                                                                        // [ 'a', 'b', 'c', 'e', 'd' ]

// 28  .toString()                                                                                            =>string
// var array1 = [1, 2, 'a', '1a'];
// console.log(array1.toString());                                                                            //1,2,a,1a

// --------------Expressions & operators-------------

// spread(...)
// let deposite=[200,440.7000,680]
// let withdra=[-400,-680,-280]
// console.log(...deposite,...withdra)                                                                        //200 440.7 680 -400 -680 -280
// console.log([...deposite,...withdra])                                                                      //[ 200, 440.7, 680, -400, -680, -280 ]

// const number=[1,2,3]
// console.log(200,89,...number,56)                                                                           //200 89 1 2 3 56

// var new_number=12
// console.log([100,...number,new_number])                                                                    //[ 100, 1, 2, 3, 12 ]


//--------------Statements & declarations--------------  
// for...of
// var amt=[200,450,-400,-3000,-650,-130,70,1300]
// for(const x of amt)                  //x=element
// {
//     console.log(x)                                                                                        //200,450,-400
// }

// var amt=[200,450,-400,-3000,-650,-130,70,1300]
// for(let [x,y] of amt.entries())         //x=index,y=element
//     console.log(x,"-",y)                                                                                  //0 - 200    
                                                                                                             //  1 - 450
                                                                                                             //  2 - -40
// const iterable = [10, 20, 30];
// for (let value of iterable) {
//   value += 1;                                                     
//   console.log(value);                                                                                      //11,21,31
// }                                                                                                                                         
                                                                                                                    









// -----------extra------------

// # array distructuting(swap)
// var a=10,b=65;
// [a,b]=[b,a]
// console.log("a : ",a)                                                                                                              //65
// console.log("b : ",b)                                                                                                              //10


// function result(s1,s2,s3){
//     return[s1+s2+s3,(s1+s2+s3)/3]       //return only array not two digit
// }
// console.log(result(80,90,70))                                                                                                      //[ 240, 80 ]
// let [total,percentage]=result(80,90,70)
// console.log(total,"-",percentage)                                                                                                  //240 - 80

// var getmarks=()=>[34,56,98,79,99]
// let marks = getmarks()
// console.log(marks)                                                                                                                    //[ 34, 56, 98, 79, 99 ]

// let [...a1]=getmarks()
// console.log(a1)                                                                                                                       //[ 34, 56, 98, 79, 99 ]




// 1  //using for...of
// for(var [x,y] of amt.entries()){
//     if(y>0){
//         console.log(`y ${x+1} : you deposited ${y}`)                    //y 1 : you deposited 200
//     }                                                                   //y 2 : you deposited 450
//     else{                                                               //y 3 : you withdrew 400
//         console.log(`y ${x+1} : you withdrew ${(Math.abs(y))}`)
//     }
// }

//2   //using forEach
// amt.forEach((x,y)=>{                 //x=element,y=index,z=array
//     if(x>0){
//         console.log(`y ${y+1} : you deposited ${x}`)                    //y 1 : you deposited 200
//     }                                                                   //y 2 : you deposited 450
//     else{                                                               //y 3 : you withdrew 400
//         console.log(`y ${y+1} : you withdrew ${(Math.abs(x))}`)
//     }
// })

//1 using map
// var amt1=[200,450,400,3000,650,130,70,1300]
// var rate=1.1
// for(var s of amt1){
    // t=amt1.map((ele)=>ele*rate)          
    // console.log(t)                         //[220,495,440 ....77,1430]
    // console.log(s*rate)                    // 220,495,440 ....77,1430
// }
// console.log(t)                             //[220,495,440 ....77,1430]

//2 using for...of
// var arr=[]
// for(var ele of amt1){
//      arr.push(ele*rate)
// }
// console.log(arr)                                //[220,495,440 ....77,1430] 

// const test=amt.map((x,y)=>`y ${y+1} : ${x>0?'deposited ':'withdrew '}${(Math.abs(x))}`)        //x=element,y=index
// console.log(test)                               //[ 'y 1 : deposited 200',
                                                // 'y 2 : deposited 450',
                                                // 'y 3 : withdrew 400',.....]   

//using map
// var a=[1,2,3,4,5]
// console.log(a.map((ele,i)=>ele*2))        //[ 2, 4, 6, 8, 10 ]

//using forEach
// arr=[] 
// a.forEach((ele)=>{   
//     arr.push(ele*2)
// })
// console.log(arr)                            //[ 2, 4, 6, 8, 10 ]

// //using for...of
// array=[]
// for(var ele of a){
//     array.push(ele*2)
// }
// console.log(array)                          //[ 2, 4, 6, 8, 10 ]

//using for...in
// array=[]        
// for(var ele in a){                          //index
//     console.log(ele)                          //[ '0', '1', '2', '3', '4' ]
// }
// console.log(array)                          //[ '0', '1', '2', '3', '4' ]

// //using filter()
// arr2=[]
// a.filter((ele)=>{
//     arr2.push(ele*2)z
// })
// console.log(arr2)                               //[ 2, 4, 6, 8, 10 ]

// arr1=[]
// a.reduce((x,y)=>{
//     arr1.push(y*2)
// })
// console.log(arr1)                               //[ 4, 6, 8, 10 ]


// console.log(jaldip)


// ############################## for...of ##### for...in ############################
// let arr = ["Apple", "Orange", "Pear"];
// let obj = {name:"jaldip",age:20}

// // array
// // for (let value of arr) {
// //   console.log(value);                                               // Apple, Orange, Pear
// // }

// for (let key in arr) {
//   console.log(arr[key]);                                        // 0 Apple, 1 Orange, 2 Pear
// }

// for (let [key,val] of arr.entries()) {
//   console.log(key,val);                                             // 0 Apple, 1 Orange, 2 Pear
// }

// // object
// for (let key in obj) {
//     console.log(key,obj[key]);                                     // name jaldip , age 20
// }

// for (let [key,val] of Object.entries(obj)) {
//   console.log(key,val);                                            // name jaldip , age 20
// }


// ########################### Static methods ############################
// 1. Array.from(arrayLike, function mapFn(element) { /* ... */ }, thisArg)                                     => A new Array instance.
//    Array.from(arrayLike, (element, index) => { /* ... */ } )

// console.log(Array.from('foo'));                                                                              // [ 'f', 'o', 'o' ]

// let arr = [1, 2, 3]
// Array.from(arr, (ele,ind) => console.log(ind,ele));                                                          // 0 1, 1 2, 2 3....

// Map function to call on every element of the array
// Array.from(arr, (ele,ind) => console.log(ele*2));                                                            //2, 4, 6
            
// Array from a Set
// const set = new Set(['foo', 'bar', 'baz', 'foo']);
// console.log(Array.from(set));

// Array from a Map
// const map = new Map([[1, 2], [2, 4], [4, 8]]);
// console.log(Array.from(map));

// const mapper = new Map([['1', 'a'], ['2', 'b']]);
// console.log(Array.from(mapper.values()));                                                                    // ['a', 'b'];
// console.log(Array.from(mapper.keys()));                                                                      // ['1', '2'];

// console.log(Array.from({length: 5}, (v, i) => i));                                                           // [ 0, 1, 2, 3, 4 ]


// Sequence generator (range)
// const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (v, i) => start + (i * step));

// Generate numbers range 0..4
// console.log(range(0, 4, 1));                                                                                 // [0, 1, 2, 3, 4]

// Generate numbers range 1..10 with step of 2
// console.log(range(1, 10, 2));                                                                                // [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
// console.log(range('A'.charCodeAt(), 'Z'.charCodeAt(), 1).map(x => String.fromCharCode(x)));                  // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


// 2. Array.isArray(value)                                                                                      => true if the value is an Array; otherwise, false.
// all following calls return true
// Array.isArray([]);
// Array.isArray([1]);
// Array.isArray(new Array());
// Array.isArray(new Array('a', 'b', 'c', 'd'));
// Array.isArray(new Array(3));

// all following calls return false
// Array.isArray();
// Array.isArray({});
// Array.isArray(null);
// Array.isArray(undefined);
// Array.isArray(17);
// Array.isArray('Array');
// Array.isArray(true);
// Array.isArray(false);
// Array.isArray(new Uint8Array(32));
// Array.isArray({ __proto__: Array.prototype });

// 3.Array.of(element0, element1, /* ... ,*/ elementN)                                                      => A new Array instance.
// console.log(Array.of(1, 2, 3));                                                                          // [1, 2, 3]
// console.log(Array.of(1));                                                                                // [1]
// console.log(Array.of(1, 2, 3));                                                                          // [1, 2, 3]
// console.log(Array.of(undefined));                                                                        // [undefined]

// ##################################################################################################
