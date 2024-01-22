
recipes = [
    {"created_by" : "Alex",
    "name" : "Spaghetti",
     "image": "https://www.modernhoney.com/wp-content/uploads/2023/02/TikTok-Million-Dollar-Baked-Spaghetti-1-crop-scaled.jpg",
      "rating" : 7, "difficulty" : 7,
       "time_taken" : 90,
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut? "},
    {"created_by" : "Me",
    "name" : "Chop Suey",
     "image": "https://www.howtocook.recipes/wp-content/uploads/2021/07/Chop-suey-recipe.jpg",
       "rating" : 8, "difficulty" : 6,
        "time_taken" : 70,
         "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"created_by" : "Lisa",
    "name" : "Spanish Paella",
     "image": "https://www.thespruceeats.com/thmb/KxYWdZxebvX4TQityaeYmsu1k4Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/paella-fuse-5741e40c5f9b58723db9a309.jpg",
      "rating" : 9,
       "difficulty" : 5,
        "time_taken" : 50,
         "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"created_by" : "Suzy",
    "name" : "Chicken Korma",
     "image": "https://food-images.files.bbci.co.uk/food/recipes/chicken_korma_09900_16x9.jpg",
      "rating" : 8,
       "difficulty" : 5,
        "time_taken" : 60,
         "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},

    {"created_by" : "Mary","name" : "Chicken Jalfrezi", "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/chicken-jalfrezi-recipe.jpg", "rating" : 7, "difficulty" : 5, "time_taken" : 60, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"created_by" : "Me","name" : "Tinola", "image": "https://www.allrecipes.com/thmb/NPMLHgCJyqDzVSu9uJ9PxY8_wPg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/212929-chicken-tinola-ddmfs-beauty-3x4-c57e44790b5a45229744f8f8746e0ce4.jpg", "rating" : 8, "difficulty" : 7, "time_taken" : 80, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"created_by" : "Me","name" : "Stir Fry vegetable", "image": "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg", "rating" : 7, "difficulty" : 6, "time_taken" : 70, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
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

if (recipes.length > 0) {
    for (let i = 0; i < recipes.length; i += 1) {
        card = '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">\n'
        card += '\t<div class="card">\n'
        card += '\t\t<img src="' + recipes[i].image + '" class="card-img-resize" alt="' +recipes[i].name + '">\n'
        card += '\t\t<div class="card-body">\n'
        card += '\t\t\t<h5 class="card-title">' + recipes[i].name + '<h6>Created by: ' + recipes[i].created_by + '</h6>' + '</h5>\n'
        card += '\t\t\t<p class="card-text">' + recipes[i].description + '</p>\n'
        card += '\t\t\t<a href="#" class = "btn btn-primary">Read More</a>\n'
        card += '\t\t</div>\n'
        card += '\t</div>\n'
        card += '</div>\n'
        document.getElementById("card-container").innerHTML += card
    }
}
else {
    document.getElementById("card-container").innerHTML = '<h2 class="text-center">We are sorry, no recipes match your search.</h2>'
}