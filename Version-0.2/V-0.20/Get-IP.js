
function ipEmbed() {
    "use strict";
    var ip = document.getElementById("ip").innerHTML,
        hostname = document.getElementById("hostname").innerHTML,
        cord = document.getElementById("cord").innerHTML,
        host = document.getElementById("host").innerHTML,
        city = document.getElementById("city").innerHTML,
        state = document.getElementById("state").innerHTML,
        country = document.getElementById("country").innerHTML,
        zip = document.getElementById("zip").innerHTML;
    
    document.getElementById("entry_811117367").setAttribute("value", schoolAbrv);
    document.getElementById("entry_264688397").setAttribute("value", ip);
    document.getElementById("entry_1732637721").setAttribute("value", hostname);
    document.getElementById("entry_1718694302").setAttribute("value", cord);
    document.getElementById("entry_1306956551").setAttribute("value", host);
    document.getElementById("entry_1056559948").setAttribute("value", city);
    document.getElementById("entry_297016130").setAttribute("value", state);
    document.getElementById("entry_1826134743").setAttribute("value", country);
    document.getElementById("entry_572621447").setAttribute("value", zip);
    if (document.getElementById("entry_1131071639").value.length > 2) {
        if (document.getElementById("entry_3915226").selectedIndex >= 0) {
            document.getElementById("uploadbutton").click();
            document.getElementById("ss-submit").click();
            document.getElementById("ss-submit2").click();
        }
    }
}

    


function retrieve() {
    "use strict";
    var ip2 = document.getElementById('host').contentWindow.document.getElementById('ip').innerHTML;
    document.getElementById("insert").innerHTML = ip2;

}

