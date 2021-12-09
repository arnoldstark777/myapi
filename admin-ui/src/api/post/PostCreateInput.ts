import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonValue } from "type-fest";

export type PostCreateInput = {
  user?: UserWhereUniqueInput | null;
  content: string;
  extra?: JsonValue | null;
  image?: string | null;
  nsfw?: boolean | null;
  published?: boolean | null;
  thumbnail?: string | null;
  title: string;
};
