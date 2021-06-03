import { Request } from "express";
import { IUser } from "../models/User";
interface Session {
  user: IUser;
}

export interface IRequest extends Request {
  session: Session;
}