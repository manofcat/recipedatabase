

// window.addEventListener("load", async function(event) {
//     try {
//         let allRecipes = await fetch("http://127.0.0.1:8080/#")
//         for (let i = 0; i < allRecipes.length; i += 1) {
//             card =  '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">\n'
//             card += '   <div class="card" style="box-shadow: 1px 1px 3px 3px lightgrey;">\n'
//             card += '       <img src="' + allRecipes[i].image + '" class="card-img-resize img-format" alt="' +allRecipes[i].name + '">\n'
//             card += '       <div class="card-body">\n'
//             card += '           <h5 class="card-title font-style" style="font-size:1.45rem;">' + allRecipes[i].name + '<h6 class="font-style card-created-by" style="font-size:1rem;">Created by: ' + allRecipes[i].difficulty + '/10</h6>' + '</h5>\n'
//             card += '           <p class="card-text font-style" style=""font-size: 0.75rem;>' + allRecipes[i].description + '</p>\n'
//             card += '           <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mod' + i + '">Read More</button>\n'
//             card += '       </div>\n'
//             card += '   </div>\n'
//             card += '</div>\n'
//             document.getElementById("card-container").innerHTML += card
            
//             modal='        <div class="modal modal-md fade" id="mod' + i + '" tabindex="-1" aria-labelledby="modal-title" aria-hidden="true">\n'
//                         <div class="modal-dialog modal-dialog-centered">\n'
//                           <div class="modal-content">\n'
//                             <div class="modal-header" style="padding:0;">\n'
//                                 <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" style="position:absolute; top:15px; right:15px;opacity:1;"></button>\n'
//                                 <img src="' + allRecipes[i].image + '" alt="" class="card-img-resize img-format"style="width:100vw; object-fit:cover;">\n'
//                             </div>\n'
//                             <div class="modal-body">\n'
//                                 <div class="row">\n'
//                                     <div class="col text-center">\n'
//                                         <p style="font-size:1.75rem; margin-bottom:5px;">' + allRecipes[i].name + '</p>\n'
//                                     </div>\n'
//                                 </div>\n'
//                                 <div class="row">\n'
//                                     <div class="col text-center">Difficulty: ' + allRecipes[i].difficulty+ '/10</div>\n'
//                                 </div>\n'
//                                 <div class="row">\n'
//                                     <div class="col text-center">Rating: ' + allRecipes[i].rating + '/5</div>\n'
//                                 </div>\n'
//                                 <div class="row" style="margin-bottom:5px;">\n'
//                                     <div class="col text-center">Time Taken: ' + allRecipes[i].time_taken + ' minutes</div>\n'
//                                 </div>\n'
//                                 <div class="row">\n'
//                                     <div class="col-sm-3 col-4 h6">Description:</div>\n'
//                                     <div class="col-sm-9 col-8 modal-9-format">' + allRecipes[i].description + '</div>\n'
//                                 </div>\n'
//                                 <div class="row">\n'
//                                     <div class="col-sm-3 col-4 h6">Ingredients:</div>\n'
//                                     <div class="col-sm-9 col-8 modal-9-format list-format">\n'
//                                         <ul>\n'
//             for (const key in allRecipes[i].ingredients) {
//                 modal += '                                <li>' + allRecipes[i].ingredients[key] + " " + key +  '</li>\n'
//             }
//                                         </ul>\n'
//                                     </div>\n'
//                                 </div>\n'
//                                 <div class="row">'
//                                     <div class="col-sm-3 col-4 h6">Instructions:</div>'
//                                     <div class="col-sm-9 col-8 modal-9-format list-format">'
//                                         <ol>'
//             for (let j = 0; j<allRecipes[i].instructions.length; j += 1) {
//                 modal += '                                <li>' + allRecipes[i].instructions[j] + '</li>\n'
//             }
//                                         </ol>'
//                                     </div>'
//                                 </div>\n'
//                             </div>\n'
//                             <div class="modal-footer">\n'
//                               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n'
//                             </div>\n'
//                             </div>\n'
//                         </div>\n'
//                     </div>\n'
    
