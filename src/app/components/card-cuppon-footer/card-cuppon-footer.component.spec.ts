import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCupponFooterComponent } from './card-cuppon-footer.component';

describe('CardCupponFooterComponent', () => {
  let component: CardCupponFooterComponent;
  let fixture: ComponentFixture<CardCupponFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCupponFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCupponFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
