function calc(){
let NUM = prompt("enter your name")
let totalmarks=+document.querySelector("#tm").value;
let obtainmarks=+document.querySelector("#om").value;
let res = (obtainmarks/totalmarks)*100;  
if (res>=90 && res<=100) {
    document.querySelector("#change").innerHTML=`hi dear! ${NUM}  your percentage is ${res} and your grade is A+`;
}else if (res>=80 && res<=90) {
    document.querySelector("#change").innerHTML=`hi dear! ${NUM}  your percentage is ${res} and your grade is A`;
} else if (res>=65 && res<=80) {
    document.querySelector("#change").innerHTML=`hi dear! ${NUM}  your percentage is ${res} and your grade is B+`;
} else if (res>=45 && res<=65) {
    document.querySelector("#change").innerHTML=`hi dear! ${NUM}  your percentage is ${res} and your grade is B`;
} else if (res>=33 && res<=45) {
   document.querySelector("#change").innerHTML=`hi dear! ${NUM}  your percentage is ${res} and your grade is C`;
}  else {
    document.querySelector("#change").innerHTML=`hi dear! ${NUM}  your percentage is ${res} and your are fail `;
}
   

    
}













