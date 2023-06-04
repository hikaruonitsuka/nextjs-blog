import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * microCMSで取得した公開日などの時間を正規化する
 * @param time microCMSから取得した公開日など
 * @returns YYYY-MM-DD形式で値を返す
 */
const normalizeTime = (time) => {
	return dayjs.utc(time).tz('Asia/Tokyo').format('YYYY-MM-DD');
};

export default normalizeTime;
