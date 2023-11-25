// java script functions

const form = document.getElementById("form");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password1 = document.getElementById("password1");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInput();
})


function checkInput(){
    const userNamevalue = userName.value.trim();  
    const emailvalue = email.value.trim(); 
    const passwordvalue = password.value.trim(); 
    const password1value = password1.value.trim(); 

    if (userNamevalue === ''){
        checkValue (userName, "UserName cannot be empty")
    }
    else if (userNamevalue.length <7){
        checkValue(userName, "user name must be 7 characters long")
    }
    else{
        checkSuccess(userName)
    }
    // condition for password

    if (passwordvalue === ''){
        checkValue (password, "Enter a password")
    }
    else if (passwordvalue.length < 8){
        checkValue(password, "password must be at least 8 character long")
    }
    else{
        checkSuccess(password)
    }

    ///for confirm password

  
    if (password1value === ''){
        checkValue(password1, "This field can not be blank")

    }
    else   if (passwordvalue === password1value){
        checkSuccess(password1)
    }
    else {
        checkValue(password1, "Enter the correct password")
    }

     if (emailvalue === ''){
        checkValue (email, "Enter your email address")
    }
    else{
        checkSuccess(email)
    }

}

// //for the confirm password field
// function checkP1success(input){
//     const formcontent = input.parentElement;


//     formcontent.className = "formcontent success" ;
// }
// function checkP1value(input, message){
//      const formcontent = input.parentElement;
//     const small = formcontent.querySelector("small");

//     small.innerText = message;

//     formcontent.className = "formcontent error" ;

// }
// //for the pass word field

// function checkPvalue (input, message){
//     const formcontent = input.parentElement;
//     const small = formcontent.querySelector("small");

//     small.innerText = message;

//     formcontent.className = "formcontent error" ;
// }

// function checkPsuccess(input){
//     const formcontent = input.parentElement;


//     formcontent.className = "formcontent success" ;

// }


//for the user name field

function checkValue (input, message){
    const formcontent = input.parentElement;
    const small = formcontent.querySelector("small");

    small.innerText = message;

    formcontent.className = "formcontent error" ;
}


function checkSuccess(input){
    const formcontent = input.parentElement;


    formcontent.className = "formcontent success" ;
}



