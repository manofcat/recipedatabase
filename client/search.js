
recipes = [
    {"created_by" : "Alex",
    "name" : "Spaghetti",
     "image": "https://www.modernhoney.com/wp-content/uploads/2023/02/TikTok-Million-Dollar-Baked-Spaghetti-1-crop-scaled.jpg",
     "ingredients" : ["chicken","hotdog","onion","garlic","meatballs in tomato sauce","soft cheese","bolognaise sauce"],
      "rating" : 7, "difficulty" : 7,
       "time_taken" : 90,
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut? "},
    {"created_by" : "Me",
    "name" : "Chop Suey",
     "image": "https://www.howtocook.recipes/wp-content/uploads/2021/07/Chop-suey-recipe.jpg",
     "ingredients" : ["chicken","hotdog","onion","garlic","meatballs in tomato sauce","soft cheese","bolognaise sauce"],
       "rating" : 8, "difficulty" : 6,
        "time_taken" : 70,
         "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"created_by" : "Lisa",
    "name" : "Spanish Paella",
     "image": "https://www.thespruceeats.com/thmb/KxYWdZxebvX4TQityaeYmsu1k4Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/paella-fuse-5741e40c5f9b58723db9a309.jpg",
     "ingredients" : ["chicken","hotdog","onion","garlic","meatballs in tomato sauce","soft cheese","bolognaise sauce"],
     "rating" : 9,
       "difficulty" : 5,
        "time_taken" : 50,
         "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"created_by" : "Suzy",
    "name" : "Chicken Korma",
     "image": "https://food-images.files.bbci.co.uk/food/recipes/chicken_korma_09900_16x9.jpg",
     "ingredients" : ["chicken","hotdog","onion","garlic","meatballs in tomato sauce","soft cheese","bolognaise sauce"],
      "rating" : 8,
       "difficulty" : 5,
        "time_taken" : 60,
         "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},

    {"created_by" : "Mary","name" : "Chicken Jalfrezi", "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/chicken-jalfrezi-recipe.jpg","ingredients" : ["chicken","hotdog","onion","garlic","meatballs in tomato sauce","soft cheese","bolognaise sauce"], "rating" : 7, "difficulty" : 5, "time_taken" : 60, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"created_by" : "Me","name" : "Tinola", "image": "https://www.allrecipes.com/thmb/NPMLHgCJyqDzVSu9uJ9PxY8_wPg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/212929-chicken-tinola-ddmfs-beauty-3x4-c57e44790b5a45229744f8f8746e0ce4.jpg","ingredients" : ["chicken","hotdog","onion","garlic","meatballs in tomato sauce","soft cheese","bolognaise sauce"], "rating" : 8, "difficulty" : 7, "time_taken" : 80, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"created_by" : "Me","name" : "Stir Fry vegetable", "image": "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg","ingredients" : ["chicken","hotdog","onion","garlic","meatballs in tomato sauce","soft cheese","bolognaise sauce"], "rating" : 7, "difficulty" : 6, "time_taken" : 70, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
]

//rework this as a function
//for loop recipe in recipes
//recipe = dictionary

intattributes = {
"time" : "timeselect",
"rating" : "ratingselect",
"difficulty" :"difficultyselect"
}

function enableSelector(input) {
    lst = Object.entries(intattributes)
    if (input.value in intattributes) {
        document.getElementById("mmselect").classList.remove("d-none");
        document.getElementById("search").classList.add("d-none");
        for (i = 0; i < lst.length; i+= 1 ) {
            if (input.value == lst[i][0]) {
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
}
function updateslider(input) {
    slideroutput = document.getElementById("slideroutput");
    slideroutput.innerHTML = input + " minutes";
}

//change to selectedrecipes in future
if (recipes.length > 0) {
    for (let i = 0; i < recipes.length; i += 1) {
        card =  '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">\n'
        card += '   <div class="card">\n'
        card += '       <img src="' + recipes[i].image + '" class="card-img-resize img-format" alt="' +recipes[i].name + '">\n'
        card += '       <div class="card-body">\n'
        card += '           <h5 class="card-title font-style" style="font-size:1.6rem;">' + recipes[i].name + '<h6 class="font-style" style="font-size:1rem;    ">Created by: ' + recipes[i].created_by + '</h6>' + '</h5>\n'
        card += '           <p class="card-text font-style" style=""font-size:.75rem;>' + recipes[i].description + '</p>\n'
        card += '           <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mod' + i + '">Read More</button>\n'
        card += '       </div>\n'
        card += '   </div>\n'
        card += '</div>\n'
        document.getElementById("card-container").innerHTML += card
        
        modal='        <div class="modal modal-md fade" id="mod' + i + '" tabindex="-1" aria-labelledby="modal-title" aria-hidden="true">\n'
        modal +='            <div class="modal-dialog modal-dialog-centered">\n'
        modal +='              <div class="modal-content">\n'
        modal +='                <div class="modal-header" style="padding:0;">\n'
        modal +='                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" style="position:absolute; top:15px; right:15px;opacity:1;"></button>\n'
        modal +='                    <img src="' + recipes[i].image + '" alt="" class="card-img-resize img-format"style="width:100vw; object-fit:cover;">\n'
        modal +='                </div>\n'
        modal +='                <div class="modal-body">\n'
        modal +='                    <div class="row">\n'
        modal +='                        <div class="col text-center">\n'
        modal +='                            <p style="font-size:1.75rem; margin-bottom:5px;">' + recipes[i].name + '</p>\n'
        modal +='                        </div>\n'
        modal +='                    </div>\n'
        modal +='                    <div class="row">\n'
        modal +='                        <div class="col text-center">Difficulty: ' + recipes[i].difficulty+ '/10</div>\n'
        modal +='                    </div>\n'
        modal +='                    <div class="row">\n'
        modal +='                        <div class="col text-center">Rating: ' + recipes[i].rating + '/5</div>\n'
        modal +='                    </div>\n'
        modal +='                    <div class="row" style="margin-bottom:5px;">\n'
        modal +='                        <div class="col text-center">Time Taken: ' + recipes[i].time_taken + ' minutes</div>\n'
        modal +='                    </div>\n'
        modal +='                    <div class="row">\n'
        modal +='                        <div class="col-sm-3 col-4 h6">Description:</div>\n'
        modal +='                        <div class="col-sm-9 col-8 modal-9-format">' + recipes[i].description + '</div>\n'
        modal +='                    </div>\n'
        modal +='                    <div class="row">\n'
        modal +='                        <div class="col-sm-3 col-4 h6">Ingredients:</div>\n'
        modal +='                        <div class="col-sm-9 col-8 modal-9-format ingredients-format">\n'
        modal +='                            <ul>\n'
        for (let j = 0; j<recipes[i].ingredients.length; j += 1) {
            modal += '                                <li>' + recipes[i].ingredients[j] + '</li>\n'
        }
        modal +='                            </ul>\n'
        modal +='                        </div>\n'
        modal +='                    </div>\n'
        // modal +='                    <div class="row">'
        // modal +='                        <div class="col-sm-3 col-4 h6">Instructions:</div>'
        // modal +='                        <div class="col-sm-9 col-8">'
        // modal +='                            <ol>'


        // modal +='                            </ol>'
        // modal +='                        </div>'
        // modal +='                    </div>\n'
        modal +='                </div>\n'
        modal +='                <div class="modal-footer">\n'
        modal +='                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>\n'
        modal +='                </div>\n'
        modal +='                </div>\n'
        modal +='            </div>\n'
        modal +='        </div>\n'

        document.getElementById("modal-container").innerHTML += modal
    }
}
else {
    document.getElementById("card-container").innerHTML = '<h2 class="text-center">We are sorry, no recipes match your search.</h2>'
}