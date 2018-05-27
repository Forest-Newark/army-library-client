import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionDetailComponent } from './composition-detail.component';

describe('CompositionDetailComponent', () => {
  let component: CompositionDetailComponent;
  let fixture: ComponentFixture<CompositionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
