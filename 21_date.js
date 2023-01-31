// Ex : 1
var date = Date()
console.log(date);                                                  // Wed Feb 01 2023 00:18:19 GMT+0530 (India Standard Time)

// Ex : 2
var date = Date.now()
console.log(date);                                                  // 1675190899148 // return milliseconds of UTC

// Ex : 3
var date = new Date().toString();
console.log(date);                                                  // Wed Feb 01 2023 00:18:19 GMT+0530 (India Standard Time)

var date = new Date().toDateString();
console.log(date);                                                  // Wed Feb 01 2023
var date = new Date().toTimeString();
console.log(date);                                                  // 00:18:19 GMT+0530 (India Standard Time)

var date = new Date().toISOString()
console.log(date);                                                 // 2023-01-31T18:48:19.152Z

var date = new Date().toUTCString()
console.log(date);                                                 // Tue, 31 Jan 2023 18:48:19 GMT

var date = new Date().toLocaleString()
console.log(date);                                                 // 1/2/2023, 12:18:19 am

var date = new Date().toLocaleDateString('en-US')
console.log(date);                                                 // 2/1/2023
var date = new Date().toLocaleTimeString('en-US')
console.log(date);                                                 // 12:18:19 AM

console.log('==========',);
var date = new Date().toLocaleString('india')
console.log(date);                                                 // 31/1/2023, 11:31:47 pm
var date = new Date().toLocaleString('india', { timeZone: 'UTC' })
console.log(date);                                                 // 31/1/2023, 6:01:47 pm
var date = new Date().toLocaleString('india', { timeZone: 'IST' })
console.log(date);                                                 // 31/1/2023, 11:31:47 pm
var date = new Date().toLocaleString('us', { timeZone: 'UTC' })
console.log(date);                                                 // 31/1/2023, 6:01:47 pm
var date = new Date().toLocaleString('us', { timeZone: 'EST' })
console.log(date);                                                 // 31/1/2023, 1:01:47 pm
var date = new Date().toLocaleString('us', { timeZone: 'AST' })
console.log(date);                                                 // 31/1/2023, 9:01:47 am

// Ex : 3
// This example takes 2 seconds to run
var start = Date.now();
console.log('starting timer...', start);                         // starting timer... 1675189819146

setTimeout(() => {
  console.log('==========', Date.now());                         // ========== 1675189821164

  const millis = Date.now() - start;
  console.log('====millis======', millis);                       // ====millis====== 2020

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`); // seconds elapsed = 2
}, 2000);

// This example takes 2 seconds to run
// var start = new Date().getTime();
// console.log('starting timer...', start);

// setTimeout(() => {
//   console.log('==========', new Date().getTime());

//   const millis = new Date().getTime() - start;
//   console.log('====millis======', millis);

//   console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
// }, 2000)

// Ex : 2
var date = new Date()
console.log(date);                                                  // 2023-01-31T17:49:58.487Z
console.log(typeof date);                                           // object

// Ex : 3
var date = new Date(0)
console.log(date);                                                  // 1970-01-01T00:00:00.000Z

// Ex : 4
// 0 means 01.01.1970 UTC+0
var Jan01_1970 = new Date(0);
console.log(Jan01_1970);                                          // 1970-01-01T00:00:00.000Z

// Ex : 5
// now add 24 hours, get 02.01.1970 UTC+0
var Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);                                          // 1970-01-02T00:00:00.000Z

// Ex : 6
// 31 Dec 1969
var Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);                                          // 1969-12-31T00:00:00.000Z


// Ex : 7
var date = new Date("2017-01-26");
console.log(date);                                                  // 2017-01-26T00:00:00.000Z

// Ex : 8
var date = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(date);                                                 // 1.01.2011, 02:03:04.567

// Ex : 9
var date = new Date();
console.log(date.getHours());                                                 // 10
console.log(date.getUTCHours());                                              // 5

// Ex : 10
// if you are in timezone UTC-1, outputs 60
// if you are in timezone UTC+3, outputs -180
console.log(new Date().getTimezoneOffset());                                  // -330

// Ex : 11
var date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);
console.log(date);                                                            // 2016-02-29T18:30:00.000Z

// Ex : 12
var date = new Date();
console.log(+date); // the number of milliseconds, same as date.getTime()       // 1655788554667

var date = Date.now(); // m
console.log(date);                                                             // 1655788554667

// Ex : 13
var start = new Date("2022-06-21T05:01:01.000Z");
var end = new Date("2022-06-21T05:01:02.000Z");

console.log(`The loop took ${end - start} ms`);                               // The loop took 1000 ms
console.log(`The loop took ${(end - start) / 1000} s`);                         // The loop took 1 s

var start = new Date();         // start measuring time

// do the job
for (var i = 0; i < 100000; i++) {
  var doSomething = i * i * i;
}

var end = new Date();           // end measuring time

console.log(`The loop took ${end - start} ms`);                               // The loop took 5 ms

// Ex : 14