//             document.getElementById("modal-container").innerHTML += modal
//         }
//     } catch(e) {
//         alert(e)
//     }
// });

//Create a get method with the attribute selected
//Get all possible values of attribute selected e.g. names or ingredient
//

// resultcontainer = document.getElementById("result-container")
// inputbox = document.getElementById("input-box")

// input.onkeyup = function () {
//     let result = [];
//     let input = inputbox.value;
//     if (input.length) {
//         result = keywords.filter((keyword)=> {
//             return keyword.toLowerCase().includes(input.toLowerCase());
//         });
//     }
//     display(result)
// }

// function display(result) {
//     const content = result.map((list)=> {
//         return "<li onclick=selectInput(this)>" + list + "</li>"
//     });
//     resultcontainer.innerHTML = "<ul>" + content.join("") + "</ul>"
// }

// function selectInput(list) {
//     inputbox.value = list.innerHTML
//     resultscontainer.innerHTML = "";
// }

// [ "recipe0" : {...} ]
displayed_recipes = []

asb = document.getElementById("allSearchBoxes");

asb.addEventListener("submit", async function(event) {
    event.preventDefault();
    document.getElementById("card-container").innerHTML = "";
    document.getElementById("modal-container").innerHTML = "";
    try {
        let attr = document.getElementById("attr").value;
        let range = document.getElementById("mmrange").value;
        let val = null

        if (attr == "name" || attr == "ingredient") {
            if (attr.includes(" ")) {
                attr = attr.replace(/\s/g,"+");
            }
            val = document.getElementById("searchVal").value;
        }
        else if (attr == "time_taken") {
            val = document.getElementById("timeVal").value;
        }
        else if (attr == "difficulty") {
            val = document.getElementById("difficultyVal").value;
        }
        else {
            val = document.getElementById("ratingVal").value;
        }

        let response = await fetch("http://127.0.0.1:8080/recipe/search?" + "attr=" + attr + "&val=" + val + "&range=" + range)
        let selectedRecipes = await response.json();
        for (let z = 0; z < selectedRecipes.length; i += 1) {
            recipe_number = "recipe" + z
            displayed_recipes.push({ recipe_number : selectedRecipes[z]})
        };
        
        if (selectedRecipes.length > 0) {
            for (let i = 0; i < selectedRecipes.length; i += 1) {
                card =  '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">\n'
                card += '   <div id="recipe' + i + '" class="card h-100" style="box-shadow: 1px 1px 3px 3px lightgrey;">\n'
                card += '       <img src="' + selectedRecipes[i].image + '" class="card-img-resize img-format" alt="' +selectedRecipes[i].name + '">\n'
                card += '       <div class="card-body">\n'
                card += '           <h5 class="card-title font-style" style="font-size:1.45rem;">' + selectedRecipes[i].name + '<h6 class="font-style card-created-by" style="font-size:1rem;">Created by: ' + selectedRecipes[i].created_by + '</h6>' + '</h5>\n'
                card += '           <p class="card-text font-style" style="font-size: 0.925rem;height:44.4px;">' + selectedRecipes[i].description + '</p>\n'
                card += '           <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mod' + i + '">Read More</button>\n'
                card += '       </div>\n'
                card += '   </div>\n'
                card += '</div>\n'
                document.getElementById("card-container").innerHTML += card
                
                modal='<div class="modal modal-md fade" id="mod' + i + '" tabindex="-1" aria-labelledby="modal-title" aria-hidden="true">\n'
                modal+='    <div class="modal-dialog modal-dialog-centered">\n'
                modal+='        <div class="modal-content">\n'
                modal+='        <div class="modal-header" style="padding:0;">\n'
                modal+='            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" style="position:absolute; top:15px; right:15px;opacity:1;"></button>\n'
                modal+='            <img src="' + selectedRecipes[i].image + '" alt="" class="card-img-resize img-format"style="width:100vw; object-fit:cover;">\n'
                modal+='        </div>\n'
                modal+='        <div class="modal-body">\n'
                modal+='            <div class="row">\n'
                modal+='                <div class="col text-center">\n'
                modal+='                    <p style="font-size:1.75rem; margin-bottom:5px;">' + selectedRecipes[i].name + '</p>\n'
                modal+='                </div>\n'
                modal+='            </div>\n'
                modal+='            <div class="row">\n'
                modal+='                <div class="col text-center">Difficulty: ' + selectedRecipes[i].difficulty+ '/10</div>\n'
                modal+='            </div>\n'
                modal+='            <div class="row">\n'
                modal+='                <div class="col text-center">Rating: ' + selectedRecipes[i].rating + '/5</div>\n'
                modal+='            </div>\n'
                modal+='            <div class="row" style="margin-bottom:5px;">\n'
                modal+='                <div class="col text-center">Time Taken: ' + selectedRecipes[i].time_taken + ' minutes</div>\n'
                modal+='            </div>\n'
                modal+='            <div class="row">\n'
                modal+='                <div class="col-sm-3 col-4 h6">Description:</div>\n'
                modal+='                <div class="col-sm-9 col-8 modal-9-format">' + selectedRecipes[i].description + '</div>\n'
                modal+='            </div>\n'
                modal+='            <div class="row">\n'
                modal+='                <div class="col-sm-3 col-4 h6">Ingredients:</div>\n'
                modal+='                <div class="col-sm-9 col-8 modal-9-format list-format">\n'
                modal+='                    <ul>\n'
                for (const key in selectedRecipes[i].ingredients) {
                modal+='                        <li>' + selectedRecipes[i].ingredients[key] + " " + key +  '</li>\n'
                }
                modal+='                    </ul>\n'
                modal+='                </div>\n'
                modal+='            </div>\n'
                modal+='            <div class="row">\n'
                modal+='                <div class="col-sm-3 col-4 h6">Instructions:</div>\n'
                modal+='                <div class="col-sm-9 col-8 modal-9-format list-format">\n'
                modal+='                    <ol>\n'
                for (let j = 0; j<selectedRecipes[i].instructions.length; j += 1) {
                modal += '                      <li>' + selectedRecipes[i].instructions[j] + '</li>\n'
                }
                modal+='                    </ol>\n'
                modal+='                </div>'
                modal+='            </div>\n'
                modal+='       </div>\n'
                modal+='        <div class="modal-footer">\n'
                modal+='            <button id="ratingbutton' + i + '"type="button" class="btn btn-secondary">Close</button>\n'
                modal+='            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n'
                modal+='        </div>\n'
                modal+='        </div>\n'
                modal+='    </div>\n'
                modal+='</div>\n'

                document.getElementById("modal-container").innerHTML += modal
            }
        }
        else {
            document.getElementById("card-container").innerHTML = '<h2 class="text-center">We are sorry, no recipes match your search.</h2>'
        }

    } catch(e) {
        alert(e);
    }
});


