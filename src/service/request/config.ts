let BASE_URL: string;
const TIME_OUT = 5000;

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:5000';
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://152.136.185.210:5000';
}

export { BASE_URL, TIME_OUT };
