import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoaneMobileComponent } from './telefoane-mobile.component';

describe('TelefoaneMobileComponent', () => {
  let component: TelefoaneMobileComponent;
  let fixture: ComponentFixture<TelefoaneMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelefoaneMobileComponent]
    });
    fixture = TestBed.createComponent(TelefoaneMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
