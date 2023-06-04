import normalizeTime from '@/lib/normalizeTime';
import { IoMdTime } from 'react-icons/io';

export const PublishDate = ({ date }) => {
  return (
    <span className='flex items-center gap-2 text-xs leading-none'>
      <IoMdTime />
      <time dateTime={normalizeTime(date)}>{normalizeTime(date)}</time>
    </span>
  );
};

export default PublishDate;
