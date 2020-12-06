import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibAngularRatingComponent } from './angular-rating.component';

describe('LibAngularRatingComponent', () => {
  let component: LibAngularRatingComponent;
  let fixture: ComponentFixture<LibAngularRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibAngularRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibAngularRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
