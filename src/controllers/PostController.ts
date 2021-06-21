import { Request, Response, NextFunction } from "express";
import { SendResponse } from "../lib/response";
import { IRequest } from "../types/Request";
import PostModel from "../models/Post";
import { PAGINATION } from "../core/config";

// TODO: Formatting paginate responses
// TODO: Implement file uploading Create upload images
// TODO: Refactoring pagination
export default class {
  async create(req: IRequest, res: Response) {
    try {
      const data = req.body;
      const postData = new PostModel({
        ...data,
        author: req.session.user._id,
      });
      const post: any = await PostModel.create(postData);
      new SendResponse(res).success(post);
    } catch (e) {
      new SendResponse(res).error(500, "SERVER_ERROR");
      throw new Error(`User controller register error: ${e}`);
    }
  }
  async list(req: IRequest, res: Response) {
    try {
      const posts = await PostModel.find()
        .populate("author", ["_id", "firstName", "lastName", "username"])
        .limit(PAGINATION.limit)
        .skip(PAGINATION.order);
      new SendResponse(res).success(posts);
    } catch (e) {
      new SendResponse(res).error(500, "SERVER_ERROR");
      throw new Error(`User controller register error: ${e}`);
    }
  }
  async load(req: IRequest, res: Response) {
    try {
      const post = await PostModel.findById(req.params.id);
      if (!post) {
        return new SendResponse(res).error(404, "POST_NOT_FOUND");
      }
      new SendResponse(res).success(post);
    } catch (e) {
      new SendResponse(res).error(500, "SERVER_ERROR");
      throw new Error(`User controller register error: ${e}`);
    }
  }
  async update(req: IRequest, res: Response) {
    try {
      const id: string = req.params.id;
      const data = req.body;
      const post = await PostModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      if (!post) {
        return new SendResponse(res).error(404, "POST_NOT_FOUND");
      }
      new SendResponse(res).success(post);
    } catch (e) {
      new SendResponse(res).error(500, "SERVER_ERROR");
      throw new Error(`User controller register error: ${e}`);
    }
  }
  async remove(req: IRequest, res: Response) {
    try {
      const id: string = req.params.id;
      const post = await PostModel.findByIdAndDelete(id);
      if (!post) {
        return new SendResponse(res).error(404, "CATEGORY_NOT_FOUND");
      }
      new SendResponse(res).success(post);
    } catch (e) {
      new SendResponse(res).error(500, "SERVER_ERROR");
      throw new Error(`User controller register error: ${e}`);
    }
  }
}
