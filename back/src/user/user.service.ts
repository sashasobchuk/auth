import {ConflictException, Injectable} from "@nestjs/common";
import {DataSource, EntityManager, FindOneOptions} from "typeorm";
import {User} from "../entities";
import {RegisterDto, UserRequiredFieldsDto} from "../dto";
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
    private readonly entityManager: EntityManager;

    constructor(private readonly dataSource: DataSource) {
        this.entityManager = this.dataSource.createEntityManager();
    }


    async checkUserOnExisting(user: UserRequiredFieldsDto ){
        return this.entityManager.findOne(User,{where:
                [
                    {username:user.username},
                    {name:user.name}
                ]
        })
    }



    async validateUserRegistration(user: RegisterDto){
        if(await this.checkUserOnExisting(user)){
            throw new ConflictException('USER_ALREADY_EXIST');
        }
    }

    async createUser(user: any) {
        const userEntity = this.entityManager.create(User, {
            passwordDigest: user.passwordDigest,
            name: user.name,
            username: user.username,
        })


        await this.entityManager.save(userEntity)
        debugger
        return userEntity
    }

    async getUserByUserName(username:string):Promise<User>{
        return this.entityManager.findOne(User,{
            where:{username:username},
            select:["name","id","username","passwordDigest"]
        } as FindOneOptions<User> )
    }

    async compareUserPassword(password: string, passwordDigest: string,): Promise<boolean> {
        return  bcrypt.compare(password, passwordDigest);
    }
}




