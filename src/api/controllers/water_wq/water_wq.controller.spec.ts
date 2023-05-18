import { Test, TestingModule } from '@nestjs/testing';
import { WaterWqController } from './water_wq.controller';

describe('WaterWqController', () => {
  let controller: WaterWqController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WaterWqController],
    }).compile();

    controller = module.get<WaterWqController>(WaterWqController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
