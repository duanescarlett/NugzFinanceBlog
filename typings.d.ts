import { AuthStoreOptions, Image, Slug } from "sanity";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

interface Post extends Base {
  author: AuthStoreOptions;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title:
} 1:23:50