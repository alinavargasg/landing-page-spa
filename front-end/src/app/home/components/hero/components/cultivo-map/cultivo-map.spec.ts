import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultivoMap } from './cultivo-map';

describe('CultivoMap', () => {
  let component: CultivoMap;
  let fixture: ComponentFixture<CultivoMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CultivoMap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CultivoMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
