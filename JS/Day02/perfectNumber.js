function perfectNumber()
{
    let num = 496;
    let sum = 0;

    for(let i = 1; i < num; i++)
    {
        if(num%i == 0)
        {
            sum = sum+i;
        }
    }
    if(sum == num)
    {
        console.log(num+" is perfect number");
    }
    else
    {
        console.log(num+" is not perfect number");
    }
}

perfectNumber();