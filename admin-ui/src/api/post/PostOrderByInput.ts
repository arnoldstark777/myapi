import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  userId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  extra?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  nsfw?: SortOrder;
  published?: SortOrder;
  thumbnail?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
