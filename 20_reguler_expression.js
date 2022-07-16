// Regular Expressions

// Patterns and flags
// regexp = /pattern/; // no flags
// regexp = /pattern/gmi; // with flags g,m and i (to be covered soon)

// Flags
// Regular expressions may have flags that affect the search.

// There are only 6 of them in JavaScript:

// i
// With this flag the search is case-insensitive: no difference between A and a (see the example below).
// g
// With this flag the search looks for all matches, without it – only the first match is returned.
// m
// Multiline mode (covered in the chapter Multiline mode of anchors ^ $, flag "m").
// s
// Enables “dotall” mode, that allows a dot . to match newline character \n (covered in the chapter Character classes).
// u
// Enables full Unicode support. The flag enables correct processing of surrogate pairs. More about that in the chapter Unicode: flag "u" and class \p{...}.
// y
// “Sticky” mode: searching at the exact position in the text (covered in the chapter Sticky flag "y", searching at position)

// $&	inserts the whole match
// $`	inserts a part of the string before the match
// $'	inserts a part of the string after the match
// $n	if n is a 1-2 digit number, then it inserts the contents of n-th parentheses, more about it in the chapter Capturing groups
// $<name>	inserts the contents of the parentheses with the given name, more about it in the chapter Capturing groups
// $$	inserts character $


// // Ex : 1
// var str = "We will, we will rock you";
// console.log( str.match(/we/gi) );                                                                       // [ 'We', 'we' ]

// // Ex : 2
// // var matches = "JavaScript".match(/HTML/); // = null
// // if (!matches.length) {                                                                                  // Error: Cannot read property 'length' of null
// //   console.log("Error in the line above");
// // }

// var matches = "JavaScript".match(/HTML/) || [];
// console.log(matches);                                                                                   // []
// if (!matches.length) {
//   console.log("No matches");                                                                            // now it works
// }

// // Ex : 3
// console.log( "We will, we will".replace(/we/i, "I") );                                                   // I will, we will

// // with flag g
// console.log( "We will, we will".replace(/we/ig, "I") );                                                  // I will, I will

// // Ex : 4
// console.log( "I love HTML".replace(/HTML/, "$& and JavaScript") );                                       // I love HTML and JavaScript

// // Ex : 5
// var str = "I love JavaScript";
// var regexp = /LOVE/i;
// console.log( regexp.test(str) );                                                                         // true

// ==========================================================================================================================================================
// Character classes

// \d – digits.
// \D – non-digits.
// \s – space symbols, tabs, newlines.
// \S – all but \s.
// \w – Latin varters, digits, underscore '_'.
// \W – all but \w.
// . – any character if with the regexp 's' flag, otherwise any except a newline \n.

// Ex : 6
// var str = "+7(903)-123-45-67";
// var regexp = /\d/;
// console.log( str.match(regexp) );                                                                       // [ '7', index: 1, input: '+7(903)-123-45-67', groups: undefined ]

// // Ex : 7
// var str = "+7(903)-123-45-67";
// var regexp = /\d/g;
// console.log( str.match(regexp) );                                                                       // [ 7,9,0,3,1,2,3,4,5,6,7 ]
// console.log( str.match(regexp).join('') );                                                              // 79031234567

// // Ex : 8
// console.log( "I love HTML5!".match(/\s\w\w\w\w\d/) );                                                   // [ ' HTML5', index: 6, input: 'I love HTML5!', groups: undefined ]

// // Ex : 9
// var str = "+7(903)-123-45-67";
// console.log( str.replace(/\D/g, "") );                                                                  // 79031234567

// Ex : 10
// console.log( "Z".match(/./) );                                                                          // [ 'Z', index: 0, input: 'Z', groups: undefined ]

// Ex : 11
// let regexp = /CS.4/;
// console.log( "CSS4".match(regexp) );                                                                     // [ 'CSS4', index: 0, input: 'CSS4', groups: undefined ]
// console.log( "CS-4".match(regexp) );                                                                     // [ 'CS-4', index: 0, input: 'CS-4', groups: undefined ]
// console.log( "CS 4".match(regexp) );                                                                     // [ 'CS 4', index: 0, input: 'CS 4', groups: undefined ]

// Ex : 12
// console.log( "CS4".match(/CS.4/) );                                                                      // null, no match because there's no character for the dot

// ==========================================================================================================================================================
// Anchors: string start ^ and end $
// The caret ^ matches at the beginning of the text, and the dollar $ – at the end.
// // Ex : 13
// var str1 = "Mary had a little lamb";
// console.log( /^Mary/.test(str1) );                                                                              // true

// // Ex : 14
// var str1 = "its fleece was white as snow";
// console.log( /snow$/.test(str1) );                                                                              // true

// // Ex : 15
// let goodInput = "12:34";
// let badInput = "12:345";

// var regexp = /^\d\d:\d\d$/;
// console.log( regexp.test(goodInput) );                                                                          // true
// console.log( regexp.test(badInput) );                                                                           // false

// ==========================================================================================================================================================
// Sets and ranges [...]

// // Ex : 16
// console.log( "Mop top".match(/[tm]op/gi) );                                                                     // ["Mop", "top"]
// console.log( "Voila".match(/V[oi]la/) );                                                                        // null, no matches

// // Ex : 17
// console.log( "Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g) ); // xAF   

// // Ex : 18
// var regexp = /[-().^+]/g;
// console.log( "1 + 2 () - 3".match(regexp) );                                                                    // [ '+', '(', ')', '-' ]

// ==========================================================================================================================================================

// Greedy and lazy quantifiers

// // Ex : 19
// var regexp = /".+"/g;
// var str = 'a "witch" and her "broom" is one';
// console.log( str.match(regexp) );                                                                           // [ "witch" and her "broom" ]

// // Ex : 20
// var regexp = /".+?"/g;
// var str = 'a "witch" and her "broom" is one';
// console.log( str.match(regexp) );                                                                           // [ "witch", "broom" ]

// // Ex : 21
// var regexp = /"\w{5}"/g;
// var str = 'a "witch" and her "broom" is one';
// console.log( str.match(regexp) );                                                                           // [ '"witch"', '"broom"' ]


// ==========================================================================================================================================================
// Capturing groups
// A part of a pattern can be enclosed in parentheses (...). This is called a “capturing group”.

// That has two effects:

// It allows to get a part of the match as a separate item in the result array.
// If we put a quantifier after the parentheses, it applies to the parentheses as a whole.

// Ex : 21
// console.log( 'Gogogo now!'.match(/(go)+/ig) );                                                                // ["Gogogo"]

// Ex : 22
// var regexp = /(\w+\.)+\w+/g;
// console.log( "site.com my.site.com".match(regexp) );                                                         // [site.com,my.site.com]
// console.log( "site.com my.site.com".split(" "));                                                             // [site.com,my.site.com]

// Ex : 23

// Ex : 24
// Ex : 25
// Ex : 26

