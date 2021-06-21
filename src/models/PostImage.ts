import mongoose, { Schema, Document, HookNextFunction } from "mongoose";

export interface PostImage {
  filePath: string;
  description: string;
}

const ImageSchema: any = new Schema({
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post'
  },
  filePath: String,
  description: String
});

export default mongoose.model<PostImage>("PostImage", ImageSchema);
