import { Controller, Get } from '@nestjs/common';
import { TicketsService } from '../service/tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {
  }

  @Get()
  getTicketsList(): Promise<any> {
    return this.ticketsService.getTicketsList();
  }
}
