import { IoMdTime } from 'react-icons/io';
import { MdUpdate } from 'react-icons/md';

type Props = {
  date: string;
  time: 'publish' | 'update';
};

export const Date = ({ date, time }: Props) => {
  return (
    <span className='flex items-center gap-2 text-xs leading-none'>
      {time === 'publish' ? <IoMdTime /> : <MdUpdate />}
      <time dateTime={date}>{date}</time>
    </span>
  );
};

export default Date;
