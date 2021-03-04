import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { UserType } from './interfaces/user';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createUser = async (user: UserType) => {
    return await this.save(user);
  };

  findOneUser = async (id: string) => {
    return await this.findOneOrFail(id);
  };

  updateUser = async (id: string, user: UserType) => {
    return this.save({ ...user, id: Number(id) });
  };

  removeUser = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}
