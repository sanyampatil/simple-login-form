

let nameInput = document.querySelector('#name')
let PassWORD = document.querySelector('#password')
let errorName = document.querySelector('.error-name')
let errorpass = document.querySelector('.error-password')


// code for name input 

nameInput.addEventListener("input", function () {
    var myvalue = nameInput.value
    console.log(myvalue)
    const uppercasePattern = /^[A-Z]+$/;
    if (!myvalue.match(uppercasePattern)) {

        var OneError = "*plz... enter the uppercase word*"
        errorName.innerHTML = OneError
        errorName.style.color = 'red'

    }
    else if (myvalue.match(uppercasePattern)) {
        var OneError = "yessss.. VALID "
        errorName.innerHTML = OneError;
        errorName.style.color = 'green'
        errorName.style.fontWeight = "700"
    }
    else {
        var OneError = ""
        errorName.innerHTML = OneError
    }
})


// code for password input

PassWORD.addEventListener("click", function () {

    let oneerror = "Enter only 6 digit password "
    errorpass.style.color = 'red'

    errorpass.innerHTML = oneerror;
    PassWORD.addEventListener("input", function () {
        var regex = /[a-zA-Z]/;
        mypass = PassWORD.value
        if (regex.test(mypass)) {
            let Twoerror = " *alhabetical charactor not allowed* "
            errorpass.innerHTML = Twoerror;
            errorpass.style.color = 'red'

        }
        else {

            let Twoerror = " *yess....* "
            errorpass.innerHTML = Twoerror;
            errorpass.style.color = 'green'
            errorpass.style.fontWeight = "700"
        }
    });

});




