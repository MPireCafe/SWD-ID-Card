function idCard() {
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var Age = document.getElementById("Age").value;
var phoneNumber = document.getElementById("phoneNumber").value;
var address = document.getElementById("Address").value;
var fullName = firstName + " " + lastName;

document.getElementById("postFullName").innerHTML=fullName;
document.getElementById("postAge").innerHTML=Age;
document.getElementById("postPhoneNumber").innerHTML=phoneNumber;
document.getElementById("postAddress").innerHTML=address;
console.log("First Name:" + firstName);
console.log("Last Name:" + lastName);
console.log("Age:" + Age);
console.log("Phone Number:" + phoneNumber);
console.log("Addess:" + address);
 }