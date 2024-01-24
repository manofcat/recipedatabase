input = document.getElementById("timeVal");
output = document.getElementById("slideroutput");
output.textContent = input.value + " minutes"

input.addEventListener("input", function (event) {
    event.preventDefault();
    output.textContent = event.target.value + " minutes";
})

intattributes = {
    "time_taken" : "timeselect",
    "rating" : "ratingselect",
    "difficulty" :"difficultyselect"
    }
    
    attributeSelector = document.getElementById("attr")
    
    attributeSelector.addEventListener("input", async function(event) {
        event.preventDefault(); 
        try {
            lst = Object.entries(intattributes)
        if (attributeSelector.value in intattributes) {
            document.getElementById("mmselect").classList.remove("d-none");
            document.getElementById("search").classList.add("d-none");
            for (i = 0; i < lst.length; i+= 1 ) {
                if (attributeSelector.value == lst[i][0]) {
                    document.getElementById(lst[i][1]).classList.remove("d-none");
                } else {
                    document.getElementById(lst[i][1]).classList.add("d-none");
                }
            }
        } else {
            document.getElementById("mmselect").classList.add("d-none");
            document.getElementById("search").classList.remove("d-none");
            for (i = 0; i < lst.length; i+= 1 ) {
                    document.getElementById(lst[i][1]).classList.add("d-none");
            }
        }
        } catch(e) {
            alert(e)
        }
    });


    document.getElementById("")