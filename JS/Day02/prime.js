let n = 47;
let count = 0;
let i = 1;
do
{
    if(n % i == 0)
    {
        count++;
    }
    i++;
}
while(i <= n);

if(count == 2)
{
    document.write(n+" is prime number ")
}
else
{
    document.write(n+" is not prime number");
}