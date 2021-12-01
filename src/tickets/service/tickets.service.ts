import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { InjectModel } from '@nestjs/mongoose';

import { Tickets, TicketsDocument } from '../schemas/tickets.schema';

@Injectable()
export class TicketsService {
  constructor(
    @InjectModel(Tickets.name)
    private ticketsModel: Model<TicketsDocument>,
  ) {
  }

  getTicketsList(): Promise<any> {
    const ticketsList = this.ticketsModel.find().exec();
    return ticketsList;
  }
}
