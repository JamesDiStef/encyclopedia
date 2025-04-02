import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { HttpClient } from '@angular/common/http';
import { SelectedEntryComponent } from './selected-entry/selected-entry.component';

@Component({
  selector: 'app-search',
  imports: [SelectedEntryComponent, ReactiveFormsModule],
  templateUrl: './search.component.html',
  providers: [HttpClient],
})
export class SearchComponent {
  isSelected = false;
  applyForm = new FormGroup({
    topic: new FormControl(''),
  });

  query: string = 'abb';
  result!: any | undefined;

  searchService: SearchService = inject(SearchService);
  entryNotFound: boolean = false;

  constructor() {}

  async go() {
    let entry = await this.searchService.getEntryByTopic(
      '' + this.applyForm.get('topic')?.value
    );
    console.log(entry);
    if (entry?.topic) {
      this.result = entry;
      this.entryNotFound = false;
    } else this.entryNotFound = true;
    this.isSelected = true;
  }
}
