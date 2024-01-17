
// import { User } from '../users/entities/user.entity';
// import { Users1668791026622 } from '../users/migrations/1668791026622-Users';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'user',
        password: '123456789',
        database: 'db_users',
        entities: ['dist/**/*.entity{.js,.js}'],
        migrations: ['dist/users/migrations/*.js'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
