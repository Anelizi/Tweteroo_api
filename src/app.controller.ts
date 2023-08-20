import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/tweets")
  getTweets(){
    return this.appService.getTweets();
  }

  // @Get("/tweets/:username")
  // getTweetsUser(): string {
  //   return this.appService.getTweets();
  // }

  // @Post("/sign-up")
  // postUser(){

  // }

  // @Post("/tweets")
  // postTwewt(){
    
  // }
}
