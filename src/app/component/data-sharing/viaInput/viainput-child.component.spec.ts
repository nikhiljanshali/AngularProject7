import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViainputChildComponent } from './viainput-child.component';

describe('ViainputChildComponent', () => {
  let component: ViainputChildComponent;
  let fixture: ComponentFixture<ViainputChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViainputChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViainputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
