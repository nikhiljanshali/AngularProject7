import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViainputParentComponent } from './viainput-parent.component';

describe('ViainputParentComponent', () => {
  let component: ViainputParentComponent;
  let fixture: ComponentFixture<ViainputParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViainputParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViainputParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
