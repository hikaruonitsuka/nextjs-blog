import { Category } from '@/types/category';

export const PostCategory = ({ name }: Category) => {
  return (
    <>
      <span className='rounded-md bg-secondary-50 p-2 text-xs leading-none dark:bg-secondary-800'>
        {name}
      </span>
    </>
  );
};

export default Category;
