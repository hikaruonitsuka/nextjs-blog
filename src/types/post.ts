export type Post = {
  totalCount: number;
  id: string;
  title: string;
  description: string;
  body: string;
  category: Category[];
  publishedAt: string;
  updatedAt: string;
  icon: string;
};

export type Category = {
  id?: string;
  name?: string;
};
