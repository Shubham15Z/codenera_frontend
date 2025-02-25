function factorial(f)
{
    let fact = 1;
    while(f > 0)
    {
        fact = fact*f;
        f--;
    }
    return fact;
}
let num = 5;
let result = factorial(num);
document.write("factorial of "+num+" is "+result);