import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedAnimalComponent } from './selected-animal.component';

describe('SelectedAnimalComponent', () => {
  let component: SelectedAnimalComponent;
  let fixture: ComponentFixture<SelectedAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedAnimalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
