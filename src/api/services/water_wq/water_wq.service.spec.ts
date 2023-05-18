import { Test, TestingModule } from '@nestjs/testing';
import { WaterWqService } from './water_wq.service';

describe('WaterWqService', () => {
  let service: WaterWqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaterWqService],
    }).compile();

    service = module.get<WaterWqService>(WaterWqService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
