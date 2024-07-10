import bcrypt from "bcrypt";
import {
  _createNewUser,
  _getUserByEmail,
} from "../models/users/users.model.js";
export async function registerController(req, res) {
  const { firstname, lastname, email, password } = req.body;
  try {
    const existingUser = await _getUserByEmail(email);
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exist" });
    } else {
      const saltRounds = 10;
      const hashed_password = bcrypt.hash(password, saltRounds);
      const newUser = await _createNewUser(
        firstname,
        lastname,
        email,
        hashed_password,
      );
      res.status(200).json({
        message: "user registration successful",
        data: { firstname, lastname, email },
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
}

export async function loginController(req, res) {
  const { email, password } = req.body;
  try {
    //check if user exist
    const existingUser = await _getUserByEmail(email);
    if (!existingUser) {
      return res.status(404).json({
        message: "Account does not exist. Please register to get started",
      });
    }

    //compare passwords for authentication
    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.hashed_password,
    );
    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Incorrect email or password, please try again",
      });
    }
    return res.status(200).json({
      message: "login successful",
      userData: {
        firstname: existingUser.firstname,
        lastname: existingUser.lastname,
        email: existingUser.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal error", error });
  }
}
