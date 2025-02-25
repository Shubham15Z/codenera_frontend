checkStringPalindrome();
function checkStringPalindrome()
{
    let s1 = 'nayan';
    let rev = '';
    for(let i = s1.length-1; i >= 0; i--)
    {
        rev = rev+s1[i];
    }
    console.log(rev);
    if(rev == s1)
    {
        console.log(s1+" is palindrome ");
    }
    else
    {
        console.log(s1+" is not palindrome");
    }
}

