import { Controller,Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get(':userID/user/:alias')
    getUser(@Param ('userID') userID: string, @Param ('alias') alias: string )
    {
        return `The userID is ${userID} and its name ${alias}`
    }
}
