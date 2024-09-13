import { genSalt, hash } from "bcrypt";
import mongoose from "mongoose";
// import Joi from "joi";
// import passwordComplexity from "joi-password-complexity";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is Required."],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required."],
    unique: false,
  },

  firstName: { type: String, required: false },
  lastName: { type: String, required: false },
  image: { type: String, required: false },
  color: { type: String, required: false },
  profileSetup: { type: Boolean, required: false },
});

userSchema.pre("save", async function (next) {
  const salt = await genSalt();
  this.password = await hash(this.password, salt);
  next();
});

const User = mongoose.model("Users", userSchema);

// const validate = (data) => {
//   const schema = Joi.object({
//     firstName: Joi.string().required().label("First Name"),
//     lastName: Joi.string().required().label("Last Name"),
//     email: Joi.string().email().required().label("Email"),
//     password: passwordComplexity().required().label("Password"),
//   });
//   return schema.validate(data);
// };

export default User;
