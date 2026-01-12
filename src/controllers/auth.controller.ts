import type { RequestHandler } from 'express';

export const register: RequestHandler = async (req, res) => {
  // TODO: Implement user registration
  // Make sure to securely hash the password and storing only the hash
  // Issue a token and put them in cookies
};

export const login: RequestHandler = async (req, res) => {
  // TODO: Implement user login
  // Check if the user exists in the database
  // Compare the password from the request with the hash in your db
  // Send an Error "Incorrect credentials" if either no user is found (invalid email) or the password is incorrect
  // Issue token and put them into cookies
};

export const logout: RequestHandler = async (req, res) => {
  // TODO: Implement logout by removing the tokens
  // Get the tokens from the cookies
};

export const me: RequestHandler = async (req, res, next) => {
  // TODO: Implement a me handler
  // Get the access token and use it to retrieve the user's data
  // Make sure that the token is valid and not expired
};
