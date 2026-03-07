import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSection2 } from './home-section2';

describe('HomeSection2', () => {
  let component: HomeSection2;
  let fixture: ComponentFixture<HomeSection2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSection2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSection2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
