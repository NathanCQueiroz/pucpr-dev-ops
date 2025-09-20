import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

describe('OrganizationsService', () => {
  let service: OrganizationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrganizationsService],
    }).compile();

    service = module.get<OrganizationsService>(OrganizationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an organization', () => {
    const createOrganizationDto: CreateOrganizationDto = {};
    const result = service.create(createOrganizationDto);

    expect(result).toBe('This action adds a new organization');
  });

  it('should return all organizations', () => {
    const result = service.findAll();

    expect(result).toBe('This action returns all organizations');
  });

  it('should return a specific organization', () => {
    const organizationId = 1;
    const result = service.findOne(organizationId);

    expect(result).toBe('This action returns a #1 organization');
  });

  it('should update an organization', () => {
    const organizationId = 1;
    const updateOrganizationDto: UpdateOrganizationDto = {};
    const result = service.update(organizationId, updateOrganizationDto);

    expect(result).toBe('This action updates a #1 organization');
  });

  it('should remove an organization', () => {
    const organizationId = 1;
    const result = service.remove(organizationId);

    expect(result).toBe('This action removes a #1 organization');
  });
});
