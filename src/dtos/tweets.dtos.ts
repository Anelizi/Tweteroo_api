import { IsString, IsNotEmpty } from 'class-validator';
export class TweetsDtos {
    @IsString()
    @IsNotEmpty({message: 'All fields are required!'})
    username: string;

    @IsString()
    @IsNotEmpty({message: 'All fields are required!'})
    tweet: string;
}