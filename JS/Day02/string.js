let str = "hello javascrtipt";

document.write("String length = "+str.length);

let str1 = "This is \\ javascript \"Hello\"";
document.write("<br>"+str1);

let str3 = "\"Hello\"";
document.write("<br>"+str3.length+"<br>")

let str4 = `Java is "Robust"
            Java is OOP
            Java is Portable`;
document.write(str4);

let str5 = "Java is Simple";

for(let i in str5)
{
    document.write("<br>"+str5.charAt(i));
}

document.write("<br>"+str5.toLowerCase());
document.write("<br>"+str5.toUpperCase());

document.write("<br> <br>String concat<br><br>")

let str6 = "Hello ";
let str7 = "Javascript";
document.write(str6.concat(str7));

// let str8 = `    Hello   javascript language   `;
// console.log("Before trim : "+str8+"XYZ");
// str8 = str8.trim();
// console.log("After trim : "+str8+"XYZ");


// let str9 = `java is a simple, java is robust, java is secure`;
// console.log("Before replace : "+str9);

// str9 = str9.replace("java","python");
// console.log("only replace : "+str9);
// str9 = str9.replaceAll("java","python");
// console.log("After replace all : "+str9);

// let str10 = `Java is a simple, java is robust, Java is secure`;
// const arr = str10.split("a");

// for(let i in arr)
// {
//     console.log(arr[i]);
// }

// let str11 = `Java is a simple, java is robust, java is secure`;

// let str12 = str11.slice(5,12);
// console.log(str12);

// let str13 = str11.substring(5);
// console.log(str13);

let str14 = `java is a simple, java is robust, java is secure.`;

let firstIndex = str14.indexOf("java");
console.log(firstIndex);

let lastIndex = str14.lastIndexOf("java");
console.log(lastIndex);

let s1 = str14.search("is");
console.log(s1);

let s2 = str14.startsWith("Java");
console.log(s2);

let s3 = str14.endsWith(".");
console.log(s3);