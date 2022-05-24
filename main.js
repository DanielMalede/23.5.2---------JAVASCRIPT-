// function printDataAndHour() {
//     var presentDate = Date()
//     console.log(presentDate);
// }
// printDataAndHour()

// function printdate(mydate) {
//     var mydate = new Date(mydate)
//     console.log(mydate);
// }
// printdate(20/04/2022)

// function printDate(mydate) {
//     var mydate = new Date( prompt("enter a Date"))
//     console.log(mydate);
// }
// printDate()

// function printMonth(mydate) {
//     var mydate =new Date( prompt("enter a Date"))
//     return mydate.getMonth();
// }
// console.log(printMonth()); 

// function printHour(mydate) {
//     var mydate = new Date (prompt("enter a hour"))
//     console.log(mydate.getHours());
// }
// printHour()

// function printYear(mydate) {
//     var mydate = new Date (prompt())
//     console.log( mydate.getFullYear());
// }
// printYear()

// function printminutes(mydate) {
//     var mydate = new Date(prompt())
//     console.log(mydate.getMinutes());
// }
// printminutes()


// function returnEarlyDate(userdate1,userdate2) {
//     var userdate1 = new Date(prompt())
//     var userdate2 = new Date(prompt())
//     if (userdate2<userdate1) {
//         return userdate2
//     }
//     else{
//         return userdate1
//     }
// }
// console.log(returnEarlyDate()); 

// function returnAge(myAge) {
//     var myAge = new Date(prompt("enter your bitrthdate"))
//     var month = new Date()
//     return month.getFullYear()-myAge.getFullYear() 
// }
// console.log(returnAge());

// function chackIfUserIsUnderEigtheen(mydate) {
//     var mydate = new Date(prompt("enter your Date"))
//     var presentYear = new Date()
//     var userAge = presentYear.getFullYear()-mydate.getFullYear()
//     if (userAge>18) {
//         alert("your are welcome My Friend")
//     }
//     else{
//         alert("your not welcome My Friend")
//     }
// }
// console.log(chackIfUserIsUnderEigtheen()); 

// function getLocation(mydate) {
//     var mydate = new Date(prompt("enter you Date"))
//     console.log(mydate.geolocation.getCurrentPosition(savePosition, positionError, {timeout:10000})); 
// }
// getLocation()

// function printUserLocation(locationUser) {
//     var locationUser = new Date(prompt()).getTimezoneOffset();
//     console.log(locationUser)
// }
// printUserLocation()
// var offset = new Date().getTimezoneOffset();
// console.log(offset);
// const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// console.log(timezone);

// function creatRandomDate() {
//     console.log(Math.floor(Math.random()*32+1)+"/"+Math.floor(Math.random()*12+1)+"/"+Math.floor(Math.random()*(100-1)+1))
// }
// creatRandomDate()
