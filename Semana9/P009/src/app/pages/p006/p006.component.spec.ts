import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P006Component } from './p006.component';

describe('P006Component', () => {
  let component: P006Component;
  let fixture: ComponentFixture<P006Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P006Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P006Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
