import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignmentDeatilComponent } from './asignment-deatil.component';

describe('AsignmentDeatilComponent', () => {
  let component: AsignmentDeatilComponent;
  let fixture: ComponentFixture<AsignmentDeatilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignmentDeatilComponent]
    });
    fixture = TestBed.createComponent(AsignmentDeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
