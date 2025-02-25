

function checkPalindrome()
{
    let num = 121;
    let rev = 0;
    for(let i = num; i > 0; i=Math.floor(i/10))
    {
        let rem = i%10;
        rev = rev*10+rem;
    }
    console.log(rev);
    if(rev == num)
    {
        console.log(num+" is palindrome ");
    }
    else
    {
        console.log(num+" is not palindrome");
    }
}

checkPalindrome();