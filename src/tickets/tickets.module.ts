import { Module } from '@nestjs/common';
import { TicketsService } from './service/tickets.service';
import { MongooseModule } from '@nestjs/mongoose';

import { Tickets, TicketsSchema } from './schemas/tickets.schema';
import { TicketsController } from './controller/tickets.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Tickets.name, schema: TicketsSchema, collection: 'tickets' },
    ]),
  ],
  controllers: [TicketsController],
  providers: [TicketsService],
})
export class TicketsModule {}
