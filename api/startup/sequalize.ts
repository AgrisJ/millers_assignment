import { Sequelize } from 'sequelize';
const sequelize = new Sequelize(process.env.POSTGRES_DATABASE_URL || '');

export { sequelize };
