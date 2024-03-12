import { MicroCMSDate } from 'microcms-js-sdk';

export type Blog = {
  totalCount: number;
  id: string;
  title: string;
  description: string;
  body: string;
  category: Category[];
  publishedAt: string;
  updatedAt: string;
  icon: string;
} & MicroCMSDate;

export type Category = {
  id?: string;
  name?: string;
};
