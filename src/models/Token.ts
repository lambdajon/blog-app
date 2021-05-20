import mongoose, { Schema, Document } from "mongoose";
import { IUser } from "./User";
export interface IToken extends Document {
  accessToken: string;
  refreshToken: string;
  user: IUser;
  expiredAt: number;
}

const TokenSchema: any = new Schema(
  {
    accessToken: String,
    refreshToken: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    expiredAt: Number,
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

export default mongoose.model<IToken>("Token", TokenSchema);
