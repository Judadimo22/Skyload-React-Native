const { Schema, model, Model } = require("mongoose");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const loadSchema = new Schema(
  {
    price: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Product", loadSchema);