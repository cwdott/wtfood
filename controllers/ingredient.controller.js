const Ingredient = require('../models/ingredient.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.ingredient_create = function (req, res) {
    console.log(req.body);
    let ingredient = new Ingredient(
        {
            name: req.body.name,
            calories: req.body.calories,
            fat: req.body.fat
        }
    );

    ingredient.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Ingredient Created successfully')
    })
};

exports.ingredients_all = function (req, res) {
    Ingredient.find(function (err, ingredients) {
        if (err) return next(err);
        res.send(ingredients);
    })
};

exports.ingredient_details = function (req, res) {
    Ingredient.findById(req.params.id, function (err, ingredient) {
        if (err) return next(err);
        res.send(ingredient);
    })
};

exports.ingredient_update = function (req, res) {
    Ingredient.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Ingredient udpated.');
    });
};

exports.ingredient_delete = function (req, res) {
    Ingredient.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};