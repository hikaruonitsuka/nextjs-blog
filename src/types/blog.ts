import { Post } from '@/types/post';

export type Blog = {
	contents: Post[];
	totalCount: number;
	offset: number;
	limit: number;
};
