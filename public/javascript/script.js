
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// -------------------------------------side menu------------------------------------

var sidebar = document.getElementById("sidemenu");

function openmenu() {
    sidebar.style.right = "0";
}
function closemenu() {
    sidebar.style.right = "-200px";
}
// ----------------------------------------SS-------------------------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbyibGlPV-m6wvx1Ourlehmyok1ydLqtgnP5hwN_HOI4KjkevCFnF-Xo8HRoo1hXioCq9A/exec'
const form = document.forms['submit-to-google-sheet']
const hello=document.getElementById("hello");

 form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response =>{
    hello.innerHTML="Message Successfully Sent";
    setTimeout(function (){
        hello.innerHTML=""
    },1000)
    form.reset()
})
.catch(error => console.error('Error!', error.message))
})