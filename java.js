

function calculateBMI() {

//Get Values
var weight = document.getElementById('weight').value;
var height = document.getElementById('height').value;

//Check condition agar user nay number enter nahi kya to alert kardo:

if(isNaN(weight) || isNaN(height) || height<=0 || weight<=0) {
    alert("plese enter valid height and weight")
    return;
}



}