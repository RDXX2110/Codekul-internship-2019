function reversenumber()
{

    var d, n
    n = (document.getElementById("list").value);
    d = n.split("").reverse().join("");
    document.getElementById("listboxx").value = d;



    




}
