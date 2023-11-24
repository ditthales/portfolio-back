import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ProjectInfo } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/get-projects-info")
  getProjectsInfo(): ProjectInfo[] {
    return this.appService.getProjectsInfo();
  }
}
