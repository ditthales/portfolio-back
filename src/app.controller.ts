import { Controller, Get } from '@nestjs/common';
import { AppService, TestimonialInfo } from './app.service';
import { ProjectInfo } from './app.service';
import { LanguageJSON } from './interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/getProjects")
  getProjectsInfo(): ProjectInfo[] {
    return this.appService.getProjectsInfo();
  }

  @Get("/getPtJSON")
  getPtJSON(): LanguageJSON {
    return this.appService.getPortugueseJSON();
  }

  @Get("/getEnJSON")
  getEnJSON(): LanguageJSON {
    return this.appService.getEnglishJSON();
  }

  @Get("/getEsJSON")
  getEsJSON(): LanguageJSON {
    return this.appService.getSpanishJSON();
  }

  @Get("/getFrJSON")
  getFrJSON(): LanguageJSON {
    return this.appService.getFrenchJSON();
  }

  @Get("getTestimonials")
  getTestimonials(): TestimonialInfo[] {
    return this.appService.getTestimonials();
  }
}
