function add(p,q)
{
    document.write("Add of 2 var : "+(p+q));
}

let a = 100, b = 200;
add(a,b);

//Max digit from number
document.write("<br><br> Max Digit");
function maxDig(p)
{
    let max = 0;

    while(p != 0)
    {
        let digit = p % 10;
        if(digit > max)
        {
            max = digit;
        }
        p = Math.floor(p/10);
    }
    document.write("<br>Max digit is = "+max);
}
maxDig(2857415);




document.write("<br><br> Function With arg and return type:")

function maxDig1(p)
{
    let max = 0;

    while(p != 0)
    {
        let digit = p % 10;
        if(digit > max)
        {
            max = digit;
        }
        p = Math.floor(p/10);
    }
    return max;
}

let maxDigit = maxDig1(14793);
document.write("<br>Max Digit = "+maxDigit);

