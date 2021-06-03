import { Request, Response, NextFunction } from "express";
import { IRequest } from "../types/Request";
import TokenModel from "../models/Token";
import { SendResponse } from "../lib/response";
import { checkToken } from "../jwt";
export default async function (
  req: IRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const accessToken = req.headers.authorization;
    const token = await TokenModel.findOne({ accessToken });
    if (!token) {
      return new SendResponse(res).error(401, "UNAUTHURIZED");
    }
    const result = await checkToken(token);
    req.session = {
      user: result,
    };
    next();
  } catch (e) {
    console.log(e);
    return new SendResponse(res).error(500, "SERVER_ERROR");
  }
}
