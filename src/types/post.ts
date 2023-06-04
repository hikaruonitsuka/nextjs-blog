export type Post = {
	totalCount: number;
	id: string;
	title: string;
	body: string;
	category: Category[];
	publishedAt: string;
	updatedAt: string;
	icon: string;
};

export type Category = {
	id: string;
	name: string;
};
