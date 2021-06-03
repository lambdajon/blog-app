import { Response } from "express";

export class SendResponse {
  constructor(private res: Response) {}

  success = (data: any) => {
    this.res.status(200).send({ msg: "OK", data });
  };
  error = (status: number, errorMsg: string, errors?: any) => {
    this.res.status(status).send({
      msg: errorMsg,
      errors,
    });
  };
}
