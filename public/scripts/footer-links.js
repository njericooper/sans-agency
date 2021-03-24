window.addEventListener('load', footerLinks, false);

function footerLinks() {
    var str = "Privacy Policy";
    var link = str.link("https://sourceandstardust.agency/privacy-policy");
    var words = window.document.getElementById("privacy").innerHTML = link;
    return words;
}