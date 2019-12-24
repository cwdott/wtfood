const Ingredient = require('../models/ingredient.model');

exports.ingredients_test = function (req, res) {
    res.send(req);
}

// CREATE a new Ingredient
exports.ingredient_create = function (req, res) {
    let ingredient = new Ingredient(
        {
            name: req.body.name,
            servingText: req.body.servingText,
            servingAmount: req.body.servingAmount,
            servingUnit: req.body.servingUnit,
            calories: req.body.calories,
            fat: req.body.fat,
            fatSaturated: req.body.fatSaturated,
            fatTrans: req.body.fatTrans,
            cholesterol: req.body.cholesterol,
            sodium: req.body.sodium,
            carbs: req.body.carbs,
            fiber: req.body.fiber,
            sugar: req.body.sugar,
            sugarIncluded: req.body.sugarIncluded,
            sugarAdded: req.body.sugarAdded,
            protein: req.body.protein
        }
    );

    ingredient.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Ingredient Created successfully')
    })
};

// RETURN all Ingredients
exports.ingredients_all = function (req, res) {
    Ingredient.find(function (err, ingredients) {
        if (err) return next(err);
        res.send(ingredients);
    })
};

// RETURN one Ingredient by ID
exports.ingredient_details = function (req, res) {
    Ingredient.findById(req.params.id, function (err, ingredient) {
        if (err) return next(err);
        res.send(ingredient);
    })
};

// UPDATE one Ingredient by ID
exports.ingredient_update = function (req, res) {
    Ingredient.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Ingredient udpated.');
    });
};

// DELETE one Ingredient by ID
exports.ingredient_delete = function (req, res) {
    Ingredient.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};
