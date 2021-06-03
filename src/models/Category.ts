import mongoose, { Schema, Document, HookNextFunction } from "mongoose";

export interface ICategory extends Document {
  name: string;
}

const CategorySchema: any = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
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

export default mongoose.model<ICategory>("Category", CategorySchema);