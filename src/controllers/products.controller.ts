import { Controller, Query, Param, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController { 
    @Get('')
    getProducts(
      @Query('limit') limit = 100,
      @Query('offset') offset = 100,
      @Query('brand') brand: string,
      ){
      return `products: limit => ${limit} offset=> ${offset} brand => ${brand}`;
    }
  
   //Forma sencilla de recibir par'ametros estaticas
   @Get('filter')
   getProductFilter(){
     return `yo soy un filter`;
   }
  
    //Forma sencilla de recibir par'ametros dinamincas
  //@Get('products/:productId')
  @Get(':productId')
  getProduct(@Param('productId') productId: any){
    return `product ${productId}`;
  }
  
}
