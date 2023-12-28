import { Expose } from 'class-transformer';

export class UserRequiredFieldsDto {
  @Expose()
  username: string;

  @Expose()
  name: string;


}
