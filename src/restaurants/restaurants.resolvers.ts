import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  @Query(() => [Restaurant])
  restaurants(): Restaurant[] {
    return [];
  }

  @Mutation(() => Boolean)
  createRestaurant(@Args() createRestaurantsDto: CreateRestaurantDto): boolean {
    console.log(createRestaurantsDto);
    return true;
  }
}
