let result;
let i = 1;
do
{
    let n1 = 30, n2 = 15;
    let operator = "-";

    switch(operator)
    {
        case "+":
        {
            result = n1+n2;
            document.write(result);
            break;
        }
        case "-":
        {
            result = n1-n2;
            document.write(result);
            break;
        }
        case "*":
        {
            result = n1*n2;
            document.write(result);
            break;
        }
        case "/":
        {
            result = n1/n2;
            document.write(result);
            break;
        }
        case "%":
        {
            result = n1%n2;
            document.write(result);
            break;
        }
        case "**":
        {
            result = (n1**n2);
            document.write(result);
            break;
        }
        default:
        {
            document.write("Enter valid");
        }
    }
    i--;
}
while(i>=1);

