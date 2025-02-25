
const person = {
    firstname: "Ajay", 
    lastname: "Sharma", 
    age: 29,
    display: function(){
        document.write("Inside object function");
    }
};

document.write("First Name : "+person.firstname);
document.write("<br>Last Name : "+person.lastname);
document.write("<br>Age : "+person.age);
document.write("<br>");
document.write(person.display());

const person1 = new Object();
person1.firstname="Rahul";
person1.lastname="Roy";
person1.age=27;

document.write("<br><br>First Name : "+person1.firstname);
document.write("<br>Last Name : "+person1.lastname);
document.write("<br>Age : "+person1.age);

person1.age=29;

document.write("<br><br>Age : "+person1.age);