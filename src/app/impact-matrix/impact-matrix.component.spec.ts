import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactMatrixComponent } from './impact-matrix.component';

describe('ImpactMatrixComponent', () => {
  let component: ImpactMatrixComponent;
  let fixture: ComponentFixture<ImpactMatrixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpactMatrixComponent]
    });
    fixture = TestBed.createComponent(ImpactMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
