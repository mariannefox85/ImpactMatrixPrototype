import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellImpactMatrixComponent } from './impact-matrix-key.component';

describe('ShellImpactMatrixComponent', () => {
  let component: ShellImpactMatrixComponent;
  let fixture: ComponentFixture<ShellImpactMatrixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShellImpactMatrixComponent]
    });
    fixture = TestBed.createComponent(ShellImpactMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
