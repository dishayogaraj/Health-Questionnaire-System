function generateReport(){

let name =
document.getElementById("name").value;

let age =
document.getElementById("age").value;

let gender =
document.getElementById("gender").value;

let symptoms =
document.getElementById("symptoms").value;

let diabetes =
document.getElementById("diabetes").value;

document.getElementById("result")
.innerHTML =

"<h3>Patient Summary</h3>" +

"Name: " + name + "<br>" +

"Age: " + age + "<br>" +

"Gender: " + gender + "<br>" +

"Symptoms: " + symptoms + "<br>" +

"Medical History: " + diabetes;
}