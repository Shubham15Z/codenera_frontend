let arr = ["abc", "cbd","mdk"];

for(let i = 0; i < arr.length; i++)
{
    document.write(arr[i]+"<br>");
}

document.write("-------------------------<br> Using for in loop <br><br>")
arr[0] = "klm";
for(let j in arr)
{
    document.write(arr[j]+"<br>");
}
