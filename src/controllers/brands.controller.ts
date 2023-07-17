import { Controller,Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
    @Get(':brandName')
    getBrands(@Param ('brandName') brandName : string){
        return `This is tje custom ID ${brandName}`
    }
}
