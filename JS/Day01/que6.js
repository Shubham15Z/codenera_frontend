/*
6. Assign a grade based on marks:  
   - 90 or above → "A"  
   - 75 to 89 → "B"  
   - 50 to 74 → "C"  
   - Below 50 → "Fail"  
*/

let marks = 60;

if(marks >= 90)
    console.log("A");
else if(marks >= 75 && marks <= 89)
    console.log("B");
else if(marks >= 50 && marks <= 74)
    console.log("C");
else if(marks <= 50)
    console.log("Fail");