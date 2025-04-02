import { Component, inject, Input } from '@angular/core';
import { Entry, SearchService } from '../../services/search.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { AddEntryService } from '../../services/add-entry.service';

@Component({
  selector: 'selected-entry',
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './selected-entry.component.html',
})
export class SelectedEntryComponent {
  faEdit = faEdit;
  @Input() entry!: Entry | undefined;
  isEditing = false;

  addMammalService: AddEntryService = inject(AddEntryService);
  searchService: SearchService = inject(SearchService);

  updateEntryForm = new FormGroup({
    newDescription: new FormControl(''),
  });

  ngOnInit() {
    console.log(this.entry);
  }

  async toggleDescription() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) this.updateDescription();
    this.entry!.description =
      '' + this.updateEntryForm.get('newDescription')?.value;
  }

  async updateDescription() {
    console.log(this.updateEntryForm.get('newDescription')?.value);
    console.log(this.entry);
    await this.addMammalService.updateEntryDescription(
      '' + this.entry?.topic,
      '' + this.updateEntryForm.get('newDescription')?.value
    );
  }
}
