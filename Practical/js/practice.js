//Array Odd or Even
var num =[1,3,2,5,4];
var even=[];
var odd=[];
for (var i =0; i< num.length; i++){
    if( num[i]%2 ===0){
        even.push(num[i]);
    }else{
        odd.push(num[i]);
    }
}
console.log("Even numbers:"+ even);
console.log("Odd numbers: "+ odd);

//minimum 
var numbers= [22,32,44,54,12];
var min=numbers[0];
for ( var i =0; i<numbers.length; i++){
    if (numbers[i]< min){
        min= numbers[i];
    }
}
console.log(min);

//