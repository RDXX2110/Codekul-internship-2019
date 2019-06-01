function displayyear(){
     var a,
     a = Number(document.getElementById("year").value);
     if(a%4==0){
          document.getElementById("yearis").value=a + " " + " is leap year";
     }
     else{
          document.getElementById("yearis").value=a + " " + "is not leap year";
     }
}