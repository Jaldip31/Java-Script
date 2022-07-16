// Ex : 1
var date = Date()                                                
console.log(date);                                                  // Tue Jun 21 2022 10:23:06 GMT+0530 (India Standard Time)

// Ex : 2
var date = new Date()
console.log(date);                                                  // shows current date/time

// Ex : 3
var date = new Date(0)
console.log(date);                                                  // 1970-01-01T00:00:00.000Z

// Ex : 4
// 0 means 01.01.1970 UTC+0
var Jan01_1970 = new Date(0);
console.log( Jan01_1970 );                                          // 1970-01-01T00:00:00.000Z

// Ex : 5
// now add 24 hours, get 02.01.1970 UTC+0
var Jan02_1970 = new Date(24 * 3600 * 1000);
console.log( Jan02_1970 );                                          // 1970-01-02T00:00:00.000Z

// Ex : 6
// 31 Dec 1969
var Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log( Dec31_1969 );                                          // 1969-12-31T00:00:00.000Z


// Ex : 7
var date = new Date("2017-01-26");
console.log(date);                                                  // 2017-01-26T00:00:00.000Z

// Ex : 8
var date = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log( date );                                                 // 1.01.2011, 02:03:04.567

// Ex : 9
var date = new Date();
console.log( date.getHours() );                                                 // 10
console.log( date.getUTCHours() );                                              // 5

// Ex : 10
// if you are in timezone UTC-1, outputs 60
// if you are in timezone UTC+3, outputs -180
console.log( new Date().getTimezoneOffset() );                                  // -330

// Ex : 11
var date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);
console.log( date );                                                            // 2016-02-29T18:30:00.000Z

// Ex : 12
var date = new Date();
console.log(+date); // the number of milliseconds, same as date.getTime()       // 1655788554667

var start = Date.now(); // m
console.log(start);                                                             // 1655788554667

// Ex : 13
var start = new Date("2022-06-21T05:01:01.000Z");
var end = new Date("2022-06-21T05:01:02.000Z"); 

console.log( `The loop took ${end - start} ms` );                               // The loop took 1000 ms
console.log( `The loop took ${(end - start)/1000} s` );                         // The loop took 1 s

var start = new Date();         // start measuring time

// do the job
for (var i = 0; i < 100000; i++) {
  var doSomething = i * i * i;
}

var end = new Date();           // end measuring time

console.log( `The loop took ${end - start} ms` );                               // The loop took 5 ms

// Ex : 14

