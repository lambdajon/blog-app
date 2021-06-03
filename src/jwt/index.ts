import { sign, verify } from "jsonwebtoken";
import Token from "../models/Token";
import { IUser } from "../models/User";
const createToken = async (payload: any, expiresIn: number) => {
  const key: string = process.env.JWT_SECRET || "123456789";
  return sign(payload, key, {
    expiresIn,
    algorithm: "HS512",
  });
};

export async function jwtSignIn(user: any) {
  const expiredAccessToken = process.env.JWT_ACCESS_TOKEN_T || 3600;
  const expiredRefrehToken = process.env.JWT_ACCESS_TOKEN_T || 36000;
  try {
    const accessToken = await createToken(user, +expiredAccessToken);
    const refreshToken = await createToken(user, +expiredRefrehToken);
    const newToken = {
      accessToken,
      refreshToken,
      userId: user.id,
      expiredAt: Date.now() + +expiredAccessToken,
    };
    const token = await Token.create(newToken);

    return { accessToken, refreshToken };
  } catch (e) {
    throw new Error(`JWT jwtSignIn error: ${e}`);
  }
}

export async function checkToken(token: any): Promise<IUser> {
  const key: string = process.env.JWT_SECRET || "123456789";
  return verify(token.accessToken, key) as IUser;
}
