import { Component, inject, Input } from '@angular/core';
import { Animal, SearchService } from '../../services/search.service';
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
  @Input() animal!: Animal | undefined;
  isEditing = false;

  addMammalService: AddEntryService = inject(AddEntryService);
  searchService: SearchService = inject(SearchService);

  updateAnimalForm = new FormGroup({
    newDescription: new FormControl(''),
  });

  async toggleDescription() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) this.updateDescription();
    this.animal!.description =
      '' + this.updateAnimalForm.get('newDescription')?.value;
  }

  async updateDescription() {
    console.log(this.updateAnimalForm.get('newDescription')?.value);
    await this.addMammalService.updateEntryDescription(
      '' + this.animal?.species,
      '' + this.updateAnimalForm.get('newDescription')?.value
    );
  }
}
