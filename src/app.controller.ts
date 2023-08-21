import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './dtos/users.dtos';
import { TweetsDtos } from './dtos/tweets.dtos';

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

  @Post('/sign-up')
  @HttpCode(200)
  postUser(@Body() body: UserDto) {
    return this.appService.postUser(body);
  }

  @Post('/tweets')
  postTweet(@Body() body: TweetsDtos) {
    const { username, tweet } = body;
    if (!this.appService.userExists(username)) {
      throw new UnauthorizedException();
    }
    this.appService.postTwewt(username, tweet);
  }
}
