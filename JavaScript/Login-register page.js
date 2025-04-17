//  CAPTURING ELEMENTS TO TURN LOGIN PAGE INTO REGISTER PAGE ˘˘˘˘˘˘˘˘

const loginAndRegisterForm = document.querySelector("#loginAndRegisterForm");

const loginLink = document.querySelector(".login");

const registerLink = document.querySelector(".register");


//  ADDING AND REMOVING "ACTIVE" CLASS ON LOGIN/REGISTER FORM WHEN EITHER "REGISTER" OR "LOGIN" IS BEING CLICKED ON ˘˘˘˘˘˘˘˘

registerLink.addEventListener("click", ()=> {
    loginAndRegisterForm.classList.add("active");
});

loginLink.addEventListener("click", ()=> {
    loginAndRegisterForm.classList.remove("active")
});