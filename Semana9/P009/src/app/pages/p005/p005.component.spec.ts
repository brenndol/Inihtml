import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P005Component } from './p005.component';

describe('P005Component', () => {
  let component: P005Component;
  let fixture: ComponentFixture<P005Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P005Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(P005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
