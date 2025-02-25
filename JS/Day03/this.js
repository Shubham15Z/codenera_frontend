"use strict"

const user = 
{
    name:"Ajay",
    city:"Pune",
    class:"MCA",
    print: function(){
        document.write("<br> Name :"+this.name);
        document.write("<br> City :"+this.city);
        document.write("<br> Class :"+this.class);
    }
}

user.print();


console.log(this);
function show(){
    console.log(this);
}
show();
