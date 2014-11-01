//Sets universal iframe variable loaded?
var loaded = 0;

//Shows loading screen
function show() {
    "use strict";
    loaded = 1;
    document.getElementById("loading").setAttribute("style", "display: block;");
}
//Removes loading screen
function onframeload() {
    "use strict";
    document.getElementById("loading").style.display = "none";
    document.getElementById("uploaded").style.display = "block";
}

//Loads when iframe loads and sets variable to 1 
function patience() {
    "use strict";
    window.parent.onframeload();
}

//Redirects page to submitted.html
function redirect() {
    "use strict";
    window.open("submitted.html", '_self');
}

//Grand mess of a function that checks if all parameters are met
function ipEmbed() {
    "use strict";
//Fills out third form
    var ip = document.getElementById("ip").innerHTML,
        hostname = document.getElementById("hostname").innerHTML,
        cord = document.getElementById("cord").innerHTML,
        host = document.getElementById("host").innerHTML,
        city = document.getElementById("city").innerHTML,
        state = document.getElementById("state").innerHTML,
        country = document.getElementById("country").innerHTML,
        zip = document.getElementById("zip").innerHTML;
    
    document.getElementById("entry_811117367").setAttribute("value", TownAbrv);
    document.getElementById("entry_264688397").setAttribute("value", ip);
    document.getElementById("entry_1732637721").setAttribute("value", hostname);
    document.getElementById("entry_1718694302").setAttribute("value", cord);
    document.getElementById("entry_1306956551").setAttribute("value", host);
    document.getElementById("entry_1056559948").setAttribute("value", city);
    document.getElementById("entry_297016130").setAttribute("value", state);
    document.getElementById("entry_1826134743").setAttribute("value", country);
    document.getElementById("entry_572621447").setAttribute("value", zip);
    
    //Checks if description is filled
    if (document.getElementById("entry_1131071639").value.length > 2) {
        //Checks if a drop down menu is picked
        if (document.getElementById("entry_3915226").selectedIndex > 0) {
            //Checks to see if yes or no is selected
            if (document.getElementById("group_144592382_1").checked === true || document.getElementById("group_144592382_2").checked === true) {
                if (document.getElementById("agreed").checked === true) {
                    //Checks to see if yes, if the file is uploaded
                    if (document.getElementById("group_144592382_2").checked === true || (document.getElementById("group_144592382_1").checked === true && loaded === 1)) {
                        //Shows Loading Ring
                        document.getElementById("loading").style.display = "block";
                        //Clicks Tip Form button
                        document.getElementById("ss-submit").click();
                        //Clicks IP button
                        document.getElementById("ss-submit2").click();
                        //Redirects page after 3 seconds
                        setTimeout(function () {window.open("submitted.html", '_self'); }, 3000);
                    } else {
                    //Says Yes file but not uploaded
                        document.getElementById("filewarning").innerHTML = "File not Uploaded!";
                    }
                    //Makes Accept button font bold
                } else { document.getElementById("agree!").style.fontWeight = "bolder";
                       }
                //Makes missing aspects bold
            } else { document.getElementById("redq3").style.fontWeight = "bolder";
                     document.getElementById("redq1").style.fontWeight = "normal";
                   }
        } else { document.getElementById("redq1").style.fontWeight = "bolder";
                 document.getElementById("redq2").style.fontWeight = "normal";
                   }
    } else { document.getElementById("redq2").style.fontWeight = "bolder";
           }
    
}


