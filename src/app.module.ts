import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(
    'mongodb+srv://w3sll3yDB:Erdkui.8818@cluster0.dghpn.mongodb.net/test'
  ), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
