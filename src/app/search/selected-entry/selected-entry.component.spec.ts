import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedEntryComponent } from './selected-entry.component';

describe('SelectedEntryComponent', () => {
  let component: SelectedEntryComponent;
  let fixture: ComponentFixture<SelectedEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
