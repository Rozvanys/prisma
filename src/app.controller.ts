import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { PrismaService } from './prisma.service.js';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly db: PrismaService
  ) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      title: 'My First NestJS App'
    }
  }

  @Get('users')
  listUsers(){
    return this.db.person.findMany()
  }
}
