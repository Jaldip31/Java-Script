
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

// Example 1
var person ={
  age: 20
};

let birthDay = function(years) {
  this.age += years;
};

// console.log(person.age); //20
//call
birthDay.call(person, 3); //the "this" keyword of birthDay function will refer to "person" object.
console.log(person.age); //23
//apply
birthDay.apply(person,[3])
console.log(person.age); //26
//bind
var fun1 = birthDay.bind(person,3)
fun1()
console.log(person.age); //29



//Example 2
var student1 = {
    studentName: "Scott",
    section: "A"
  };
  
  var student2 = {
    studentName: "John",
    section: "B"
  };
  
  //function at outside the object
  function calculateTotalMarks(subject1, subject2, subject3)
  {
    let totalMarks = subject1 + subject2 + subject3;
    let message = `Hey ${this.studentName}, your total marks is: ${totalMarks}`;
    console.log(message);
  }
  
  var student1Calculate = calculateTotalMarks.bind(student1); //it creates a new function and stores reference of student1 as "this" keyword. The function will not be executed.
  student1Calculate(60, 70, 80); //executes the function; this = student1
  
  var student2Calculate = calculateTotalMarks.bind(student2); //it creates a new function and stores reference of student2 as "this" keyword. The function will not be executed.
  student2Calculate(56, 45, 88); //executes the function; this = student2

  calculateTotalMarks.call(student1,60, 70, 80); //Hey Scott, your total marks is: 210
  calculateTotalMarks.call(student2,56, 45, 88); //Hey John, your total marks is: 189
  
  calculateTotalMarks.apply(student1,[60, 70, 80]); //Hey Scott, your total marks is: 210
  calculateTotalMarks.apply(student2,[56, 45, 88]); //Hey John, your total marks is: 189

