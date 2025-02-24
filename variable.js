var firstName = "Shopon";

var firstName = "Mukit"; 

firstName = "Stupid"; 
// Redeclare and Rewrite || Global Scope Element. 


let fullName = "Taslim Ahmed";

 fullName = "Moshiur Chura";

 {
   let fullName = "Kashem";
//    console.log(fullName);
 }

 const lastName = "Khan";
//  lastName = "abir";  You Can't Rewrite or Redeclare || Block Scope!!! 


const student = {
    name: "Sadaf Khan",
    age: 35, 
    income: 25000
}

student.age = student.age + 5;

student["income"] = student.income + 10000;

student["income"] = student["income"] + 7000;

student.income = student["income"] + 8000;

// console.log(student["income"]);
console.log(student.income);




