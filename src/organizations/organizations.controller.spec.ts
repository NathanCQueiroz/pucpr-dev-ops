import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

describe('OrganizationsController', () => {
  let controller: OrganizationsController;
  let service: OrganizationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationsController],
      providers: [OrganizationsService],
    }).compile();

    controller = module.get<OrganizationsController>(OrganizationsController);
    service = module.get<OrganizationsService>(OrganizationsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create an organization', () => {
    const createOrganizationDto: CreateOrganizationDto = {};
    const expectedResult = 'This action adds a new organization';
    
    jest.spyOn(service, 'create').mockReturnValue(expectedResult);
    
    expect(controller.create(createOrganizationDto)).toBe(expectedResult);
    expect(service.create).toHaveBeenCalledWith(createOrganizationDto);
  });

  it('should return all organizations', () => {
    const expectedResult = 'This action returns all organizations';
    
    jest.spyOn(service, 'findAll').mockReturnValue(expectedResult);
    
    expect(controller.findAll()).toBe(expectedResult);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a specific organization', () => {
    const organizationId = '1';
    const expectedResult = 'This action returns a #1 organization';
    
    jest.spyOn(service, 'findOne').mockReturnValue(expectedResult);
    
    expect(controller.findOne(organizationId)).toBe(expectedResult);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update an organization', () => {
    const organizationId = '1';
    const updateOrganizationDto: UpdateOrganizationDto = {};
    const expectedResult = 'This action updates a #1 organization';
    
    jest.spyOn(service, 'update').mockReturnValue(expectedResult);
    
    expect(controller.update(organizationId, updateOrganizationDto)).toBe(expectedResult);
    expect(service.update).toHaveBeenCalledWith(1, updateOrganizationDto);
  });

  it('should remove an organization', () => {
    const organizationId = '1';
    const expectedResult = 'This action removes a #1 organization';
    
    jest.spyOn(service, 'remove').mockReturnValue(expectedResult);
    
    expect(controller.remove(organizationId)).toBe(expectedResult);
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});
