

function calculateBMI() {

//Get Values
var weight = document.getElementById('weight').value;
var height = document.getElementById('height').value;

//Check condition agar user nay number enter nahi kya to alert kardo:

if(isNaN(weight) || isNaN(height) || height<=0 || weight<=0) {
    alert("plese enter valid height and weight")
    return;
}


//Formula BMI Apply on weight and height

var bmI = weight / (height * height);


//Jo Bmi aya hay wo user ko show kardo

var result = document.getElementById('category');




}