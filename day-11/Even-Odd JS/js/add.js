function odd_even(){
    var no;
    no=Number(document.getElementById("no_input").value);
    if(no%2==0)
    {
        document.getElementById("result").value=no+"  "+" IS EVEN Number";
    }
    else
    {
        document.getElementById("result").value=no+"  "+"IS ODD Number";
    }
    }