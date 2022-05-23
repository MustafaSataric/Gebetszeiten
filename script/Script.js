
function initWork(){
    let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if(matched){
        changeMode();
    }
}

setInterval("myTime()", 1000)

        

const options = {
method: 'GET',
headers: {
'X-RapidAPI-Host': 'muslimsalat.p.rapidapi.com',
'X-RapidAPI-Key': '1eab2d90ebmshd1e4dfcbe15d06fp1f8465jsn47a0f24ae6aa'
}
};

function ZwölfZuVierundzwanzig(str)
{
console.log(str);
var suffix = str.substring(str.length - 2);

var segmente = str.split(":");
var stunde = segmente[0];
var minute = segmente[1].split(" ")[0];
if (suffix == "pm"){
stunde = parseInt(stunde) + 12;
}

if (stunde == 24)
stunde = 0;

return stunde + ":" + minute;
}

async function HoleZeit(){
const response = await fetch('https://muslimsalat.p.rapidapi.com/cologne.json', options)
const data = await response.json();
console.log(data);

const {fajr, shurooq, dhuhr, asr, maghrib, isha} = data.items[0];
document.getElementById("gebetszeit").textContent = ZwölfZuVierundzwanzig("0"+fajr);
document.getElementById("sonnenaufgang").textContent = ZwölfZuVierundzwanzig("0"+shurooq);
document.getElementById("gebetszeit0").textContent = ZwölfZuVierundzwanzig(dhuhr);
document.getElementById("gebetszeit1").textContent = ZwölfZuVierundzwanzig(asr);
document.getElementById("gebetszeit2").textContent = ZwölfZuVierundzwanzig(maghrib);
document.getElementById("gebetszeit3").textContent = ZwölfZuVierundzwanzig(isha);

}

HoleZeit();
var bool0 = true;
function changeMode(){

var obj = document.getElementsByClassName("color0");
if(bool0){      
    for (var i = 0; i < obj.length; i++) {
    obj[i].style.color = "white";
    }
    document.querySelector("body").style.background = "#4a4a4a";
    bool0 = false;
}
else{      
    for (var i = 0; i < obj.length; i++) {
    obj[i].style.color = "#4a4a4a";
    }
    document.querySelector("body").style.background = "white";
    bool0 = true;
}
}


function myTime(){
    a = new Date();
    b = a.getHours();
    c = a.getMinutes();
    d = a.getSeconds();
    e = a.getDay()+1;
    f = a.getMonth()+1;
    g = a.getFullYear () ;
    
    if(b<= 9){
        b = "0" + b;
    }
    if(e<= 9){
        e = "0" + e;
    }
    if(f<= 9){
        f = "0" + f;
    }
    if(c<= 9){
        c = "0" + c;
    }
    if(d<= 9){
        d = "0" + d;
    }

    var otherdate = HijriJS.today().toString();
    otherdate = otherdate.split("/").join(".");

    zeit = b+':'+c+':'+d ;
    document.getElementById("zeitpunkt").innerText = zeit+ "  " + e + "." + f + "." + g + " / " + otherdate;
    
    var fajr = (document.getElementById("gebetszeit").textContent).split(":");
    var dhuhr = (document.getElementById("gebetszeit0").textContent).split(":");
    var asr = (document.getElementById("gebetszeit1").textContent).split(":");
    var maghrib = (document.getElementById("gebetszeit2").textContent).split(":");
    var isha = (document.getElementById("gebetszeit3").textContent).split(":");
    fajr1 = parseInt(fajr[0]) * 60 + parseInt(fajr[1]);
    dhuhr1 = parseInt(dhuhr[0]) * 60 + parseInt(dhuhr[1]);
    asr1 = parseInt(asr[0]) * 60 + parseInt(asr[1]);
    maghrib1 = parseInt(maghrib[0]) * 60 + parseInt(maghrib[1]);
    isha1 = parseInt(isha[0]) * 60 + parseInt(isha[1]);
    time = parseInt(b) * 60 + parseInt(c);
    
    if(fajr1 <  time && dhuhr1 > time){
        document.getElementById("zeitbiszumnaechstengebet").innerText = MinutenUmwandeln(dhuhr1  - time);
        document.getElementById("gebetszeit0").style.color = "#a59573";
    }
    else if(dhuhr1 <  time && asr1 > time){
        document.getElementById("zeitbiszumnaechstengebet").innerText = MinutenUmwandeln(asr1 - time);
        document.getElementById("gebetszeit1").style.color = "#a59573";
    }
    else if(asr1 <   time && maghrib1 > time){
        document.getElementById("zeitbiszumnaechstengebet").innerText = MinutenUmwandeln(maghrib1 - time);
        document.getElementById("gebetszeit2").style.color = "#a59573";
    }
    else if(maghrib1 <   time && isha1 > time){
        document.getElementById("zeitbiszumnaechstengebet").innerText = MinutenUmwandeln(isha1 - time);
        document.getElementById("gebetszeit3").style.color = "#a59573";
    }
    else if(isha1 < time){
        document.getElementById("zeitbiszumnaechstengebet").innerText = MinutenUmwandeln((fajr1 + 24* 60) - time);
        document.getElementById("gebetszeit").style.color = "#a59573";
    }
}


    
function MinutenUmwandeln(str){
    var h = 0, m = 0, s = 60 - d;

    while(str>60){
        str = str -60;
        h = h+ 1;
    }
    if(h==0){
        h = "0";
    }
    if(s==0){
        s = "0";
    }
    m=str;
    if(h<= 9){
        h = "0" + h;
    }
    if(m<= 9){
        m = "0" + m;
    }
    if(s<= 9){
        s = "0" + s;
    }
    return h + ":" + m + ":" + s ;
}



    
function MinutenUmwandeln(str){
    var h = 0, m = 0, s = 60 - d;

    while(str>60){
        str = str -60;
        h = h+ 1;
    }
    if(h==0){
        h = "0";
    }
    if(s==0){
        s = "0";
    }
    m=str;
    if(h<= 9){
        h = "0" + h;
    }
    if(m<= 9){
        m = "0" + m;
    }
    if(s<= 9){
        s = "0" + s;
    }
    return h + ":" + m + ":" + s ;
}