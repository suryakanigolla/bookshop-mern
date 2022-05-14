const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const addressSchema = mongoose.Schema(
  {
    streetAddress: {
      type: String,
      required: true,
      trim: true,
    },
    landmark: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      enum: ["Tamil Nadu"],
      required: true,
    },
    city: {
      type: String,
      enum: ["Coimbatore"],
      required: true,
    },
    pincode: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      trim: true,
      validate(value) {
        if (!validator.isMobilePhone(value, ["en-IN"])) {
          throw new Error("Invalid phone number");
        }
      },
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
addressSchema.plugin(toJSON);

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
