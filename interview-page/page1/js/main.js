function gogogo() {
    var index;

    var select = document.getElementById("select")
    select.addEventListener('change', function (ev) {
        console.log(ev.target.value)

        document.getElementById("ss").value = ev.target.value
    })

    var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (var i = 0; i < arr.length; i++) {
        var option = document.createElement("OPTION"),
            txt = document.createTextNode(arr[i]);
        option.appendChild(txt);
        option.setAttribute("value", arr[i]);

        select.insertBefore(option, select.lastChild);
    }
    console.log('===>', select.options[0].value)
}

gogogo()
