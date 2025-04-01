import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutThisPageComponent } from './about-this-page.component';

describe('AboutThisPageComponent', () => {
  let component: AboutThisPageComponent;
  let fixture: ComponentFixture<AboutThisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutThisPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutThisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
