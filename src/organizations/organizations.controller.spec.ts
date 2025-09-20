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

    const createSpy = jest
      .spyOn(service, 'create')
      .mockReturnValue(expectedResult);

    expect(controller.create(createOrganizationDto)).toBe(expectedResult);
    expect(createSpy).toHaveBeenCalledWith(createOrganizationDto);
  });

  it('should return all organizations', () => {
    const expectedResult = 'This action returns all organizations';

    const findAllSpy = jest
      .spyOn(service, 'findAll')
      .mockReturnValue(expectedResult);

    expect(controller.findAll()).toBe(expectedResult);
    expect(findAllSpy).toHaveBeenCalled();
  });

  it('should return a specific organization', () => {
    const organizationId = '1';
    const expectedResult = 'This action returns a #1 organization';

    const findOneSpy = jest
      .spyOn(service, 'findOne')
      .mockReturnValue(expectedResult);

    expect(controller.findOne(organizationId)).toBe(expectedResult);
    expect(findOneSpy).toHaveBeenCalledWith(1);
  });

  it('should update an organization', () => {
    const organizationId = '1';
    const updateOrganizationDto: UpdateOrganizationDto = {};
    const expectedResult = 'This action updates a #1 organization';

    const updateSpy = jest
      .spyOn(service, 'update')
      .mockReturnValue(expectedResult);

    expect(controller.update(organizationId, updateOrganizationDto)).toBe(
      expectedResult,
    );
    expect(updateSpy).toHaveBeenCalledWith(1, updateOrganizationDto);
  });

  it('should remove an organization', () => {
    const organizationId = '1';
    const expectedResult = 'This action removes a #1 organization';

    const removeSpy = jest
      .spyOn(service, 'remove')
      .mockReturnValue(expectedResult);

    expect(controller.remove(organizationId)).toBe(expectedResult);
    expect(removeSpy).toHaveBeenCalledWith(1);
  });
});
