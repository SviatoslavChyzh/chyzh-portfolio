import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

// route POST /api/auth/login
// @access Public
export const authUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  // const userExists = await User.findOne({ email: email });
  //
  // if (userExists) {
  //   res.status(400);
  //   throw new Error('User already exists');
  // }

  // const user = await User.create({
  //   name,
  //   email,
  //   password,
  // });

  // if (user) {
  //   res.status(201).json({
  //     _id: user._id,
  //     name: user.name,
  //     email: user.email,
  //   });
  // } else {
  //   res.status(400);
  //   throw new Error('Invalid user data');
  // }
  res.status(200).json({ message: 'Register User' });
  console.log(name, password);
});

// route POST /api/auth/register
// @access Public
export const registerUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Register User' });
});

// route POST /api/auth/logout
// @access Public
export const logoutUser = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Logout User' });
});

// route GET /api/users/profile
// @access Private
export const getUserProfile = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: 'User Profile' });
});

// route PUT /api/users/profile
// @access Private
export const updateUserProfile = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Update User Profile' });
});
