

/**making the the toggle key for the darkmode button */
const darkDisplay = document.querySelector('#darkmode');
const Toggle = () => {
    
    const back = document.querySelector('body');
    let currColor = window.getComputedStyle(back).backgroundColor;
    const text = document.querySelectorAll("h4, h4.tagline, h2, h3, p");

    // change bgcolor to white
    if (currColor === 'rgb(0, 0, 0)'){
        back.style.backgroundColor = 'whitesmoke';
        text.forEach(el => el.style.color = 'black');
    }
    // change bgcolor to black and text to white
    else{
        back.style.backgroundColor = 'black';
        text.forEach(el => el.style.color = 'white');
    }
}

darkDisplay.addEventListener('click', Toggle);



/**form validation  and submission popup class*/
const getForm = document.querySelector('#mailingList');
const modal =document.getElementById('Submitted')
const closeButton = document.getElementById('close')

const validateFormFunction = (form) => {
    const fname = form.elements['fname'].value.trim();
    const lname = form.elements['lname'].value.trim();

    if (!fname || !lname) {
        alert("Both first name and last name are required.");
        return;
    }

    return true;
}

getForm.addEventListener('submit', function(e){
    e.preventDefault();
    if(validateFormFunction(getForm)){
        modal.style.display = 'block';
        console.log("Form is valid, submitting ...");
    }
});

//close the popup
closeButton.addEventListener('click', function(){
    modal.style.display = 'none';
})
