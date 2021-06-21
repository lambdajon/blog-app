import { config } from "dotenv";
config();

export const PAGINATION = {
  limit: +process.env.PAGINATION_LIMIT || 15,
  order: +process.env.PAGINATION_ORDER || 0,
};
