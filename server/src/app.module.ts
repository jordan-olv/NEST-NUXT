import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HelloModule } from './modules/hello/hello.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),  // Pour charger les variables d'env globalement
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        autoLoadEntities: true,   // Charge automatiquement les entités
        synchronize: true,        // Synchronise la base à chaque démarrage (à désactiver en prod)
      }),
    }),
    HelloModule,
  ],
})
export class AppModule { }
