import { IsNotEmpty, Length } from 'class-validator';

class CreateProductDto {
  @Length(3, 50)
  name: string;

  @IsNotEmpty()
  price: number;
}

export default CreateProductDto;
