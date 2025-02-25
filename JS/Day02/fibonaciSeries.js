function fibonaciSeries()
{
    let n = 8;
    let a = 0;
    let b = 1;

    console.log(a);
    console.log(b);
    document.write(a+" "+b+" ");
    for(let i = 1; i <= n; i++)
    {
        let c = a+b;
        console.log(c);
        document.write(c+" ");
        a = b;
        b = c;
    }
}

fibonaciSeries();