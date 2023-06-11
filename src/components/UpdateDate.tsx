import normalizeTime from '@/lib/normalizeTime';
import { MdUpdate } from 'react-icons/md';

type Date = {
  date: string;
};

export const UpdateDate = ({ date }: Date) => {
  return (
    <span className='flex items-center gap-2 text-xs leading-none'>
      <MdUpdate />
      <time dateTime={normalizeTime(date)}>{normalizeTime(date)}</time>
    </span>
  );
};

export default UpdateDate;
