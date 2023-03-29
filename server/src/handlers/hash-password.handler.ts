import bcrypt from "bcrypt";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
};

export const confirmPassword = async (
  loginPassword: string,
  hashPassword: string
) => {
  return await bcrypt.compare(loginPassword, hashPassword);
};
