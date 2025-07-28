import crypto from "crypto";
import { ValidationError } from "../../../../packages/error-handler";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const validateRegistrationData = (
  data: any,
  userType: "user" | "seller"
) => {
  const { name, email, password, phone_number, contry } = data;
  if (
    !name ||
    !email ||
    !password!!(userType === "seller" && (!phone_number || !contry))
  ) {
    throw new ValidationError(`Missing required Fields!`);
  }
  if (!emailRegex.test(email)) {
    throw new ValidationError("Invalid Email format!");
  }
};
