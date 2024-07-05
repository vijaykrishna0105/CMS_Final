import ErrorHandler from "../error/error.js";
import Claim from "../models/claimSchema.js";

const submit_claim = async (req, res, next) => {
  const { firstName, lastName, email, phone, policyName, claimAmount } = req.body;
  
  // Validate required fields
  if (!firstName || !lastName || !email || !phone || !policyName || !claimAmount) {
    return next(new ErrorHandler("Please fill out all fields for claim submission!", 400));
  }

  try {
    // Create new claim using the Claim model
    await Claim.create({ firstName, lastName, email, phone, policyName, claimAmount });
    
    // Respond with success message
    res.status(201).json({
      success: true,
      message: "Claim submitted successfully!",
    });
  } catch (error) {
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map(err => err.message);
      return next(new ErrorHandler(validationErrors.join(', '), 400));
    }

    // Handle other errors
    return next(error);
  }
};

export default submit_claim;
