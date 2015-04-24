/*index.html variables*/

//Put site abbreviation here ex. {HPD}.srotips.org won't be used until later
var abrv = "";

//Site title like MPD or HPD Anonymous Tips
var siteTitle = "Test Version 0.11";

//String of characters specific to google doc ex. https://docs.google.com/forms/d/{1BsoJkyMFtIa2g25i8Z3BvaiplHDhPJpfTKGcC6pkI3Y}/edit
var GString = "1Z5M35BIvksfh3CrfrCtvhez5OUvYaZJHelxHaWBF114";

//Site Header ex. HPD Anonymous Tip Tool
var siteHeader = "Test Version 0.11";

// TODO: add RAPTOR variables

/*----------------------------------------------------------*/
/*submitted.html variables*/

//Police Department Name ex. Hollis Police Department
var pdName = "R & D";

//Police Department Phone Number
var pdPhone = "603-465-7637";

//Link to Police Department Website URL
var pdLink = "http://www.hollisnh.org/police/";

//Link to Police Department Image
var pdImage = "https://s3.amazonaws.com/media.jetstrap.com/ichmArxSSw0LB0lcV6oP_Hollis police badge.tan background.jpg";

//School's abbreviation ex. HBHS
var schoolAbrv = "NEU";

//SRO's Name
var sroName = "Jonathan Northcott";

//Main chunk of SRO Email ex. juanathan39@gmail.com
var sroEmail = "northcott.j@chisigma.co";

//SRO Twitter Handle ex. @SROHBHS
var twitterHandle = "@SRO_HBHS";

//SRO Twitter Link to Website
var twitterLink = "https://twitter.com/sro_hbhs";

//SRO Facebook Page Link
var facebook = "https://www.facebook.com/srohbhs";

//Region
/*----------------------------------------------------------*/
/*Constant variables- use above and don't change*/

//One Way Tip Meta
var onewayMeta = String(siteTitle);

//Inserts content title into <meta>
var metaTitle = String(siteTitle);

//Next two define links to embed into <title>
var docHrefLink = "https://docs.google.com/forms/d/" + String(GString) + "/oembed?";
var docUrlLink = "https://docs.google.com/forms/d/" + String(GString) + "/viewform&amp;format=xml";

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

//Complete Hidden Link Need to revert back to normal later on
var hiddenlinkHTML = "http://srotips.org/chat/lhc_web/index.php/site_admin/";

//endregion

/*------------------------------------------------------------------*/
//main function for index.html
function varsIndex() {
    "use strict";
    document.getElementById("siteTitle").innerHTML = siteTitle;
    document.getElementById("LinkString").setAttribute("href", docHrefLink);
    document.getElementById("LinkString").setAttribute("url", docUrlLink);
    document.getElementById("metaTitle").setAttribute("content", metaTitle);
    document.getElementById("metaDoc").setAttribute("content", metaDoc);
    document.getElementById("favicon").setAttribute("href", favicon);
    document.getElementById("siteHeader").innerHTML = siteHeader;
    document.getElementById("onewayMeta").setAttribute("content", onewayMeta);
    document.getElementById("onewayViewForm").setAttribute("content", onewayViewForm);
    document.getElementById("onewayEmbed").setAttribute("content", onewayEmbed);
    document.getElementById("ss-form").setAttribute("action", formUrl);
    document.getElementById("hiddenlink").setAttribute("href", hiddenlinkHTML);

}

//Main function for submitted.html
function varsSubmitted() {
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
