const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let IngredientSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  calories: { type: Number, required: true },
  fat: { type: Number, required: true }
});

// Export the model
module.exports = mongoose.model("Ingredient", IngredientSchema);
