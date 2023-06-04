export const Category = ({ category }) => {
	return (
		<>
			<span className='rounded-md bg-secondary-50 p-2 text-xs leading-none dark:bg-secondary-800'>
				{category}
			</span>
		</>
	);
};

export default Category;
