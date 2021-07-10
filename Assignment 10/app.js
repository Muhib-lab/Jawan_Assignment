//............Chapter 21 to 25 Start........................
// q1
// var firstname = prompt('Enter your first name')
// var lastname = prompt('Enter your last name')
// var fullname = firstname +' '+lastname
// alert(fullname)  
// q2
// var model = prompt('Enter your mobile model')
// console.log('My favourite phone is: '+model)
// console.log(model.length)
// q3
// var a = 'Pakistani'
// console.log('String: '+a)
// console.log(a.indexOf('n'))
// q4
// var a = 'Hello World'
// console.log('String: '+a)
// console.log(a.lastIndexOf('l'))
// q5
// var a = 'Pakistani'
// console.log('String: '+a)
// console.log(a.charAt(3))
// q7
// var a ='Hyderabad'
// for(var i=0; i<a.length ; i++){
//     if(a.slice(i,i+4) === "Hyder"){
//         console.log(a.slice(0,1)+'Islam'+a.slice(i+4))
//     }
// }

// var a = 'Hyderabad'
// console.log(a.replace('Hyder','Islam'))
// q8
// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// console.log(message.replace(/and/g,'&'))
// q9
// var num = '472'
// console.log('Value: '+num)
// console.log('type: '+typeof(num))
// var num1 = +num
// console.log('Value: '+num1)
// console.log('type: '+typeof(num1))
// q10
// var a = prompt();
// console.log('User Input: '+a)
// console.log('Upper Case: '+a.toUpperCase())
// q11
// var a = 'javascript'
// console.log('User Input: '+a)
// console.log(a.slice(0,1).toUpperCase()+a.slice(1).toLowerCase())
// q12
// var a = 35.36;
// console.log(a.toString())
// console.log(typeof(a))
// q13
// var a = prompt('Enter name')
// if(a === '!' || a=== '@' || a=== '.' || a===','){   
// }
// q14
// var b = prompt('Order your cookie')
// var convert = b.toLowerCase()
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// for(var i=0 ; i<A.length ; i++){
//     if(convert == A[i]){
//         alert('Found')
//         console.log(convert +' is available at index '+i +' at our bakery.' )
//     }
// }
// q16
// var university = 'University of Karachi';
// var ar = university.split('')
// console.log(ar)
// for(var i=0 ; i<ar.length ; i++){
//     console.log(ar[i])
// }
// q17
// var a = prompt()
// console.log('User Input: '+a)
// console.log(a.length)
// console.log(a.charAt(7))
// q18
// var a = 'The quick brown fox jumps over the lazy dog'
// var count = (a.match(/he/g) || []).length;
// console.log(count)
//.............Chapter 21 to 25 end................................

//.............Chapter 26 to 30 Start.............................
// var a = 3.45214
// console.log('number: '+a)
// console.log('round off value: '+ Math.round(a))
// console.log('Floor value: '+ Math.floor(a))
// console.log('Ceil: '+Math.ceil(a))
// q2
// var a = -2.673
// console.log('number: '+a)
// console.log('round off value: '+ Math.round(a))
// console.log('Floor value: '+ Math.floor(a))
// console.log('Ceil: '+Math.ceil(a))
// q3
// var a = -4;
// console.log('The absolute value of '+a+' is '+Math.abs(a))
// q4
// var random_num = Math.random()
// console.log('The random dice value is: '+Math.ceil(random_num*6))
// q5
// var a = Math.random()
// var b = Math.ceil(a*2)
// console.log(b)
// if(b === 2){
//     console.log('Random coin value: Head')
// }else{
//     if(b === 1){
//         console.log('Random coin value: Tail')
//     }
// }
// q6
// var a = Math.random();
// var b = Math.ceil(a*100)
// console.log('Random number between 1 and 100: '+b)
// q7
// q8
// var a = Math.random();
// var b = Math.ceil(a*10)
// var c = +prompt('Enter secret number')
// if(b === c){
//     alert('Congrats')
// }else{
//     alert('Try again')
// }
//................Chapter 26 to 30 end.........................

