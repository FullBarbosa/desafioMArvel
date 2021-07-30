import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewTextComponent } from './card-view-text.component';

describe('CardViewTextComponent', () => {
  let component: CardViewTextComponent;
  let fixture: ComponentFixture<CardViewTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardViewTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViewTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
