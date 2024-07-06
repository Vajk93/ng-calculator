import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaultKeyComponent } from './cault-key.component';

describe('CaultKeyComponent', () => {
  let component: CaultKeyComponent;
  let fixture: ComponentFixture<CaultKeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaultKeyComponent]
    });
    fixture = TestBed.createComponent(CaultKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
