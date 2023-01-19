// This code creates a line chart with one single line of code:
//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);


// This code creates a bar graph using JavaScript
// var trace = [{
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// }];

// Plotly.newPlot("plotArea", trace);


// The chart now has a title, and three different arguments are
//called in the Plotly.newplot() function:
// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };
// var layout = {
//     title: "Luncheon Survey",
//     //We add the axis labels
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };
// Plotly.newPlot("plotArea", [trace], layout);



// This graph will chart several beverages and the percentage of the total 
// // number of orders they comprise in a popular nonalcoholic bar.
// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
// };
// var data = [trace];
// var layout = {
//     title: "'Bar' Chart",
//     xaxis: {title: "Drinks"},
//     yaxis: {title: "% of Drinks Ordered"}
// };
// Plotly.newPlot("plotArea", data, layout);


// Create a Pie Chart with the Data above
// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: 'pie'
// };
// var data = [trace];
// var layout = {
//     title: "'Pie' Chart",
// };
// Plotly.newPlot("plotArea", data, layout);


// // Create a Scatter Plot from the Plotly Documentation
// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     mode: 'markers',
//    type: 'scatter',
// };
// var data = [trace];
// var layout = {
//     title: 'Scatter Plot'
// };
// Plotly.newPlot('myDiv', data, layout);


//Example for the map() function
// let words = ["these", "words", "need", "capitalized"]
// let caps = words.map(words => words.toUpperCase())
// console.log(caps)


// Example in which all the numbers of an array are 
// doubled:
// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(function(num){
//     return num * 2;
// });
// console.log(doubled);


// For example, the following two examples 
// would be equally valid:
//var doubled = numbers.map(function(integer) {
//   return integer * 2;
//   });
//console.log(doubled);
//As would this:
// var doubled = numbers.map(function(carPrice) {
//     return carPrice * 2;
//     });
//console.log(doubled);


// SKILL DRILL add 5 to each
// var numbers = [0,2,4,6,8];
// var addfive = numbers.map(function(addfive){
//     return addfive + 5;
// });
// console.log(addfive);


// Another example on how to use map() to extract a 
// specific property from each object in the array:
// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityNames = cities.map(function(city){
//     return city.City;
// });
// console.log(cityNames);


// The Filter Method:
// let numbers = [13, 22, 36, 54, 55]
// let evenNumbers = numbers.filter(number => number % 2 == 0)
// console.log(evenNumbers)

// Larger function
// var numbers = [1,2,3,4,5];
// var larger = numbers.filter(function(num){
//     return num > 1;
// });
// console.log(larger);


// // Arrow Function. Recap:
// var numbers = [1,2,3,4,5];
// var doubled = numbers.map(num => num * 2);
// console.log(doubled);

// The slice() Method: 
// var integers = [0,1,2,3,4,5]
// var slice1 = integers.slice(0,2);
// console.log(slice1)
// In this example, the slice()method returns the first 
// two elements of the integer array: [0,1]


// To slice to the end of an array, you can omit the second argument:
// var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
// words.slice(3, );
// console.log(slice)
