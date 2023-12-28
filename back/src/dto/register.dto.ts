import { Expose } from 'class-transformer';

export class RegisterDto {
  @Expose()
  username: string;

  @Expose()
  name: string;

  @Expose()
  password: string;

}
