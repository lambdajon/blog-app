import mongoose, { Schema, Document, HookNextFunction } from "mongoose";


export interface IPost extends Document {
  title: string;
  description: string;
  body: string;
  author: string;
  // images: PostImage[];
}

const PostSchema: any = new Schema(
  {
    title: {
      type: String
    },
    description: {
      type: String
    },
    body: {
      type: String
    },
    images: [{
      type: Schema.Types.ObjectId,
      ref: 'PostImage',
    }], 
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  },
  {
    versionKey: false,
    timestamps: true,
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

export default mongoose.model<IPost>("Post", PostSchema);