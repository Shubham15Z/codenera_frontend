/*
Create a switch case program to check a student's grade based on marks:

"A" for 90 and above
"B" for 75 to 89
"C" for 50 to 74
"Fail" for below 50
*/

let grade = 'B';

switch(grade)
{
    case 'A':
    {
        console.log("Marks are above 90");
        break;
    }
    case 'B':
    {
        console.log("Marks are between 75 to 89");
        break;
    }
    case 'C':
    {
        console.log("Marks are between 50 to 74");
        break;
    }
    case 'Fail':
    {
        console.log("Marks are below 50");
        break;
    }
    default:
    {
        console.log("Enter valid grade");
        break;
    }
}