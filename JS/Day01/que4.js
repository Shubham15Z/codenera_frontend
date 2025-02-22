/*
4. Check if a year is a leap year or not.
*/

let year = 2100;

if(year % 100 == 0)
{
    if(year % 400 == 0)
    {
        console.log("it is leap year");
    }
    else
    {
        console.log("It is not leap year");
    }
}
else 
{
    if(year % 4 == 0)
    {
        console.log("It is leap year");
    }
    else
    {
        console.log("It is not leap year");
    }
}