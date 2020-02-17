import { ENVIROMENT_DEV } from './env.dev';
import { ENVIROMENT_PROD } from './env.prod';
const config = process.env.NODE_ENV === 'production' ? ENVIROMENT_PROD : ENVIROMENT_DEV;
export default config;
