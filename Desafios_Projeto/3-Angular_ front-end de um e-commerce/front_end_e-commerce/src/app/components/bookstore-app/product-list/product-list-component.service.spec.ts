import { TestBed } from '@angular/core/testing';

import { ProductListComponentService } from './product-list-component.service';

describe('ProductListComponent.ServiceService', () => {
  let service: ProductListComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
