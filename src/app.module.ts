import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

const uri =
  'mongodb+srv://vlad:222333@cluster0.3hcyd.mongodb.net/ticketsDB?retryWrites=true&w=majority';

@Module({
  imports: [MongooseModule.forRoot(uri)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
