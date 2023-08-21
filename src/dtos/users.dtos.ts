import { IsString, IsNotEmpty, IsUrl } from 'class-validator';
export class UserDto {
  @IsString()
  @IsNotEmpty({ message: 'All fields are required!' })
  username: string;

  @IsString()
  @IsUrl()
  @IsNotEmpty({ message: 'All fields are required!' })
  avatar: string;
}
