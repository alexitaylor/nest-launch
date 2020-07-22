import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Mission } from './mission.model';
import { Rocket } from './rocket.model';
import { User } from '../../user/models/user.model';

@ObjectType()
export class Launch {
  @Field(type => ID)
  id: string;

  @Field()
  site: string;

  @Field()
  mission?: Mission;

  @Field()
  rocket?: Rocket;

  @Field()
  cursor?: string;

  // @Field()
  // user?: User;
}

