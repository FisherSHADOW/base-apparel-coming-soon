const submit = document.getElementById('submitBtn');
const errorTxt = document.getElementById('errorTxt');
const errorIcon = document.getElementById('errorIcon');
const input = document.getElementById('emailInput');
const form = document.getElementById('form');
const inputValue = input.value;
let e= null

form.addEventListener('submit',)


function validation() {
    // input.preventDefault()
    if (!input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || input.value==='') {
        errorIcon.style.display='block'
        errorTxt.style.display='block'
        input.style.borderColor='#f96262'
        e=true
    } else{errorIcon.style.display='none'
            errorTxt.style.display='none'
             input.style.borderColor='black'
             e=false    
}
if (e==false) {
    input.style.borderColor='green'
    
}
};







