import { User } from "../user/User";
import { JsonValue } from "type-fest";

export type Post = {
  user?: User | null;
  content: string;
  createdAt: Date;
  extra: JsonValue | null;
  id: string;
  image: string | null;
  nsfw: boolean | null;
  published: boolean | null;
  thumbnail: string | null;
  title: string;
  updatedAt: Date;
};
