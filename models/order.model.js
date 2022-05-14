const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    customerId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      default: new Date(),
    },
    bookList: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Book",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
orderSchema.plugin(toJSON);

/**
 * Calculate Total Price before saving and insert it into a new field called totalPrice
 */
orderSchema.pre("save", async function (next) {
  const order = this;
  let totalPrice = 0;
  order.bookList.forEach((book) => (totalPrice += book.price));
  this.totalPrice = totalPrice;
  next();
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
