import { Controller, Get, Param } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
    @Get(':CusId')
    getCustomer(@Param ('CusId') CustId : number){
        return `This is tje custom ID ${CustId}`
    }
}
