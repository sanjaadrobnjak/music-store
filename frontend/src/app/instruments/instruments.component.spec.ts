import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentsComponent } from './instruments.component';

describe('InstrumentsComponent', () => {
  let component: InstrumentsComponent;
  let fixture: ComponentFixture<InstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstrumentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
