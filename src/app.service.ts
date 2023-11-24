import { Injectable } from '@nestjs/common';

interface ProjectUrl {
  name: string;
  url: string;
}

export interface ProjectInfo {
  name: string;
  description: string;
  imageUrl: string;
  urls: ProjectUrl[];
  tags: string[];
}

@Injectable()
export class AppService {

  getProjectsInfo(): ProjectInfo[] {
    return [
      {
        name: "NestJS",
        description: "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
        imageUrl: "https://nestjs.com/img/logo_text.svg",
        urls: [
          {
            name: "NestJS",
            url: "https://nestjs.com/"
          },
          {
            name: "GitHub",
            url: ""
          }
        ],
        tags: ["NodeJS", "TypeScript", "NestJS"]
      }
    ]
  }

}
