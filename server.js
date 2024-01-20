const express = require("express");
const app = express();
app.use(express.static("client"));

//Things to add to recipes:
//Description:
//Ingredients required
//

recipes = [
    {"name" : "Spaghetti", "rating" : 7, "difficulty" : 7, "time_taken" : 90, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"name" : "Chop Suey", "rating" : 8, "difficulty" : 6, "time_taken" : 70, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"name" : "Spanish Paella", "rating" : 9, "difficulty" : 5, "time_taken" : 50, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"name" : "Chicken Korma", "rating" : 8, "difficulty" : 5, "time_taken" : 60, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"name" : "Chicken Jalfrezi", "rating" : 7, "difficulty" : 5, "time_taken" : 60, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"name" : "Tinola", "rating" : 8, "difficulty" : 7, "time_taken" : 80, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
    {"name" : "Stir Fry vegetable", "rating" : 7, "difficulty" : 6, "time_taken" : 70, "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, ut?"},
]

//Takes search attribute + value looking for

// This one is for string attrs
// app.get("/search", function(req,resp){
//     result = []
//     attr = req.query.attr
//     val = req.query.val
//     if (attr == "name") {
//         for (let i = 0; i < recipes.length; i += 1) {
//             if (recipes[i][attr].toLowerCase() == val.toLowerCase()) {
//                 result.push(recipes[i])
//             } else {
//                 continue
//             }
//         }
//     }
//     else if (attr == "ingredient") {
//         for (let i = 0; i < recipes.length; i += 1) {
//             if (val.toLowerCase() in recipes[i][attr]) {
//                 result.push(recipes[i])
//             } else {
//                 continue
//             }
//         }
//     }
//     resp.send(result)
// })


// Takes search attribute + value looking for + min/max
// if range = min => value is minimum and get bigger (>=)
// if range = max => value is maximum and get smaller (<=)
// This section is for integer attributes
// app.get("/search", function(req,resp){
//     result = []
//     attr = req.query.attr
//     val = parseInt(req.query.val)
//     range = req.query.range

//     if (range == "min") {
//         for (let i = 0; i < recipes.length; i += 1) {
//             if (recipes[i][attr] >= val) {
//                 result.push(recipes[i])
//             }
//         }
//     }
//     else {
//         for (let i = 0; i < recipes.length; i += 1) {
//             if (recipes[i][attr] <= val) {
//                 result.push(recipes[i])
//             }
//         }
//     }
//     resp.send(result)
// })


app.listen(8090);