const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let IngredientSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  servingText: { type: String, required: true, max: 20 },
  servingAmount: { type: float, required: true },
  servingUnit: { type: String, required: true, max: 5 },
  calories: { type: Number, required: true },
  fat: { type: Number, required: true },
  fatSaturated: { type: Number, required: true },
  fatTrans: { type: Number, required: true },
  cholesterol: { type: Number, required: true },
  sodium: { type: Number, required: true },
  carbs: { type: Number, required: true },
  fiber: { type: Number, required: true },
  sugar: { type: Number, required: true },
  sugarIncluded: { type: Number, required: true },
  sugarAdded: { type: Number, required: true },
  protein: { type: Number, required: true }
});

// Export the model
module.exports = mongoose.model("Ingredient", IngredientSchema);
