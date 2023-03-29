import { User } from "./../models/user.model";
import { verifyAccessToken } from "./../handlers/jwt.handler";
import { CustomError } from "./error.middleware";
import { RequestHandler } from "express";

export const authMiddleware: RequestHandler = async (
  req,
  res,
  next
): Promise<void> => {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      throw new CustomError(401, "not accessible!");
    }
    const token = authorization.split(" ")[1];
    const payloadId = verifyAccessToken(token);
    if (!payloadId) {
      throw new CustomError(401, "not accessible!");
    }
    const user = await User.findById(payloadId);
    if (!user) {
      throw new CustomError(401, "not accessible!");
    }
    next();
  } catch (error) {
    next(error);
  }
};
