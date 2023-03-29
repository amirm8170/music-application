import { NextFunction, Request , Response } from "express";

export class CustomError extends Error {
  constructor(public statusCode: number, public message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err.stack);

  const statusCode = err.statusCode || 500;
  const errorMessage = err.message || "something went wrong!";

  return res
    .status(statusCode)
    .json({ err: { statusCode, message: errorMessage } });
};
