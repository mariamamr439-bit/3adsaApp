import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardsec3Component } from './cardsec3.component';

describe('Cardsec3Component', () => {
  let component: Cardsec3Component;
  let fixture: ComponentFixture<Cardsec3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardsec3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cardsec3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
