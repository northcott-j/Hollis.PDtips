function ipEmbed() {
    "use strict";
    // Checks to see if Drop down item and description are done
    if (document.getElementById("entry_3915226").selectedIndex > 0 &&
        document.getElementById("entry_1131071639").value.length > 2) {

        //Fills out third form
        $.getJSON("http://www.telize.com/geoip?callback=?", function (json) {

            var ip = json.ip,
                hostname = "No Hostname",
                cord = json.latitude + json.longitude,
                host = json.isp,
                city = json.city,
                state = json.region_code,
                country = json.country,
                zip = json.postal_code;

            //document.getElementById("entry_811117367").setAttribute("value", TownAbrv);
            document.getElementById("entry_264688397").setAttribute("value", ip);
            document.getElementById("entry_1732637721").setAttribute("value", hostname);
            document.getElementById("entry_1718694302").setAttribute("value", cord);
            document.getElementById("entry_1306956551").setAttribute("value", host);
            document.getElementById("entry_1056559948").setAttribute("value", city);
            document.getElementById("entry_297016130").setAttribute("value", state);
            document.getElementById("entry_1826134743").setAttribute("value", country);
            document.getElementById("entry_572621447").setAttribute("value", zip);
        });
        document.getElementById("ss-submit2").click();
    }
}