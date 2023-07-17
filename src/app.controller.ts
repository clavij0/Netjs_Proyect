import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('nuevo')
  newEndpoint(){
    return 'yo soy nuevo';
  }

  @Get('/ruta/')
  snewEndpoint(){
    return 'con /sas/';
  }
  //Forma tradicional
  // @Get('products/:productId')
  // getProduct(@Param() params: any){
  //   return `product ${params.productId}`;
  // }

  //Forma sencilla de recibir par'ametros
  // @Get('products/:productId')
  // getProduct(@Param('productId') productId: any){
  //   return `product ${productId}`;
  // }

  
 
 

}
