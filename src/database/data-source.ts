import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: '123456789',
  database: 'db_users',

};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
