


SUF = document.getElementById("SignUpForm")

SUF.addEventListener("submit", async function(event) {
    event.preventDefault();
    try {
        result_container = document.getElementById("SUresults-container")
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
        if (response.ok) {
            let jsonContent = await response.json();
            result_container.innerHTML = '<p>Account Created!</p>'
            setTimeout(() => {
                result_container.innerHTML = '';
              }, 2000);
              
        } else {
            throw Error(response.statusText + "-" + response.url)
        }

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
        if (response.ok) {
            let result = await response.json();
            result_container.innerHTML = '<p>' + result[0] + '</p>'
            document.getElementById("SIFsubmit").disabled = true;
            setTimeout(() => {
                result_container.innerHTML = '';
              }, 2000);
            if (result[1] == true) {
                document.getElementById("newrecipebutton").classList.remove("d-none");
                document.getElementById("logoutbutton").classList.remove("d-none");
                document.getElementById("ownedrecipesbutton").classList.remove("d-none");
                document.getElementById("signinbutton").classList.add("d-none");
                document.getElementById("signupbutton").classList.add("d-none");
                // document.getElementById("SIFsubmit")
            } else {
                console.log("Incorrect credentials")
            }
        } else {
            throw Error(response.statusText + "-" + response.url)
        }

    } catch (e) {
        alert(e)
    }
});

logout = document.getElementById("LogOutForm");

logout.addEventListener("submit", async function(event) {
    event.preventDefault();
    try {
        document.getElementById("newrecipebutton").classList.add("d-none");
        document.getElementById("logoutbutton").classList.add("d-none");
        document.getElementById("ownedrecipesbutton").classList.add("d-none");
        document.getElementById("signinbutton").classList.remove("d-none");
        document.getElementById("signupbutton").classList.remove("d-none");
        document.getElementById("SIFsubmit").disabled = false;
        // document.getElementById("LogOutModal")
    } catch(e) {
        alert(e)
    }
})