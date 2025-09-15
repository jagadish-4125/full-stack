// const givenName="jagadish";
// //console.log(givenName);
// const rollno="234g1a3355";
// //console.log(rollno);
// const branch="CSE";
// //console.log(branch);
// const course="Full stack web development";
// //console.log(course);

// //function
// function generateWelcomeMsg(name){
//     return "Welcome " + name + " good morning";
// }

// let Welcome_msg=generateWelcomeMsg(givenName);
// console.log(Welcome_msg);

// // example
// function mybio(name,rollno,branch,course){
//     return "my name is   :" + name +"\nmy rollno is :" + rollno +"\nmy branch is :" + branch +"\nmy course is :" + course;
// }
// let my_bio=mybio(givenName,rollno,branch,course);
// console.log(my_bio);

// // example2
// function add(a,b){
//     a=10;
//     b=20;
//     return a+b;
// }
// console.log(add());

// // example3

// let age=20;

// let addage=age+2;
// let subage=age-2;
// let mulage=age*2;
// let divage=age/2;

// console.log(addage);
// console.log(subage);
// console.log(mulage);
// console.log(divage);

// // example4

// let score=20;

// function updatescore(){
//     return [score+10,score-10,score*10,score/10];
// }

// console.log(updatescore());

// function area(a,b){
//     a=10;
//     b=20;
//     return a*b;
// }
// console.log(area());

//  //example
// function factorial(m) {
//     if (m==0||m==1){
//       return 1;
// }else{
//    return m * factorial(m-1);
//    }
// }
// console.log(factorial(5));

// // example6

// let a=10;
// let b=20;
//  function calulator(a,b){
//     console.log("addition is :" + (a+b));
//     console.log("subtraction is :" + (a-b));
//     console.log("multiplication is :" + (a*b));
//     console.log("division is :" + (a/b));
//  }
//  calulator(a,b);  

//  calulator(0,2)

// //example7 compound interest
// let p=2000;
// let r=10;
// let t=2;
// function compoundinterest(p,r,t){
//    let amount=p*(Math.pow((1+r/100),t));
//    let ci=amount-p;
//    return ci;
// }
// console.log(compoundinterest(p,r,t));

// console.log(compoundinterest(3000,5,3));

// // example8 user input
// let input1 = prompt("enter the principle amount");
// console.log(input1);
// let input2 = prompt("enter the rate of interest");
// console.log(input2);
// let input3 = prompt("enter the time in years");
// console.log(input3);
// function compoundinterest1(p,r,t){
//    let amount=p*(Math.pow((1+r/100),t));
//    let ci=amount-p;
//    return ci;
// }
// console.log(compoundinterest1(input1,input2,input3));


// // example9 calculator if conditions
// let num1=20;
// let num2=10;
// let operator="/";
// function calculator(num1,num2,operator){
//    if(operator=="+"){
//       return num1+num2;
//    }
//    else if (operator=="-"){
//       return num1-num2;
//    }else if (operator=="*"){
//       return num1*num2; 
//    }else if (operator=="/"){
//       return num1/num2;
//    }else{
//       return "invalid operator";
//    }
// }
// console.log(calculator(num1,num2,operator));
// console.log(calculator(30,15,"+"));
// console.log(calculator(30,15,"-"));
// console.log(calculator(30,15,"*"));
// console.log(calculator(30,15,"/"));
// console.log(calculator(30,15,"%"));

// // example10 student grade system user input
// let input=prompt("enter the marks");
// let marks=parseInt(input);
// function studentgrade(marks){ 
//    if(marks>=90){
//       return "A";
//    }else if(marks>=80){
//       return "B";
//    }else if(marks>=70){
//       return "C";
//    }else if(marks>=60){
//       return "D";
//    }else if(marks>=50){
//       return "E";   
//    }else{
//       return "F";
//    }
// }
// console.log(studentgrade(marks));

// //input

// let marks=85;
// function studentgrade(marks){ 
//    if(marks>=90){
//       return "A";
//    }else if(marks>=80){
//       return "B";
//    }else if(marks>=70){
//       return "C";
//    }else if(marks>=60){
//       return "D";
//    }else if(marks>=50){
//       return "E";   
//    }else{
//       return "F";
//    }
// }
// console.log(studentgrade(marks));
// console.log(studentgrade(45));
// console.log(studentgrade(55));

// /*a person traveling from a to b at a speed of 30kmph and the speed
//  is doubled every 10 min and the max speed is 120kmph and cal the 
//  distance  b/w a and b amd he will traveled 96 mins*/

// let speed1=30;
// let time1=96;
// let maxspeed1=120;
// let distance1=0;  
// for ( let i=0;i<90;i+=10){
//       distance1=distance1+speed1/6;
//       if (speed1<120){
//          speed1=speed1*2;
//       }
//    }
//    distance1=distance1+maxspeed1/10
//    console.log(distance1);

// // the basic pay is 30 rs for 4 km and for the next 10 km the price is 10 rs per km
// //  and for the next 15 km the price is 15 rs per km for the more km the price is 20 rs 
// // user tarvel 19.5 kms what is price
//  function calculateAutoPrice(distance) {
//   let price = 0;
//   if (distance <= 4) {
//     price = 30; 
//   } else {
//     price = 30; 
//     distance -= 4;
//     if (distance <= 5) {
//       price += distance * 10;
//       return price;
//     } else {
//       price += 5 * 10; 
//       distance -= 5;
//     }
//     if (distance <= 10) {
//       price += distance * 15;
//       return price;
//     } else {
//       price += 10 * 15; 
//       distance -= 10;
//     }
//     price += distance * 20;
//   }

//   return price;
// }

// let travelled = 19.5;
// console.log("Total Price for " + travelled + " km: ₹" + calculateAutoPrice(travelled));

// // example12 print 5 table
// let n=5;
// for (i=1;i<=10;i++){
//    console.log(" 5 " + " x " + i + " = " +(n*i));
// }

// // example13 do while loop
// let j=0;
// do{
//    console.log("jagadsish");
//    j++;
// } while(j<2);

// // dom manipulation example 14

// // select an element
// const myDiv = document.getElementById('myDiv');
// // change its content
// myDiv.textContent = 'Hello, World!';
// //add a class
// myDiv.classList.add('highlight');
// // create a new paragraph
// const newPara = document.createElement('p');
// newPara.textContent = 'This is a new paragraph.';
// myDiv.appendChild(newPara);
// // add an event listener
// myDiv.addEventListener('click',() => {
//    alert('Div clicked!');
// });