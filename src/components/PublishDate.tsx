import normalizeTime from '@/utils/normalizeTime';
import { IoMdTime } from 'react-icons/io';

type Date = {
  date: string;
};

export const PublishDate = ({ date }: Date) => {
  return (
    <span className='flex items-center gap-2 text-xs leading-none'>
      <IoMdTime />
      <time dateTime={normalizeTime(date)}>{normalizeTime(date)}</time>
    </span>
  );
};

export default PublishDate;
