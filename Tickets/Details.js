const form = document.getElementById('form'),
Fullname = document.getElementById('Full-Name'),
Email = document.getElementById('Email'),
CEmail = document.getElementById('CEmail');

form.addEventListener('submit', e=> {
    e.preventDefault();

    validateInputs();
})

const setError = (element,message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = Email =>{
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(Email);
}

const validateInputs = () => {
    const full = Fullname.value.trim();
    const mail = Email.value.trim();
    const Cmail = CEmail.value.trim();

    if(full === ''){
        setError(Fullname, 'Please add the full name')
    }
    else{
        setSuccess(Fullname);
    }

    if(mail === ''){
        setError(Email, 'Email is required');
    }
    else if(!isValidEmail(mail)){
        setError(Email, 'Provide a valid email address');
    }else{
        setSuccess(Email);
    }

    if(Cmail === ''){
        setError(CEmail, 'Email is required');
    }else if (Cmail !== mail){
        setError(CEmail, 'Email doesnt match');
    }else{
        setSuccess(Cmail);     
    }
}

function update(){
    const Name = document.getElementById("Full-Name").value;
    const Mobile = document.getElementById("Phone-number").value;
    const Email = document.getElementById("Email").value;
    const Gender = document.getElementById("Gender").value;

    const nameCell = document.getElementById("Name-Sum");
    const moblieCell = document.getElementById("Num-Sum");
    const emailCell = document.getElementById("Email-Sum");
    const genderCell = document.getElementById("Gender-Sum");

    nameCell.textContent = Name;
    moblieCell.textContent = Mobile;
    emailCell.textContent = Email;
    genderCell.textContent = Gender;

    localStorage.setItem("Name-Sum",Name);
    localStorage.setItem("Num-Sum",Mobile);
    localStorage.setItem("Email-Sum",Email);
    localStorage.setItem("Gender-Sum",Gender);
}


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

document.getElementById("Full-Name").addEventListener("input", update);
document.getElementById("Phone-number").addEventListener("input", update);
document.getElementById("Email").addEventListener("input", update);
document.getElementById("Gender").addEventListener("change", update);