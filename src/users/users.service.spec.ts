import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', () => {
    const createUserDto: CreateUserDto = {};
    const result = service.create(createUserDto);
    
    expect(result).toBe('This action adds a new user');
  });

  it('should return all users', () => {
    const result = service.findAll();
    
    expect(result).toBe('This action returns all users');
  });

  it('should return a specific user', () => {
    const userId = 1;
    const result = service.findOne(userId);
    
    expect(result).toBe('This action returns a #1 user');
  });

  it('should update a user', () => {
    const userId = 1;
    const updateUserDto: UpdateUserDto = {};
    const result = service.update(userId, updateUserDto);
    
    expect(result).toBe('This action updates a #1 user');
  });

  it('should remove a user', () => {
    const userId = 1;
    const result = service.remove(userId);
    
    expect(result).toBe('This action removes a #1 user');
  });
});