ingredients = document.getElementById("numIngredients");

ingredients.addEventListener("input", async function(event) {
    event.preventDefault();
    document.getElementById("ingredients-container").innerHTML = "";   
    try {
        for (let i = 0; i<event.target.value; i += 1) {
            ingredient='<div class="row mb-3" style="background-color:lightgrey;border-radius:5px;">\n'
            ingredient+='    <div class="col mt-2 mb-3">\n'
            ingredient+='        <label class="form-label">Ingredient ' + (i+1) + ':</label>\n'
            ingredient+='        <input type="text" class="form-control" id="ingredient' + (i+1) + 'name" placeholder="e.g. Chicken">\n'
            ingredient+='    </div>\n'
            ingredient+='    <div class="row">\n'
            ingredient+='        <div class="col mb-3">\n'
            ingredient+='            <label class="form-label">Quantity</label>\n'
            ingredient+='            <input type="number" class="form-control" id="ingredient' + (i+1) + 'quantity" placeholder="e.g. 0.5 or 100" min="0.1" step="any">\n'
            ingredient+='        </div>\n'
            ingredient+='        <div class="col mb-3">\n'
            ingredient+='            <label class="form-label">Unit</label>\n'
            ingredient+='            <select id="ingredient' + (i+1) + 'unit" class="form-select">\n'
            ingredient+='                <option value="no-unit">no unit</option>\n'
            ingredient+='                <option value="L">L</option>\n'
            ingredient+='                <option value="ml">ml</option>\n'
            ingredient+='                <option value="tbsp">tbsp</option>\n'
            ingredient+='                <option value="tsp">tsp</option>\n'
            ingredient+='                <option value="cup">cup</option>\n'
            ingredient+='                <option value="g">g</option>\n'
            ingredient+='                <option value="kg">kg</option>\n'
            ingredient+='                <option value="oz">oz</option>\n'
            ingredient+='                <option value="lbs">lbs</option>\n'
            ingredient+='            </select>\n'
            ingredient+='        </div>\n'
            ingredient+='    </div>\n'
            ingredient+='</div>\n'
            document.getElementById("ingredients-container").innerHTML += ingredient;
        } 
    } catch (e) {
        alert(e)
    }
});

