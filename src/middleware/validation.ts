import Joi from "joi";
import { Request, Response, NextFunction } from "express";

export default function (schema: Joi.Schema) {
  return function (req: Request, res: Response, next: NextFunction) {
    const data: any = {}
    if(req.body && Object.keys(req.body).length > 0){
      data.body = req.body
    }
    if(req.query && Object.keys(req.query).length > 0){
      data.query = req.query
    }
    if(req.params && Object.keys(req.params).length > 0){
      data.params = req.params
    }
    const result = schema.validate(data, {
      convert: true,
      allowUnknown: false,
      abortEarly: false
    })
    if(result.error) {
      return res.status(422).send({
        msg: "VALIDATION_ERROR",
        error: result.error
      })
    }
    next();
  }
}
