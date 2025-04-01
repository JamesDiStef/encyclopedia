import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMammalComponent } from './add-mammal.component';

describe('AddMammalComponent', () => {
  let component: AddMammalComponent;
  let fixture: ComponentFixture<AddMammalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMammalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMammalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
