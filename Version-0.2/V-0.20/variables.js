/*index.html variables*/

var abrv = "test";

//Site title like MPD or HPD
var siteTitle = "sub test";

//String of characters specific to google doc
var GString = "1BsoJkyMFtIa2g25i8Z3BvaiplHDhPJpfTKGcC6pkI3Y";

//Site Header
var siteHeader = "TEST Anonymous Tip Tool";

/*----------------------------------------------------------*/
/*submitted.html variables*/

//Police Department Name
var pdName = "TEST Police Department";

//Link to Police Department Image
var pdImage = "https://s3.amazonaws.com/media.jetstrap.com/ichmArxSSw0LB0lcV6oP_Hollis police badge.tan background.jpg";

//Link to Police Department Website
var pdLink = "http://www.hollisnh.org/police/";

//Police Department Phone Number
var pdPhone = "603-ASS-ATCK";

//Main chunk of SRO Email
var sroEmail = "jtown@gmail.com";

//School's abbreviation
var schoolAbrv = "ASHS";

//SRO's Name
var sroName = "Kick Ass McGee";

//SRO Twitter Handle
var twitterHandle = "@srTheshit";

//SRO Twitter Link
var twitterLink = "https://twitter.com/sro_hbhs";

//SRO Facebook
var facebook = "https://www.facebook.com/srohbhs";


/*----------------------------------------------------------*/
/*Constant variables- use above and don't change*/

//One Way Tip Meta
var onewayMeta = String(siteTitle);

//Inserts content title into <meta>
var metaTitle = String(siteTitle);

//Next two define links to embed into <title>
var docHrefLink = "https://docs.google.com/forms/d/" + String(GString) + "/oembed?url=https://docs.google.com/forms/d/" + String(GString) + "/viewform&amp;format=xml";

//Link for doc in <meta> 
var metaDoc = "https://docs.google.com/forms/d/" + String(GString) + "/viewform";

//Link for the favicon
var favicon = "http://srotips.org/favicon.ico";

//Link for doc in One Way Tip View Form 
var onewayViewForm = "https://docs.google.com/forms/d/" + String(GString) + "/viewform";
//Embedform
var onewayEmbed = "https://docs.google.com/forms/d/" + String(GString) + "/viewform?embedded=true";

//Form URL
var formUrl = "https://docs.google.com/forms/d/" + String(GString) + "/formResponse";

//SRO Email + HTML
var sroEmailHTML = "mailto:" + String(sroEmail);

var linkURL = "\'//" + String(abrv) + ".srotips.org/chat/lhc_web/index.php/chat/getstatusembed\'";

/*---------------------------------------------------------*/




/*------------------------------------------------------------------*/
//main function for index.html
function runthisfucker() {
    "use strict";
    document.getElementById("siteTitle").innerHTML = siteTitle;
    document.getElementById("LinkString").setAttribute("href", docHrefLink);
    document.getElementById("metaTitle").setAttribute("content", metaTitle);
    document.getElementById("metaDoc").setAttribute("content", metaDoc);
    document.getElementById("favicon").setAttribute("href", favicon);
    document.getElementById("siteHeader").innerHTML = siteHeader;
    document.getElementById("onewayMeta").setAttribute("content", onewayMeta);
    document.getElementById("onewayViewForm").setAttribute("content", onewayViewForm);
    document.getElementById("onewayEmbed").setAttribute("content", onewayEmbed);
    document.getElementById("ss-form").setAttribute("action", formUrl);
}

//Main function for submitted.html
function runthisfucker2() {
    "use strict";
    document.getElementById("favicon").setAttribute("href", favicon);
    document.getElementById("pdLink").setAttribute("href", pdLink);
    document.getElementById("pdName").innerHTML = pdName;
    document.getElementById("pdPhone").innerHTML = pdPhone;
    document.getElementById("sroEmail").setAttribute("href", sroEmailHTML);
    document.getElementById("sroEmail").innerHTML = sroEmail;
    document.getElementById("schoolAbrv").innerHTML = schoolAbrv;
    document.getElementById("sroName").innerHTML = sroName;
    document.getElementById("pdImage").setAttribute("src", pdImage);
    document.getElementById("pdNameLink").innerHTML = pdName;
    
    if (twitterHandle.length > 2) {
        document.getElementById("twitterLink").setAttribute("href", twitterLink);
        document.getElementById("twitterHandle").innerHTML = twitterHandle;
    }

    if (facebook.length > 2) {
        document.getElementById("facebook").setAttribute("href", facebook);
    }
}



/*-----------------------------------------------------------*/
/* // Outlines and explains each line of the function
//inserts <title>
function title() {
    "use strict";
    document.getElementById("siteTitle").innerHTML = siteTitle;
}

//Inserts needed href and url into <link> for google doc
function linkInsert() {
    "use strict";
    document.getElementById("LinkString").setAttribute("href", docHrefLink);
    document.getElementById("LinkString").setAttribute("url", docUrlLink);
}

//Inserts metaTitle into <meta>
function metaTitle() {
    "use strict";
    document.getElementById("metaTitle").setAttribute("content", metaTitle);
}

//Inserts metaDoc into <meta>
function metaDoc() {
    "use strict";
    document.getElementById("metaDoc").setAttribute("content", metaDoc);
}

//Inserts favicon link
function favicon() {
    "use strict";
    document.getElementById("favicon").setAttribute("href", favicon);
}

//Changes site header
function siteHeader() {
    "use strict";
    document.getElementById("siteHeader").innerHTML = siteHeader;
}

//One Way tip Meta inserter 
function onewayMeta() {
    "use strict";
    document.getElementById("onewayMeta").setAttribute("content", onewayMeta);
}

//Inserts needed content into One Way Tip HTML
function onewaylinkInsert() {
    "use strict";
    document.getElementById("onewayViewForm").setAttribute("content", onewayViewForm);
    document.getElementById("onewayEmbed").setAttribute("content", onewayEmbed);
}

//Inserts Form URL 
function formUrl() {
    "use strict";
    document.getElementById("formUrl").setAttribute("action", formUrl);
}

//Places link to Department Image
function pdImage() {
    "use strict";
    document.getElementById("pdImage").setAttribute("src", pdImage);
}

//Places link to Police Department Site
function pdLink() {
    "use strict";
    document.getElementById("pdLink").setAttribute("href", pdLink);
}

//Inserts Police Department Name
function pdName() {
    "use strict";
    document.getElementById("pdName").innerHTML = pdName;
}

//Inserts Police Department Phone Number
function pdPhone() {
    "use strict";
    document.getElementById("pdPhone").innerHTML = pdPhone;
}

//Inserts SRO Email link and text
function sroEmail() {
    "use strict";
    document.getElementById("sroEmail").setAttribute("href", sroEmailHTML);
    document.getElementById("sroEmail").innerHTML = sroEmail;
}

//Inserts School Abreviation 
function schoolAbrv() {
    "use strict";
    document.getElementById("schoolAbrv").innerHTML = schoolAbrv;
}

//Inserts SRO's name to be displayed
function sroName() {
    "use strict";
    document.getElementById("sroName").innerHTML = sroName;
}

*/
