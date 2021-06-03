import { Request, Response, NextFunction } from "express";
import { SendResponse } from "../lib/response";
import { IRequest } from "../types/Request";
import CategoryModel from "../models/Category";
export default class {
  async create(req: IRequest, res: Response) {
    try {
      const data = req.body;
      console.log(data);
      const existingData = await CategoryModel.findOne({ name: data.name });
      if (existingData) {
        return new SendResponse(res).error(400, "CATEGORY_EXIST");
      }
      const category = await CategoryModel.create(data);
      res.status(201).send({ msg: "OK", data: category });
    } catch (e) {
      new SendResponse(res).error(500, "SERVER_ERROR");
      throw new Error(`User controller register error: ${e}`);
    }
  }
  async list(req: IRequest, res: Response) {
    try {
      const categories = await CategoryModel.find();
      res.status(201).send({ msg: "OK", data: categories });
    } catch (e) {
      new SendResponse(res).error(500, "SERVER_ERROR");
      throw new Error(`User controller register error: ${e}`);
    }
  }
  async load(req: IRequest, res: Response) {
    try {
      const id: string = req.params.id;
      const category = await CategoryModel.findById(id);
      if (!category) {
        return new SendResponse(res).error(404, "CATEGORY_NOT_FOUND");
      }
      res.status(201).send({ msg: "OK", data: category });
    } catch (e) {
      new SendResponse(res).error(500, "SERVER_ERROR");
      throw new Error(`User controller register error: ${e}`);
    }
  }
  async update(req: IRequest, res: Response) {
    try {
      const id: string = req.params.id;
      const data = req.body;
      const category = await CategoryModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      if (!category) {
        return new SendResponse(res).error(404, "CATEGORY_NOT_FOUND");
      }
      res.status(201).send({ msg: "OK", data: category });
    } catch (e) {
      new SendResponse(res).error(500, "SERVER_ERROR");
      throw new Error(`User controller register error: ${e}`);
    }
  }
  async remove(req: IRequest, res: Response) {
    try {
      const id: string = req.params.id;
      const category = await CategoryModel.findByIdAndDelete(id);
      if (!category) {
        return new SendResponse(res).error(404, "CATEGORY_NOT_FOUND");
      }
      res.status(201).send({ msg: "OK", data: category });
    } catch (e) {
      new SendResponse(res).error(500, "SERVER_ERROR");
      throw new Error(`User controller register error: ${e}`);
    }
  }
}
