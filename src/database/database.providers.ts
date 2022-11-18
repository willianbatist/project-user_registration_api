import { DataSource } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Users1668791026622 } from '../users/migrations/1668791026622-Users';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '997366918',
        database: 'testes',
        entities: [User],
        migrations: [Users1668791026622],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
