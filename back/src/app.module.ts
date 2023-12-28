import { Module } from '@nestjs/common';
import getTypeOrmModule from "./get-typeorm-config";
import {UserController} from "./user/user.controller";
import {UserService} from "./user/user.service";
import {AuthController} from "./auth/auth.controller";
import {AuthService} from "./auth/auth.service";
import {JwtService} from "@nestjs/jwt";

@Module({
  imports: [getTypeOrmModule()],
  controllers: [UserController,AuthController],
  providers: [UserService,AuthService,JwtService],
})
export class AppModule {}
