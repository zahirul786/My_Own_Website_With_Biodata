//------------============Time Animation==============------------------
let hours;
let meridian;
let minutes;
let seconds
let a;
let times;
let mydate;
const option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    hours = a.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (hours > 12) {
        hours = hours - 12;
        if (hours < 10) {
            hours = "0" + hours;
        }
        meridian = "PM";
    }
    else {
        meridian = "AM";
    }
    minutes = a.getMinutes()
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    seconds = a.getSeconds()
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    mydate = a.toLocaleDateString(undefined, option);
    times = hours + ":" + minutes + ":" + seconds + " " + meridian
    document.getElementById('time').innerHTML = times + "<br>" + mydate
}, 1000);


/* --------------=========typing animation=======----------------*/
var typed = new Typed(".typing", {
    strings: ["Attentive ", "Tenacious ", " a Software Engineer", "a Code Warrior", "a Web Designer", "Skilled ", "Meticulous"],
    typeSpeed: 100,
    BackSpeed: 50,
    loop: true
})
var typed = new Typed(".container-start-animate", {
    strings: ["ELCOME  TO  MY WORLD"],
    typeSpeed: 100,
    BackSpeed: 50,
    loop: TransformStream
})

//----------=====================sending email=================------------ 

function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var body = 'Name :' + name + '<br/> Email :' + email + '<br> subject :' + subject + '<br/> message' + message;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "zahircampus98@gmail.com",
        Password: "***************",
        To: 'zahircampus98@gmail.com',
        From: email,
        Subject: subject,
        Body: body
    }).then(
        message => alert(message)
    );

}
