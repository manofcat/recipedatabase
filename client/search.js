
recipes = [
    {"name" : "Spaghetti", "image": "https://www.modernhoney.com/wp-content/uploads/2023/02/TikTok-Million-Dollar-Baked-Spaghetti-1-crop-scaled.jpg", "rating" : 7, "difficulty" : 7, "time_taken" : 90, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"name" : "Chop Suey", "image": "https://www.howtocook.recipes/wp-content/uploads/2021/07/Chop-suey-recipe.jpg", "rating" : 8, "difficulty" : 6, "time_taken" : 70, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"name" : "Spanish Paella", "image": "https://www.thespruceeats.com/thmb/KxYWdZxebvX4TQityaeYmsu1k4Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/paella-fuse-5741e40c5f9b58723db9a309.jpg", "rating" : 9, "difficulty" : 5, "time_taken" : 50, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"name" : "Chicken Korma", "image": "https://food-images.files.bbci.co.uk/food/recipes/chicken_korma_09900_16x9.jpg", "rating" : 8, "difficulty" : 5, "time_taken" : 60, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"name" : "Chicken Jalfrezi", "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/11/chicken-jalfrezi-recipe.jpg", "rating" : 7, "difficulty" : 5, "time_taken" : 60, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"name" : "Tinola", "image": "https://www.allrecipes.com/thmb/NPMLHgCJyqDzVSu9uJ9PxY8_wPg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/212929-chicken-tinola-ddmfs-beauty-3x4-c57e44790b5a45229744f8f8746e0ce4.jpg", "rating" : 8, "difficulty" : 7, "time_taken" : 80, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"name" : "Stir Fry vegetable", "image": "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg", "rating" : 7, "difficulty" : 6, "time_taken" : 70, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
]
//for loop recipe in recipes
//recipe = dictionary

for (let i = 0; i < recipes.length; i += 1) {
    card = '<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">\n'
    card += '\t<div class="card mb-auto">\n'
    card += '\t\t<img src="' + recipes[i].image + '" class="img-size" alt="">\n'
    card += '\t\t<div class="card-body">\n'
    card += '\t\t\t<h5 class="card-title">' + recipes[i].name + '</h5>\n'
    card += '\t\t\t<p class="card-text">' + recipes[i].description + '</p>\n'
    card += '\t\t\t<a href="#" class = "btn btn-primary">Read More</a>\n'
    card += '\t\t</div>\n'
    card += '\t</div>\n'
    card += '</div>\n'
    document.getElementById("card-container").innerHTML += card
}

{/* <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div> */}




// for (let i = 0; i<recipes.length; i += 1) {
//     console.log(recipes[i])
// }

