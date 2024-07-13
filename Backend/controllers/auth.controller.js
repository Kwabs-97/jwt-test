import bcrypt from "bcrypt";

import {
  _createNewUser,
  _getUserByEmail,
} from "../models/users/users.model.js";

import jwt from "jsonwebtoken";
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
      const hashed_password = await bcrypt.hash(password, saltRounds);

      const newUser = await _createNewUser(
        firstname,
        lastname,
        email,
        hashed_password,
      );
      return res.status(200).json({
        message: "user registration successful",
        data: {
          firstname: newUser.firstname,
          lastname: newUser.lastname,
          email: newUser.email,
        },
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
  console.log("login details", email, password);

  try {
    // Check if user exists
    const existingUser = await _getUserByEmail(email);

    if (!existingUser) {
      return res.status(404).json({
        message: "Account does not exist. Please register to get started",
      });
    }

    // Compare passwords for authentication
    const isPasswordMatch = await bcrypt.compare(
      password,
      existingUser.hashed_password,
    );

    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Incorrect email or password, please try again",
      });
    }

    // Create token data
    const tokenData = {
      email: existingUser.email,
      userId: existingUser.id,
    };

    // Generate token using JWT
    const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    // Send token as a cookie
    const cookieOptions = {
      maxAge: 24 * 60 * 60 * 1000, // 1 day
      httpOnly: true,
    };

    res.cookie("token", token, cookieOptions);

    // Send success response
    return res.status(200).json({
      message: "Login successful",
      userData: {
        firstname: existingUser.firstname,
        lastname: existingUser.lastname,
        email: existingUser.email,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error", error });
  }
}
