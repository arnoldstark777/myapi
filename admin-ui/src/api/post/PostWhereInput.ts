import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type PostWhereInput = {
  user?: UserWhereUniqueInput;
  content?: StringFilter;
  extra?: JsonNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  nsfw?: BooleanNullableFilter;
  thumbnail?: StringNullableFilter;
  title?: StringFilter;
};
