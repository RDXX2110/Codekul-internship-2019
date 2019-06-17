
    function selectid() {
        var select = document.getElementById("select"),
                     arr = ["css","c.engg","e.engg","mech","mba"];
             
             for(var i = 0; i < arr.length; i++)
             {
                 var option = document.createElement("OPTION"),
                     txt = document.createTextNode(arr[i]);
                 option.appendChild(txt);
                 option.setAttribute("value",arr[i]);
                 select.insertBefore(option,select.lastChild);
             }
             
    }
