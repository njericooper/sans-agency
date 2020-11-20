window.addEventListener('load', setDate, false);

function setDate() { 
    var date = new Date();
    var theYear = date.getFullYear();
    var theText = window.document.getElementById("footerText").innerHTML =  " &copy; " + " Source & Stardust Holdings LLC " + theYear;
    return theText;
}
