
SUF = document.getElementById("SignUpForm")

SUF.addEventListener("submit", async function(event) {
    event.preventDefault();
    try {
        newUser = {
            username : document.getElementById("SUusername").value,
            password : document.getElementById("SUpassword").value,
            favourites : [],
            own_recipes : []
        }
        let response = await fetch('http://127.0.0.1:8080/users/new', {
                method: "POST",
                headers: {
                    // 'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser),
            });
            let jsonContent = await response.json();

    } catch(e) {
        alert(e)
    }
});


SIF = document.getElementById("SignInForm")

SIF.addEventListener("submit", async function(event) {
    event.preventDefault();
    try {
        result_container = document.getElementById("SIresults-container")
        potentialUsername = document.getElementById("SIusername").value
        potentialPassword = document.getElementById("SIpassword").value
        let response = await fetch('http://127.0.0.1:8080/users/check?username=' + potentialUsername + "&password=" + potentialPassword)
        result_container.innerHTML = response[0]
        if (response[1] == true) {
            document.getElementById("newrecipebutton").classList.remove("d-none");
            document.getElementById("logoutbutton").classList.remove("d-none");
            document.getElementById("signinbutton").classList.add("d-none");
            document.getElementById("signupbutton").classList.add("d-none");
        } else {
            
        }
    } catch (e) {
        alert(e)
    }
});

logout = document.getElementById("LogOutForm");

logout.addEventListener("submit", async function(event) {
    try {
        document.getElementById("newrecipebutton").classList.add("d-none");
        document.getElementById("logoutbutton").classList.add("d-none");
        document.getElementById("signinbutton").classList.remove("d-none");
        document.getElementById("signupbutton").classList.remove("d-none");
    } catch(e) {
        alert(e)
    }
})