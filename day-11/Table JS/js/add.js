function printTable(){
    var num;
    num=Number(document.getElementById('txtNumber').value);
    for(var i=1; i<=10; i++){
        document.getElementById("pPrint").value=num+" X "+ i + " = " + (num*i);
    }
}