instructions = document.getElementById("numInstructions");

instructions.addEventListener("input", async function(event) {
    event.preventDefault();
    document.getElementById("instructions-container").innerHTML = "";
    try {
        for (let i = 0; i<event.target.value; i += 1) {
            instruction='<div class="row mb-3" style="background-color:lightgrey;border-radius:5px;">\n'
            instruction+='    <div class="col mt-2 mb-3">\n'
            instruction+='        <label class="form-label">Instruction ' + (i+1) + '</label>\n'
            instruction+='        <input type="text" class="form-control" id="instruction' + (i+1) +'" placeholder="e.g. Dice the onion">\n'
            instruction+='    </div>\n'
            instruction+='</div>\n'
            document.getElementById("instructions-container").innerHTML += instruction;
        }
    } catch(e) {
        alert(e)
    }
})

rcf = document.getElementById("recipeCreatorForm");

rcf.addEventListener("submit", async function(event) {
    event.preventDefault();
    try {
        newRecipe = {
            created_by: document.getElementById("SIusername").value,
            name : document.getElementById("newRecipeName").value,
            image : document.getElementById("newRecipeImage").value,
            ingredients : "",
            instructions : "",
            rating : 5,
            difficulty : document.getElementById("newRecipeDifficulty").value,
            time_taken : document.getElementById("newRecipeTime").value,
            description : document.getElementById("newRecipeDescription").value
        }
        numIngredients = document.getElementById("numIngredients").value;
        ingredientObject = {}
        for (let i = 0; i < numIngredients; i +=1 ) {
            // ingredientList[name] = [quantity,unit]
            if (document.getElementById("ingredient" + (i+1) + "unit").value != "no-unit") {
                ingredientObject[document.getElementById("ingredient" + (i+1) + "name").value.toLowerCase()] = "" + document.getElementById("ingredient" + (i+1) + "quantity").value + " " + document.getElementById("ingredient" + (i+1) + "unit").value
            } else {
                ingredientObject[document.getElementById("ingredient" + (i+1) + "name").value.toLowerCase()] = "" + document.getElementById("ingredient" + (i+1) + "quantity").value
            }
        }
        newRecipe.ingredients = ingredientObject;

        numInstructions = document.getElementById("numInstructions").value;
        instructionList = []
        for (let j = 0; j < numInstructions; j += 1) {
            instructionList.push(document.getElementById("instruction" + (j+1)).value) 
        }
        newRecipe.instructions = instructionList;
        let response = await fetch('http://127.0.0.1:8080/recipe/new', {
                method: "POST",
                headers: {
                    // 'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newRecipe),
            });
            let jsonContent = await response.json();
    } catch(e) {
        alert(e)}
});

