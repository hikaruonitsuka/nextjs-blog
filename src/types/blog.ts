export type Blog = {
  id: string;
  title: string;
  body: string;
  category: {
    name: string;
  };
  publishedAt: string;
  icon: string;
};
