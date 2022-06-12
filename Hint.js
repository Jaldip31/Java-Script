// 1. Any loop and condition lasts up to 1 and if 0 occurs it will be excluded from the loop or condition.
// Ex :
// for(let i = 0;i<10;i++){
//     if(i%2==1){                    // if(i%2) == if(i%2==1)
//         console.log(i);                                         // 1,3,5,7,9
//     }
// }
// ###################################################################################################################################

// 2. logical operators return 0(false) and 1(true).
// Ex :
// const x = 0
// if(x||22){
//     console.log("if");                                              // if
// }
// if(x&&22){
//     console.log("if2");                                              
// }
// ###################################################################################################################################

// 3. if only one condition (if) of logic ,you would use recursion
// Ex : 1
// let sum=0
// for(let i=0;i<6;i++){
//     sum+=i;
// }
// console.log(sum);

// const sum = (num) => (num == 1) ? 1 : num + sum(num - 1)
// console.log(sum(5))

// Ex : 2       // 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// function persistence(num) {
//   for (var i = 0; num > 9; i++) {
//     num = num.toString().split('').reduce((t, c) => c * t);
//   }
//   return i;
// }

// const persistence = num => `${num}`.length > 1 ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * b)) : 0;
// console.log(persistence(39));
// ###################################################################################################################################

// 4
// arr change String to Number
// let arr = ["1","2","3","4","5"];
// const a = arr.map(Number)
// console.log(a);                                                                             // [ 1, 2, 3, 4, 5 ]

// arr change Number to String
// let arr = [ 1, 2, 3, 4, 5 ]
// const a = arr.map(String)                                                                      
// console.log(a);                                                                             // ['1', '2', '3', '4', '5' ]

// console.log("8"+"2");                                                                       // 82
// console.log("8"-"2");                                                                       // 6
// console.log("8"*"2");                                                                       // 16
// console.log("8"/"2");                                                                       // 4

// console.log(eval("8 + 2"));                                                                       // 10
// console.log(eval("8 - 2"));                                                                       // 6
// console.log(eval("8 * 2"));                                                                       // 16
// console.log(eval("8 / 2"));                                                                       // 4
// ###################################################################################################################################
