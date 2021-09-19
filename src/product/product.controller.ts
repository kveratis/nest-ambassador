import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('admin/product')
  async all() {
    return this.productService.find({});
  }

  @Post('admin/product')
  async create(@Body() body: CreateProductDto) {
    return this.productService.save(body);
  }

  @Get('admin/product/:id')
  async get(@Param('id') id: number) {
    return this.productService.findOne({ id });
  }

  @Patch('admin/product/:id')
  async update(@Param('id') id: number, @Body() body: UpdateProductDto) {
    await this.productService.update(id, body);

    return this.productService.findOne({ id });
  }

  @Delete('admin/product/:id')
  async delete(@Param('id') id: number) {
    await this.productService.delete(id);

    return {
      message: 'success',
    };
  }
}