//................Chapter 31 to 34 Start.......................
// q1
// var date_current = new Date();
// console.log(date_current)
// q2
// var date_current = new Date();
// var arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
// console.log(arr[date_current.getMonth()])
// q3
// var date_current = new Date();
// var arr1 = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat']
// console.log(arr1[date_current.getDay()])
// q4
// var date_current = new Date();
// var arr1 = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat']
// var b = arr1[date_current.getDay()]
// if(b === 'Sat' || b === 'Sat'){
//     alert('Its fun day')
// }else{
//     alert('Its working day')
// }
// q5
// var date_current = new Date();
// var b = date_current.getDate();
// if(b <= 15){
//     alert('First fifteen days of the month')
// }else if(b > 15){
//     alert('Last days of the month')
// }
// q6
// var date_current = new Date();
// var mint = (date_current.getTime())/ (1000*60*60)
// console.log(date_current)
// console.log('Elapsed milliseconds since January 1,1970: '+ date_current.getTime());
// console.log('Elapsed minutes since January 1,1970: '+ mint)
// q7
// var date_current = new Date();
// var b = date_current.getHours();
// if(b <= 12 ){
//     alert('Its AM')
// }else if(b > 12 ){
//     alert('Its PM')
// }
// q8
// var date_current = new Date('dec 31, 2021');
// console.log(date_current)
// q9
// var a = new Date('jun 1, 2021');
// var date_current = new Date();
// var left = (date_current.getTime()) - (a.getTime())
// console.log(Math.ceil(left/(1000*60*60*24)))
// q10
// var date_current = new Date();
// var b = new Date('jan 1, 2021');
// var final = (date_current.getTime())-b.getTime();
// console.log('On reference date '+date_current)
// console.log(Math.ceil(final/(1000*60)))
// q11
// q12
// var date_current = new Date();
// console.log('Current date: '+date_current)
// var b = new Date();
// b.setFullYear(1921);
// b.setDate(1);
// b.setMonth(0);
// console.log(b)
// q13
// var date_current = new Date();
// var user = +prompt('Enter your age')
// console.log('Your age is: '+user)
// var year = (date_current.getFullYear())-(user)
// console.log('Your birth year is '+year)
// q14
// var cus_name = prompt('Enter your name')
// console.log('Customer Name: '+cus_name)
// var month = prompt('Month name')
// console.log('Current Month: '+month)
// var units = prompt('No of units?')
// console.log('No. of units: '+units)
// var charges = 16;
// console.log('Charges per unit: '+charges)
// console.log('</br>')
// var net_amount = units * charges
// console.log('Net amount payable (within due date): '+net_amount)
// var surcharge = 350;
// console.log('Late Payment Surcharge: '+surcharge)
// var gross_amount = net_amount + surcharge
// console.log('Gross amount payable (after due date): '+ gross_amount)
//...................Chapter 31 to 34 end...................................

//...................Chapter 35 to 38 Start.................................
// q1
// function date(){
//     var a = new Date();
//     console.log(a)
// }
// date()
// q2
// function user(){
//     var first = prompt('Enter your first name')
//     var second = prompt('Enter your last name')
//     var final = first +' '+second
//     console.log(final)
// }
// user()
// q3
// function calculator(){
//     var num1 = +prompt('Enter 1st num')
//     var num2 = +prompt('Enter another number')
//     var operator = prompt('Which operator do you like?')
//     if(operator === '+'){
//         var a = num1 + num2
//         console.log(a)
//     }else if(operator === '-'){
//         var b = num1 - num2
//         console.log(b)
//     }else if(operator === '*'){
//         var c = num1 * num2
//         console.log(c)
//     }else if(operator === '/'){
//         var d = num1 / num2
//         console.log(d)
//     }
// }
// calculator()
// q4
// function square(a){
//     var b = a *2;
//     console.log(b)
// }
// square(2)
// q5
// function fact(a){
//     var b = factorial(a)
//     console.log(b);
// }
// fact(2)
// q7
// function count(){
//     var a = +prompt('Enter starting number')
//     var b = +prompt('Enter ending number')
//     for(var i=a ; i<= b ; i++){
//         console.log(i)
//     }
// }
// count()
// q9
// function area(){
//     var w = +prompt('Width of a rectangle?')
//     var h = +prompt('Height of a rectangle?')
//     var c = w * h
//     console.log(c) 
// }
// area()
// q13
// var a = 'JSResourceS.com'
// var count = (a.match(/o/g)|| []).length
// console.log(count)
// q14
// function calcCircumference(){
//     var r = prompt('Enter radius here')
//     var circum = 2*3.142*r
//     console.log(circum) 
// }
// calcCircumference()
// q15
// function calcArea(){
//     var r = prompt('Enter radius here')
//     var area = (3.142)* (Math.pow(r,2))
//     console.log(area) 
// }
// calcArea();

// function S(){
//     var a = +prompt('Enter value of a ')
//     var b = +prompt('Enter value of b ')
//     var c = +prompt('Enter value of c ')
//     var s = (a + b + c) / 2
//     return
// }
// function area(){
//     var ar = S()*(S() - a)*((S) - b)*(S() - c)
//     console.log(ar) 
// }
// area();