/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsString,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { UserCreateNestedManyWithoutTodosInput } from "./UserCreateNestedManyWithoutTodosInput";
import { Type } from "class-transformer";
@InputType()
class TodoCreateInput {
  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  completed!: boolean;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  content!: string;

  @ApiProperty({
    required: true,
    type: () => UserCreateNestedManyWithoutTodosInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutTodosInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutTodosInput, {
    nullable: true,
  })
  userId?: UserCreateNestedManyWithoutTodosInput;
}
export { TodoCreateInput };