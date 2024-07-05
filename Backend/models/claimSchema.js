import mongoose from "mongoose";
import validator from "validator";

const claimSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must be of at least 3 characters."],
    maxLength: [30, "First name cannot exceed 30 characters."],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must be of at least 3 characters."],
    maxLength: [30, "Last name cannot exceed 30 characters."],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email."],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain 10 digits."],
    maxLength: [10, "Phone number must contain 10 digits."],
  },
  policyName: {
    type: String,
    required: true,
    minLength: [3, "Policy name must be of at least 3 characters."],
    maxLength: [50, "Policy name cannot exceed 50 characters."],
  },
  claimAmount: {
    type: Number,
    required: true,
    min: [1, "Claim amount must be at least 1."],
    max: [9999999, "Claim amount cannot exceed 9999999."], // Adjust max amount as per your requirements
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Claim = mongoose.model("Claim", claimSchema);

export default Claim;
