import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

const ACCESS_TOKEN_SECRET: string | undefined = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET: string | undefined =
  process.env.REFRESH_TOKEN_SECRET;

export const generateAccessToken = (id: string): string => {
  return jwt.sign({ data: id }, ACCESS_TOKEN_SECRET!, { expiresIn: "24h" });
};
export const generateRefreshToken = (id: string): string => {
  return jwt.sign({ data: id }, REFRESH_TOKEN_SECRET!, { expiresIn: "14d" });
};

export const verifyAccessToken = (token: string) => {
  try {
    const payload = jwt.verify(token, ACCESS_TOKEN_SECRET!) as { data: string };
    return payload.data;
  } catch (error) {
    console.log(error);
    return;
  }
};
