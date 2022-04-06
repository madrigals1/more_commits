import dotenv from 'dotenv';

dotenv.config();

const { INTERNAL_PORT: PORT } = process.env;

export default {
  PORT: parseInt(PORT, 10),
};
