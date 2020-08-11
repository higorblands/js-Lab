//Instrucions     
// @@@BMI < 18.5, the output should be: "Your BMI is <bmi>, so you are underweight."
// @@@BMI 18.5 - 24.9, the output should be: "Your BMI is <bmi>, so you have a normal weight."
// @@@BMI >24.9, the output should be: "Your BMI is <bmi>, so you are overweight."
function bmiCalculator (weight, height) {

if(weight > 0 && height > 0){	

var bmi = weight/(height/100*height/100);
}
if(bmi > 18.5 && bmi < 25.9){
var interpretation = ( 'Your BMI is ' +bmi + ', so you have a normal weight.');
}
if(bmi > 24.9){
 interpretation = ( 'Your BMI is ' + bmi + ', so you are overweight.');
}
if(bmi < 18.5){
interpretation = ( 'Your BMI is ' + bmi+ ', so you are underweight.');
}
// return of result    
return interpretation;
}
// input value to function
bmiCalculator(80,200);
