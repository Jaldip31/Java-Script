
// call() Method :
// Syntax : object.objectMethod.call( objectInstance, arguments )
//                                    objectInstance: It holds the instance of an object.
//                                                    arguments: The call() method takes the comma separated arguments.
//Ex : 1
//   let p = {
//     fullName: function (addr1, addr2) {
//       return this.fName + " " + this.lName + ", " + addr1 + ", " + addr2;
//     },
//   };

//   let p1 = {
//     fName: "Jaldip",
//     lName: "bhalani",
//   };

//   let x = p.fullName.call(p1, "India", "USA");
//  console.log(x);                                                // Jaldip bhalani, India, USA

// apply() Method :
// Syntax : object.objectMethod.apply(objectInstance, arrayOfArguments)
//                                    objectInstance: It holds the instance of an object.
//                                                    arrayOfArguments: The apply() method takes the array of arguments.
// Ex : 1
// let p = {
//   fullName: function (addr1, addr2) {
//     return this.fName + " " + this.lName + ", " + addr1 + ", " + addr2;
//   },
// };
// function hello (addr1, addr2) {
//     return this.fName + " " + this.lName + ", " + addr1 + ", " + addr2;
//   }
// let p1 = {
//   fName: "Jaldip",
//   lName: "bhalani",
// };
// let x = p.fullName.apply(p1, ["India", "USA"]); // Jaldip bhalani, India, USA
// let x = hello.apply(p1, ["India", "USA"]); // Jaldip bhalani, India, USA
// console.log(x);

// bind() Methode :
// Syntax : const newFunction = oldFunction.bind(thisArg, arg1, ag2, ..., argN)

// Ex : 1
// let p = {
//     fullName: function (addr1, addr2) {
//       return this.fName + " " + this.lName + ", " + addr1 + ", " + addr2;
//     },
//   };
//   let p1 = {
//     fName: "Jaldip",
//     lName: "bhalani",
//   };

//   var x = p.fullName.call(p1, "India", "USA");
//   console.log(x);
//   var x = p.fullName.apply(p1, ["India", "USA"]);
//   console.log(x);
//   var x = p.fullName.bind(p1, "India", "USA");
//   console.log(x());                                                 // Jaldip bhalani, India, USA
// =====================================================================================================================================

// =====================================================================================================================================
// var Jethalal ={
    //     wife:"Daya",
//     age:40
// }
// var Bhide ={
    //     wife:"Madhvi",
//     age:44
// }

// function Popatlal(a,b){
    //     console.log(this.wife + " will cook food")              //this = current object
    //     console.log(a,b)
    // }

    // //call     //call(thisArg, arg1, ... , argN)
// // Popatlal()                  //undefined will cook food
// Popatlal.call(Jethalal)                //Daya will cook food
// Popatlal.call(Bhide,"hello",20)        //Madhvi will cook foods
//                                        // hello 20
// //apply()
// Popatlal.apply(Bhide,["hello",20])     //Madhvi will cook foods
//                                        // hello 20
// // bind(thisArg, arg1, ... , argN)
// var fun = Popatlal.bind(Bhide,"hello",20)
// fun()                                   //Madhvi will cook foods
//                                         //hello 20
//                     //or
// var fun = Popatlal.bind(Bhide)
// fun("hello",20)                         //Madhvi will cook foods
//                                         //hello 20
// =====================================================================================================================================

// // Example 1
// var person ={
    //     age: 20
//   };

//   let birthDay = function(years) {
    //     this.age += years;
    //   };
    
    //   // console.log(person.age); //20
//   //call
//   birthDay.call(person, 3); //the "this" keyword of birthDay function will refer to "person" object.
//   console.log(person.age); //23
//   //apply
//   birthDay.apply(person,[3])
//   console.log(person.age); //26
//   //bind
//   var fun1 = birthDay.bind(person,3)
//   fun1()
//   console.log(person.age); //29

//   //Example 2
//   var student1 = {
    //       studentName: "Scott",
    //       section: "A"
//     };

//     var student2 = {
//       studentName: "John",
//       section: "B"
//     };

//     //function at outside the object
//     function calculateTotalMarks(subject1, subject2, subject3)
//     {
//       let totalMarks = subject1 + subject2 + subject3;
//       let message = `Hey ${this.studentName}, your total marks is: ${totalMarks}`;
//       console.log(message);
//     }

//     var student1Calculate = calculateTotalMarks.bind(student1); //it creates a new function and stores reference of student1 as "this" keyword. The function will not be executed.
//     student1Calculate(60, 70, 80); //executes the function; this = student1

//     var student2Calculate = calculateTotalMarks.bind(student2); //it creates a new function and stores reference of student2 as "this" keyword. The function will not be executed.
//     student2Calculate(56, 45, 88); //executes the function; this = student2

//     calculateTotalMarks.call(student1,60, 70, 80); //Hey Scott, your total marks is: 210
//     calculateTotalMarks.call(student2,56, 45, 88); //Hey John, your total marks is: 189

//     calculateTotalMarks.apply(student1,[60, 70, 80]); //Hey Scott, your total marks is: 210
//     calculateTotalMarks.apply(student2,[56, 45, 88]); //Hey John, your total marks is: 189
// =====================================================================================================================================

// =====================================================================================================================================
// abc = apply() , bind() , call()
// syntax :
// functionName abc (thisArg, arg1, arg2 , argN)

// // Ex : 1 call()
// function sumOfNumbers() {
//     var total = 0;
//         // console.log(arguments);
//     for(var i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }
//     return total;
// }
// var sum = sumOfNumbers.call(null,1,2,3);
// console.log(sum);                                                           // 6

// // apply()
// function sumOfNumbers() {
//     var total = 0;
//     for(var i = 0; i < arguments.length; i++){
//         total += arguments[i];
//     }
//     return total;
// }
// var numbers = [1,2,3];
// var sum = sumOfNumbers.apply(null, numbers);
// console.log(sum);                                                                // 6


// // Ex : 2  call()
// var updateZipCode = function () {
//     console.log(this);
// };
// updateZipCode.call({ zip: '11787'});                                             // { zip: '11787' }

// Ex : 3  call()
// function updateZipCode() {
//     console.log(this)
// }
// updateZipCode.call(1);                                                           // 1

// // Ex : 4  call()
// var updateZipCode = function (newZip, country) {
//     console.log(newZip + ' ' + country);                                         // 11888 us
// };
// var zipCode = {
//     zip: '11787'
// };
// updateZipCode.call(zipCode, '11888', 'us');

// // apply()
// var updateZipCode = function (newZip, country) {
//     console.log(newZip + ' ' + country);                                            // 11888 us
// };
// var zipCode = {
//     zip: '11787'
// };
// updateZipCode.apply(zipCode, ['11888', 'us']);


// Ex : 7
// var person = {
//     name : "Jack",
//     prop : {
//         name : "Daniel",
//         getName : function() {
//             return this.name;
//         }
//     }
// }

// var name = person.prop.getName.bind(person);
// console.log(name());                                                        // Jack

// var  name = person.prop.getName();
// console.log(name);                                                          // Daniel

// Ex : 8
// Ex : 9
// Ex : 10
// Ex : 11
// Ex : 12

// =====================================================================================================================================

