import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P008Component } from './p008.component';

describe('P008Component', () => {
  let component: P008Component;
  let fixture: ComponentFixture<P008Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P008Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P008Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
