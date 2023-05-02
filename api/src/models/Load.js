const { Schema, model, Model } = require("mongoose");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const loadSchema = new Schema(
  {
    trademark: { type: String, required: true },
    image: { type: String, required: true },
    //stock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    tallas: [
      {
        talla: { type: String, ref: "Talla" },
        stock: { type: Number, required: true },
      },
    ],
    description: { type: String, required: true },
    // tags:[{type: String}],
    type: {
      type: String,
      enum: {
        values: ["shirts", "pants", "hoodies", "hats"],
        message: "{VALUE} no es un tipo valido",
      },
    },
    active: {
      type: String,
      enum: ["valid", "invalid"],
      default: "valid",
    },
    categorie: {
      type: String,
      enum: {
        values: ["men", "women", "kid"],
        message: "{VALUE} no es una categoria valida",
      },
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    review: {
      type: Array,
      ref: "Review",
    },
  },
  { timestamps: true }
);

module.exports = model("Product", loadSchema);