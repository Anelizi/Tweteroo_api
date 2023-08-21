import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Tweet } from './entities/tweets.entity';
import { UserDto } from './dtos/users.dtos';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealth(): string {
    return this.appService.getHealth();
  }

  // @Get("/tweets")
  // getTweets(@Query('page') page: number): Tweet[]{
  //   return this.appService.getTweets(page);
  // }

  // @Get("/tweets/:username")
  // getTweetsUser(@Params(username) username: string) {
  //   return this.appService.getTweetsUser(username);
  // }

  @Post("/sign-up")
  @HttpCode(200)
  postUser(@Body() body: UserDto){
    return this.appService.postUser(body);
  }

  // @Post("/tweets")
  // postTwewt(){
    
  // }
}
