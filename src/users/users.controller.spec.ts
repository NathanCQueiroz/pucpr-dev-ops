import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', () => {
    const createUserDto: CreateUserDto = {};
    const expectedResult = 'This action adds a new user';
    
    jest.spyOn(service, 'create').mockReturnValue(expectedResult);
    
    expect(controller.create(createUserDto)).toBe(expectedResult);
    expect(service.create).toHaveBeenCalledWith(createUserDto);
  });

  it('should return all users', () => {
    const expectedResult = 'This action returns all users';
    
    jest.spyOn(service, 'findAll').mockReturnValue(expectedResult);
    
    expect(controller.findAll()).toBe(expectedResult);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a specific user', () => {
    const userId = '1';
    const expectedResult = 'This action returns a #1 user';
    
    jest.spyOn(service, 'findOne').mockReturnValue(expectedResult);
    
    expect(controller.findOne(userId)).toBe(expectedResult);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update a user', () => {
    const userId = '1';
    const updateUserDto: UpdateUserDto = {};
    const expectedResult = 'This action updates a #1 user';
    
    jest.spyOn(service, 'update').mockReturnValue(expectedResult);
    
    expect(controller.update(userId, updateUserDto)).toBe(expectedResult);
    expect(service.update).toHaveBeenCalledWith(1, updateUserDto);
  });

  it('should remove a user', () => {
    const userId = '1';
    const expectedResult = 'This action removes a #1 user';
    
    jest.spyOn(service, 'remove').mockReturnValue(expectedResult);
    
    expect(controller.remove(userId)).toBe(expectedResult);
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});
