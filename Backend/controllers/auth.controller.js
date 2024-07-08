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
    }
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
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error registering user", error: error.message });
  }
}
