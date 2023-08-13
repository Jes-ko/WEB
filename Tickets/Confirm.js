
const storedName = localStorage.getItem("Name-Sum");
const storedNum = localStorage.getItem("Num-Sum");
const storedEmail = localStorage.getItem("Email-Sum");
const storedGender = localStorage.getItem("Gender-Sum");


const storedDate = localStorage.getItem("Date-Sum");
const storedTime = localStorage.getItem("Time-Sum");
const storedDuration = localStorage.getItem("Duration-Sum");
const storedSLA = localStorage.getItem("SLA");
const storedSLAP = localStorage.getItem("SLA-P");
const storedSLC = localStorage.getItem("SLC");
const storedSLCP = localStorage.getItem("SLC-P");
const storedFA = localStorage.getItem("FA");
const storedFAP = localStorage.getItem("FA-P");
const storedFC = localStorage.getItem("FC");
const storedFCP = localStorage.getItem("FC-P");
const storedI = localStorage.getItem("I");
const storedIP = localStorage.getItem("I-P");
const storedTotal = localStorage.getItem("Total-Sum");

if (storedDate && storedTime && storedDuration && storedSLA && storedSLAP && storedSLC && storedSLCP && storedFA && storedFAP && storedFC && storedFCP && storedI && storedIP && storedTotal && storedName && storedNum && storedEmail && storedGender) {
    document.getElementById("Name-Sum").textContent = storedName;
    document.getElementById("Num-Sum").textContent = storedNum;
    document.getElementById("Email-Sum").textContent = storedEmail;
    document.getElementById("Gender-Sum").textContent = storedGender;
    document.getElementById("Date-Sum").textContent = storedDate;
    document.getElementById("Time-Sum").textContent = storedTime;
    document.getElementById("Duration-Sum").textContent = storedDuration;
    document.getElementById("SLA").innerHTML = storedSLA; 
    document.getElementById("SLA-P").innerHTML = storedSLAP; 
    document.getElementById("SLC").innerHTML = storedSLC; 
    document.getElementById("SLC-P").innerHTML =  storedSLCP; 
    document.getElementById("FA").innerHTML = storedFA; 
    document.getElementById("FA-P").innerHTML = storedFAP; 
    document.getElementById("FC").innerHTML = storedFC; 
    document.getElementById("FC-P").innerHTML = storedFCP; 
    document.getElementById("I").innerHTML = storedI; 
    document.getElementById("I-P").innerHTML = storedIP; 
    document.getElementById("Total-Sum").textContent = storedTotal;
}