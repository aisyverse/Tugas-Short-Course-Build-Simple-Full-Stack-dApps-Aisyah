import { Body, Controller, Get, Query } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
import { GetEventsDto } from './dto/get-events.dto';

@Controller('blockchain')
export class BlockchainController {
  constructor(private readonly blockchainService: BlockchainService) {}

  // GET /blockchain/value
  @Get('value')
  async getValue() {
    return this.blockchainService.getLatestValue();
  }

  // GET /blockchain/events
  @Get('events')
  async getEvents(@Query() query: GetEventsDto) {
    const from = Number(query.fromBlock) || 34000000;
    const to = Number(query.toBlock) || 34000100;

    return this.blockchainService.getValueUpdatedEvents(from, to);
  }
}
