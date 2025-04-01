import { Component, inject, Input } from '@angular/core';
import { Entry, SearchService } from '../../services/search.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AddEntryService } from '../../services/add-entry.service';

@Component({
  selector: 'selected-animal',
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './selected-animal.component.html',
})
export class SelectedAnimalComponent {
  faEdit = faEdit;
  @Input() animal!: Entry | undefined;
  isEditing = false;

  addMammalService: AddEntryService = inject(AddEntryService);
  searchService: SearchService = inject(SearchService);

  updateEntryForm = new FormGroup({
    newDescription: new FormControl(''),
  });

  ngOnInit() {
    console.log(this.animal);
  }

  async toggleDescription() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) this.updateDescription();
    this.animal!.description =
      '' + this.updateEntryForm.get('newDescription')?.value;
  }

  async updateDescription() {
    console.log(this.updateEntryForm.get('newDescription')?.value);
    await this.addMammalService.updateEntryDescription(
      '' + this.animal?.topic,
      '' + this.updateEntryForm.get('newDescription')?.value
    );
  }
}
