const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export function formatString(value: string, format: string = DATE_TIME_FORMAT) {
  return dayjs(value).format(format);
}
